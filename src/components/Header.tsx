import { Link, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Home from './Home.tsx';
import Projects from './Projects.tsx';
import Skills from './Skills.tsx';
import { Contacts } from './Contacts.tsx';
import { headerMenuVariants } from '../animations/animations';

import '../css/Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 630) {
                setIsMenuOpen(true);
            } else {
                setIsMenuOpen(false);
            }
        };
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        if (window.innerWidth <= 630) {
            setIsMenuOpen(false);
        }
    };

    return(
        <>
            <header>
                <div className="container-name">
                    <h3>Lucas Portifolio</h3>
                </div>

                <div className="hamburger-menu" onClick={toggleMenu}>
                    <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
                    <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
                    <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
                </div>

                <motion.nav 
                    className="container-links"
                    initial="closed"
                    animate={isMenuOpen ? "open" : "closed"}
                    variants={headerMenuVariants}
                >
                    <Link to="/home" onClick={handleLinkClick}>Home</Link>
                    <Link to="/projects" onClick={handleLinkClick}>Projetos</Link>
                    <Link to="/contacts" onClick={handleLinkClick}>Fale Comigo</Link>
                    <Link to="/skills" onClick={handleLinkClick}>Habilidades</Link>     
                </motion.nav>
            </header>

            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path='/home' element={<Home/>}/>
                <Route path='/projects' element={<Projects/>} />
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
            </Routes>
        </>
    );
}

export default Header;