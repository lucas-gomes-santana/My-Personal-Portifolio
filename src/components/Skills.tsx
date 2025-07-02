import { motion } from 'framer-motion';
import '../css/Skills.css';
import { 
    containerVariants, 
    itemVariants,  
} from '../animations/animations';

function Skills() {
    return (

        <motion.section 
            className="container-skills"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <h2>Minhas Ferramentas Principais</h2>

            <motion.div className="container-images" variants={itemVariants}>
                <div className="skill-badge"><img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/javascript/javascript-original.svg" alt='JavaScript'/></div>
                <div className="skill-badge"><img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nodejs/nodejs-original-wordmark.svg" alt='Node.js'/></div>
                <div className="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt='TypeScript'/></div>
                <div className="skill-badge"><img src="https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945110.png?f=webp" alt='React'/></div>
                <div className="skill-badge"><img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/git/git-original.svg" alt='Git'/></div>
                <div className="skill-badge"><img src="https://cdn.iconscout.com/icon/free/png-256/free-java-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-language-pack-logos-icons-1174953.png" alt='Java'/></div>
                <div className="skill-badge"><img src="https://devkico.itexto.com.br/wp-content/uploads/2014/08/spring-boot-project-logo.png" alt="Spring Boot" /></div>
                <div className="skill-badge"><img src="https://www.techmonitor.ai/wp-content/uploads/sites/29/2016/06/SQL.png" alt='SQL'/></div>
                <div className="skill-badge"><img src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" alt="MySQL" /></div>
            </motion.div>

        </motion.section>
    );
}

export default Skills;