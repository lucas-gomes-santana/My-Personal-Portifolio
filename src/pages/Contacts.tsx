import { useState } from 'react'; 
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { itemVariants } from '../animations/itemVariants';
import '../css/Contacts.css';
import RequiredField from '../components/RequiredFieldLabel';


// Formatação apenas para celulares no padrão de números brasileiros
function formatPhoneNumber(value: string): string {
    let digits = value.replace(/\D/g, '');

    digits = digits.slice(0, 11);

    if (digits.length === 0) return "";

    if (digits.length <= 2) {
        return `(${digits}`;
    }

    if (digits.length <= 3) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }

    if (digits.length <= 7) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}`;
    }

    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}


function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone: string) {
    const phoneRegex = /^\(\d{2}\)\s9\d{4}-\d{4}$/;
    return phoneRegex.test(phone);
}

emailjs.init({
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
});

export function Contacts() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isSending, setIsSending] = useState(false);
    
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        setError('');
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setError('');
    }
    
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
        setError('');
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedPhone = formatPhoneNumber(e.target.value);
        setPhone(formattedPhone);
        setError('');
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        if (name.length < 10) {
            setError("Insira seu nome completo!");
            return;
        }

        if (email.length < 8 || !validateEmail(email)) {
            setError("Insira um email válido!");
            return;
        }

        if (phone.length > 0 && !validatePhone(phone)) {
            setError("Insira um número de telefone válido!");
            return;
        }

        setIsSending(true);

        try {
            const templateParams = {
                from_name: name,
                from_email: email,
                message: `Mensagem enviada por ${name}\n\n Número: ${phone} \n\n E-mail: ${email}\n\n${message}`,
            };

            const response = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams
            );

            if (response.status === 200) {
                alert('Mensagem enviada com sucesso!');
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
                setError('');
            } 
            
            else {
                throw new Error('Falha ao enviar a mensagem');
            }

        } catch (error) {
            console.error('Falha ao enviar a mensagem:', error);
            setError('Falha ao enviar a mensagem. Por favor, tente novamente.');

        } finally {
            setIsSending(false);
        }
    }
    
    return (
        <motion.div 
            className="contacts-container"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
        >
            <h2>Fale comigo</h2>

            {error && <p className="error-message">{error}</p>}

            <motion.form 
                className='contacts-form'
                onSubmit={handleSubmit}
                variants={itemVariants}
            >
                <div className="container-input">
                    <p>Nome <RequiredField> *</RequiredField> :</p>
                    <input 
                        type="text" 
                        placeholder="Seu Nome" 
                        value={name} 
                        onChange={handleNameChange}
                        disabled={isSending}
                        required
                    />
                </div>

                <div className="container-input">
                    <p>Email <RequiredField> *</RequiredField> :</p> 
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={handleEmailChange}
                        disabled={isSending}
                        required
                    />
                </div>

                <div className="container-input">
                    <p>Telefone :</p>
                    <input 
                        type="text" 
                        placeholder="Número de Telefone" 
                        value={phone} 
                        onChange={handlePhoneChange}
                        disabled={isSending}
                    />
                </div>

                <div style={{alignItems: 'flex-start'}} className="container-input">
                    <p>Mensagem <RequiredField> *</RequiredField> :</p> 
                    <textarea
                        placeholder="Mensagem" 
                        value={message} 
                        onChange={handleMessageChange}
                        disabled={isSending}
                        required
                    />
                </div>

                <button type="submit" disabled={isSending}>
                    {isSending ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
            </motion.form>

            <footer className="contacts-footer">
                <h3>Ou entre diretamente em contato:</h3>
                
                <div className="email-and-phone">
                    <p> <i className='fa-solid fa-envelope'></i>Email: lucasgomessantana259@gmail.com</p>
                    <p> <i className='fa-solid fa-phone'></i>Telefone: (75) 99245-9695 </p>
                </div>
            </footer>

        </motion.div>
    );
}