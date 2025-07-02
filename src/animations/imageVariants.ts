import { Variants } from 'framer-motion';

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