import { motion } from 'framer-motion';
import '../css/Projects.css';
import { containerVariants } from '../animations/containerVariants';
import { itemVariants } from '../animations/itemVariants';
import { useState } from 'react';

interface ProjectElements{
    projectImage:string;
    title:string;
    description:string;
    link:string;
    textLink:string;
}

function Projects() {

    const projectsData: ProjectElements[] = [
        {
            title: "Site da PeuCar Automotivos",
            projectImage: "/assets/PeuCar-Website.png",
            link: "https://peucar-automotivos-ipira.vercel.app/",
            description: "Projeto freelance que desenvolvi para um pequeno negócio de oficina de automóveis. Consiste em um site simples que permite ao usuário ver sobre os serviços da oficina e também enviar uma mensagem diretamente para o Email do proprietário da oficina.",
            textLink: "Ir para o Site",
        },
        {
            title: "Curriculum Generator",
            projectImage: "/assets/Curriculum-Generator.png",
            link: "https://curriculum-generator-5ioo8q7ai-lucas-gomes-santanas-projects.vercel.app/login",
            description: "Aplicativo web que foi feito para simular um MVP Micro-Saas. Permite ao usuário criar um currículo personalizado com base em suas informações e experiências profissionais, além de poder baixar o currículo em PDF e salvá-lo Online na própria plataforma. Dentre outras ações que é possível realizar.",
            textLink: "Ir para o App",
        },
        {
            title: "C.E.R.F (Cadastro Escolar com Reconhecimento Facial)",
            projectImage: "/assets/C.E.R.F.png",
            link: "#",
            description: "Sistema de cadastro e autenticação biométrica facial para escolas. Possui o objetivo de reforçar a segurança escolar, tendo controle do fluxo de entrada de pessoas dentro do prédio acadêmico, decidindo quem pode ou não pode entrar consultando o banco de dados para verificar se o rosto escaneado pela câmera já foi cadastrado.",
            textLink: "Projeto Privado"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
    };

    const project = projectsData[currentIndex];

    return (
        <motion.section 
            className='main-container'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <h2>Meus Projetos Principais</h2>

            <div className="project-nav-wrapper">
                <button 
                    onClick={handlePrev} 
                    className="arrow-btn left"
                    aria-label="Projeto anterior"
                >
                    &#8592;
                </button>

                <motion.div className="project-container" variants={itemVariants} >
                    <div className="card-projects">
                        <h3>{project.title}</h3>
                        <img className="projects-image" src={project.projectImage} alt={project.title} />
                        <p>{project.description}</p>
                        <a rel='noopener noreferrer' target='_blank' href={project.link}>{project.textLink}</a>
                    </div>
                </motion.div>
                
                <button 
                    onClick={handleNext} 
                    className="arrow-btn right"
                    aria-label="Próximo projeto"
                >
                    &#8594;
                </button>
            </div>
        </motion.section>
    );
}

export default Projects;