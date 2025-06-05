import { motion } from 'framer-motion';
import '../css/Projects.css';
import { containerVariants, itemVariants } from '../animations/animations';

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
    ];

    return (
        <motion.section 
            className='main-container'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <h2>Projetos Desenvolvidos</h2>

            <motion.div className="project-container" variants={itemVariants} >
                {projectsData.map((project, index) => (

                    <div className="card-projects" key={ index }>
                        <h3>{project.title}</h3>
                        <h4>{project.projectType}</h4>
                        <img className="projects-image" src={project.projectImage}></img>
                        <p>{project.description}</p>
                        <a rel='noopener noreferrer' target='_blank' href={project.link}>{project.textLink}</a>
                    </div>
                ))}

            </motion.div>

        </motion.section>
    );
}

export default Projects;