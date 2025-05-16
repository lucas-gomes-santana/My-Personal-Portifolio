import { useState } from 'react'; 
import emailjs from '@emailjs/browser';
import '../css/Contacts.css';

function formatPhoneNumber(value: string): string {
    let formattedValue = value.replace(/\D/g, '');
    
    if (formattedValue.length > 0) {
        if (formattedValue.length <= 2) {
            formattedValue = `(${formattedValue}`;
        } 

        else if (formattedValue.length <= 7) {
            formattedValue = `(${formattedValue.slice(0, 2)}) ${formattedValue.slice(2)}`;
        } 

        else if (formattedValue.length <= 11) {
            formattedValue = `(${formattedValue.slice(0, 2)}) ${formattedValue.slice(2, 7)}-${formattedValue.slice(7)}`;
        } 

        else {
            formattedValue = `(${formattedValue.slice(0, 2)}) ${formattedValue.slice(2, 7)}-${formattedValue.slice(7, 11)}`;
        }
    }
    
    return formattedValue;
}

function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

emailjs.init({
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
});

export function Contacts() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedPhone = formatPhoneNumber(e.target.value);
        setPhone(formattedPhone);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (name.length < 8) {
            alert("Por favor, insira seu nome completo");
            return;
        }

        if (email.length < 8 || !validateEmail(email)) {
            alert("Por favor, insira um email válido");
            return;
        }

        function validatePhone(phone: string) {
            const phoneRegex = /^\(\d{2}\)\s9\d{4}-\d{4}$/;
            return phoneRegex.test(phone);
        }

        if (phone.length > 0 && !validatePhone(phone)) {
            alert("Por favor, insira um número de telefone válido");
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
                setMessage('');
            } 
            
            else {
                throw new Error('Falha ao enviar a mensagem');
            }

        } catch (error) {
            console.error('Falha ao enviar a mensagem:', error);
            alert('Falha ao enviar a mensagem. Por favor, tente novamente.');

        } finally {
            setIsSending(false);
        }
    }
    
    return (
        <section className="contacts-container">
            <h2>Envie uma mensagem para mim:</h2>

            <form className='contacts-form' onSubmit={handleSubmit}>
                <div className="container-input">
                    <p>Seu Nome Completo(Obrigatório):</p>
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
                    <p>Seu Email(Obrigatório):</p> 
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
                    <p>Seu Número de Telefone(Opcional):</p>
                    <input 
                        type="text" 
                        placeholder="Número de Telefone" 
                        value={phone} 
                        onChange={handlePhoneChange}
                    />
                </div>
              
              <div style={{alignItems: 'flex-start'}} className="container-input">
                <p>Sua Mensagem:</p> 
                <textarea className='text-container'
                    placeholder="Mensagem" 
                    value={message} 
                    onChange={handleMessageChange}
                    disabled={isSending}
                    required
                />
              </div>
                

                <button type="submit" disabled={isSending}>
                    {isSending ? 'Enviando...' : 'Enviar'}
                </button>

            </form>
        </section>
    )
}