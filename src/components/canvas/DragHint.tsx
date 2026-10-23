import { motion } from 'framer-motion';
import { Rotate3d } from 'lucide-react';

type Props = { className?: string };

// Same visual language as the hero "Scroll Down" cue: label + animated icon.
const DragHint = ({ className = '' }: Props) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none select-none absolute left-0 right-0 z-10 flex justify-center ${className}`}
  >
    <div className="flex flex-col items-center text-gray-700 dark:text-gray-300">
      <span className="text-sm font-medium mb-1.5">Drag to rotate</span>
      <motion.div
        animate={{ rotate: [-25, 25] }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      >
        <Rotate3d size={24} className="text-primary-600 dark:text-primary-400" />
      </motion.div>
    </div>
  </div>
);

export default DragHint;
