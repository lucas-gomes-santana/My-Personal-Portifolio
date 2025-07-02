import { Variants } from 'framer-motion';

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