import { Variants } from 'framer-motion';

// Variantes para containers (seções, cards, etc)
export const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 2,
            duration: 2
        }
    }
};

// Variantes para itens individuais (textos, imagens, etc)
export const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
};

// Variantes para imagens
export const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5
        }
    },
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.3
        }
    }
};

// Variantes para textos
export const textVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5
        }
    }
};

// Variantes para botões
export const buttonVariants: Variants = {
    hover: {
        scale: 1.2,
        transition: {
            duration: 0.3
        }
    },
    tap: {
        scale: 0.9,
        transition: {
            duration: 0.1
        }
    }
};

// Variantes para cards
export const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    },
    hover: {
        y: -10,
        transition: {
            duration: 0.3
        }
    }
};

// Configurações para o TypeAnimation
export const typeAnimationConfig = {
    sequence: [
        'Estudante de Informática.',
        3000,
        'Desenvolvedor Full-Stack.',
        3000,
        'Desenvolvedor Web',
        3000
    ],
    repeat: Infinity,
    cursor: true
};

// Configurações para transições
export const transitions = {
    default: { duration: 0.5 },
    fast: { duration: 0.3 },
    slow: { duration: 0.8 },
    spring: { type: "spring", stiffness: 100 }
};

// Variantes para o menu responsivo do Header
export const headerMenuVariants: Variants = {
    closed: {
        x: 300,
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    },
    open: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    }
};

export const labelVariants: Variants = {
    hidden: { 
        opacity: 0, 
        x: -100 
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeInOut"
        }
    }
}