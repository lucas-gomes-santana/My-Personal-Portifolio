import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './Header.tsx';
import Home from './Home.tsx';
import Projects from './Projects.tsx';
import Skills from './Skills.tsx';
import { Contacts } from './Contacts.tsx';
import { containerVariants } from '../animations/animations';
import '../css/App.css';

function App() {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'projects', 'skills', 'contacts'];
            const scrollPosition = window.scrollY + 100;
            const currentScrollY = window.scrollY;
            
            // Detectar se o usuário fez scroll
            setIsScrolled(currentScrollY > 50);

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div 
            className="app-container"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <Header 
                activeSection={activeSection} 
                onSectionChange={scrollToSection}
                isScrolled={isScrolled}
            />
            
            <main className="main-content">
                <section id="home" className="section">
                    <Home />
                </section>
                
                <section id="projects" className="section">
                    <Projects />
                </section>
                
                <section id="skills" className="section">
                    <Skills />
                </section>
                
                <section id="contacts" className="section">
                    <Contacts />
                </section>
            </main>
        </motion.div>
    );
}

export default App;