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
            <h2>Tecnologias que utilizo ou já tive contato:</h2>

            <motion.div className="container-images" variants={itemVariants}>
                <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/html5/html5-original.svg"/>
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/CSS.svg"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/javascript/javascript-original.svg"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nodejs/nodejs-original-wordmark.svg"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945110.png?f=webp"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/git/git-original.svg"/>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-java-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-language-pack-logos-icons-1174953.png"/>
                <img src="https://www.techmonitor.ai/wp-content/uploads/sites/29/2016/06/SQL.png"/>
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" alt="" />
            </motion.div>

        </motion.section>
    );
}

export default Skills;