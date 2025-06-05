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
                <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/html5/html5-original.svg" alt='HTML'/>
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/CSS.svg" alt='CSS'/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/javascript/javascript-original.svg" alt='JavaScript'/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nodejs/nodejs-original-wordmark.svg" alt='Node.js'/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt='TypeScript'/>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945110.png?f=webp" alt='React'/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/git/git-original.svg" alt='Git'/>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-java-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-language-pack-logos-icons-1174953.png" alt='Java'/>
                <img src="https://devkico.itexto.com.br/wp-content/uploads/2014/08/spring-boot-project-logo.png" alt="Spring Boot" />
                <img src="https://www.techmonitor.ai/wp-content/uploads/sites/29/2016/06/SQL.png" alt='SQL'/>
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" alt="MySQL" />
            </motion.div>

        </motion.section>
    );
}

export default Skills;