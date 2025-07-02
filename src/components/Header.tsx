import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { headerMenuVariants } from '../animations/headerMenuVariants';
import { labelVariants } from '../animations/labelVariants';

import '../css/Header.css';

interface HeaderProps {
    activeSection: string;
    onSectionChange: (sectionId: string) => void;
    isScrolled: boolean;
}

function Header({ activeSection, onSectionChange, isScrolled }: HeaderProps) {
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

    const handleLinkClick = (sectionId: string) => {
        onSectionChange(sectionId);
        if (window.innerWidth <= 630) {
            setIsMenuOpen(false);
        }
    };

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'projects', label: 'Projetos' },
        { id: 'contacts', label: 'Fale Comigo' },
        { id: 'skills', label: 'Habilidades' }
    ];

    return(
        <header className={isScrolled ? 'scrolled' : ''}>
            <motion.div 
            className="container-name"
            initial="hidden"
            animate="visible"
            variants={labelVariants}
            >
                <h3>Lucas Portifolio</h3>
            </motion.div>

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
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                        onClick={() => handleLinkClick(item.id)}
                    >
                        {item.label}
                    </button>
                ))}
            </motion.nav>
        </header>
    );
}

export default Header;