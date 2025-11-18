import { motion } from 'framer-motion';
import '../css/Projects.css';
import { containerVariants } from '../animations/containerVariants';
import { itemVariants } from '../animations/itemVariants';
import { useState } from 'react';

interface ProjectElements{
    projectImage:string;
    title:string;
    description:string;
    projectType:string;
    link:string;
    textLink:string;
}

function Projects() {

    const projectsData: ProjectElements[] = [
        {
            title: "Site da PeuCar Automotivos",
            projectImage: "/assets/PeuCar-Website.png",
            projectType: "Aplicação Web",
            link: "https://peucar-automotivos-ipira.vercel.app/",
            description: "Um projeto freelance que desenvolvi para um pequeno negócio de oficina de automóveis. Consiste em um site simples que permite ao usuário ver sobre os serviços da oficina e também enviar uma mensagem diretamente para o Email do proprietário da oficina.",
            textLink: "Ir para o Site",
        },
        {
            title: "Curriculum Generator",
            projectImage: "/assets/Curriculum-Generator.png",
            projectType: "Aplicação Micro-Saas",
            link: "https://curriculum-generator-5ioo8q7ai-lucas-gomes-santanas-projects.vercel.app/login",
            description: "Uma aplicação web com objetivo de se tornar um micro SaaS no futuro. Permite ao usuário criar um currículo personalizado com base em suas informações e experiências profissionais, além de poder baixar o currículo em PDF e salvá-lo Online na própria plataforma",
            textLink: "Ir para o App",
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
            <h2>Meus Projetos Desenvolvidos</h2>

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
                        <h4>{project.projectType}</h4>
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