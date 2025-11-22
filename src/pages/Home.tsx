import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import '../css/Home.css';
import { containerVariants } from '../animations/containerVariants';
import { itemVariants } from '../animations/itemVariants';
import { imageVariants } from '../animations/imageVariants';
import { typeAnimationConfig } from '../animations/typeAnimationConfig';


function Home() {
    return (
        <motion.section 
            className='container-info'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div 
                className="my-foto"
                variants={itemVariants}
            >
                <motion.img 
                    id='animated-foto' 
                    src="/assets/My-Foto.png" 
                    alt="Lucas Gomes Santana Foto"
                    variants={imageVariants}
                    whileHover="hover"
                />
            </motion.div> 

            <motion.div 
                className="my-info"
                variants={itemVariants}
            >
                <motion.div 
                    className="personal-info"
                    variants={itemVariants}
                >
                    <h3>
                        Olá! Meu nome é Lucas Gomes Santana. Eu sou{' '}
                        <motion.span 
                            id='special-word'
                            animate={{ 
                                opacity: [1]
                            }}
                            transition={{ 
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        >
                            <TypeAnimation {...typeAnimationConfig} />
                        </motion.span>
                    </h3>

                    <motion.p variants={itemVariants}>
                        Sou um estudante autodidata de programação e desenvolvedor Full-Stack de aplicações web em formação, estou buscando minha primeira oportunidade na área de tecnologia. Trabalho com sites, 
                        landing pages e APIs REST. Também tenho experiência com bibliotecas de reconhecimento facial
                    </motion.p>

                    <motion.p variants={itemVariants}>
                        Estou aberto a vagas de estágio, trainee ou desenvolvedor júnior.
                    </motion.p>
                    
                </motion.div>

                <motion.nav 
                    className='container-personal-icons'
                    variants={itemVariants}
                >
                    <motion.div className="social-links">
                        <motion.a 
                            className='special-link' 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            href="https://www.linkedin.com/in/lucas-gomes-santana-77892a343/"
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <i className='fa-brands fa-linkedin'></i> 
                        </motion.a>

                        <motion.a 
                            className='special-link' 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            href="https://github.com/lucas-gomes-santana"
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <i className='fa-brands fa-github'></i> 
                        </motion.a>

                         <motion.a
                            className="download-button"
                            href="/documents/Lucas-Gomes-Santana-Curriculo.pdf"
                            download="Lucas-Gomes-Santana-Curriculo.pdf"
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <i className="fa-solid fa-download"></i> Baixar CV
                        </motion.a>

                    </motion.div>

                </motion.nav>

            </motion.div>

        </motion.section>
    );
}

export default Home;
