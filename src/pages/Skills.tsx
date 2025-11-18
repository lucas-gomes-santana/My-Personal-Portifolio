import { motion } from 'framer-motion';
import '../css/Skills.css';
import { containerVariants } from '../animations/containerVariants';
import { itemVariants } from '../animations/itemVariants';
import { CSS3, ExpressJsLight, Git, HTML5, JavaScript, MongoDB, MySQL, NodeJs, Postman, React, TailwindCSS, TypeScript } from 'developer-icons';


function Skills() {
    return (
        <motion.section 
            className="container-skills"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <h2>Ferramentas que uso no dia a dia</h2>

            <motion.div className="container-images" variants={itemVariants}>
                <div className="skill-badge" data-tooltip='HTML5'>
                    <HTML5 size={50} />
                </div>
                <div className="skill-badge" data-tooltip='CSS3'>
                    <CSS3 size={50} />
                </div>
                <div className="skill-badge" data-tooltip='Javascript'>
                    <JavaScript size={50} />
                </div>
                <div className="skill-badge" data-tooltip='Typescript'>
                    <TypeScript size={50} />
                </div>
                <div className="skill-badge" data-tooltip='ReactJs'>
                    <React size={50} />
                </div>
                <div className="skill-badge" data-tooltip='TailwindCSS'>
                    <TailwindCSS size={50} />
                </div>
                <div className="skill-badge" data-tooltip='NodeJs'>
                    <NodeJs size={50} />
                </div>
                <div className="skill-badge" data-tooltip='Express'>
                    <ExpressJsLight size={50} />
                </div>
                <div className="skill-badge" data-tooltip='Git'>
                    <Git size={50} />
                </div>
                <div className="skill-badge" data-tooltip='MySQL'>
                    <MySQL size={50} />
                </div>
                <div className="skill-badge" data-tooltip='MongoDB'>
                    <MongoDB size={50} />
                </div>
                <div className="skill-badge" data-tooltip='Postman'>
                    <Postman size={50} />
                </div>
            </motion.div>

        </motion.section>
    );
}

export default Skills;

