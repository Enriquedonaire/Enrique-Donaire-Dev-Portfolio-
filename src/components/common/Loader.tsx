import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center bg-light dark:bg-dark z-50"
    >
      <motion.div
        className="flex flex-col items-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <motion.div
            className="w-16 h-16 border-4 border-primary-200 dark:border-primary-900 border-t-primary-500 dark:border-t-primary-400 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.2,
              ease: "linear",
              repeat: Infinity
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 border-4 border-secondary-200 dark:border-secondary-900 border-t-secondary-500 dark:border-t-secondary-400 rounded-full"
            animate={{ rotate: -360 }}
            transition={{
              duration: 1.5,
              ease: "linear",
              repeat: Infinity
            }}
          />
        </div>
        <motion.div
          className="mt-8 animate-gradient-text text-xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Loading Portfolio...
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;