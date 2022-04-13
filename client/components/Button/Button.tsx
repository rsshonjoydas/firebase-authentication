import { motion } from 'framer-motion';

const Button = ({ className, children, ...rest }: any) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="m-4 h-12 w-auto border-none outline-none cursor-pointer inline-flex items-center justify-center px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
    {...rest}
  >
    {children}
  </motion.button>
);

export default Button;
