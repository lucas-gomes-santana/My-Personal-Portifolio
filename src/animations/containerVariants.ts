import { Variants } from 'framer-motion';

export const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 1.1,
            duration: 1.5
        }
    }
}; 