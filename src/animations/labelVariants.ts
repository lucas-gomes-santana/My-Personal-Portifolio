import { Variants } from 'framer-motion';

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
}; 