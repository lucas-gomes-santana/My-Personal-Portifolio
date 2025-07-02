import { Variants } from 'framer-motion';

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