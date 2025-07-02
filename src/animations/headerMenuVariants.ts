import { Variants } from 'framer-motion';

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