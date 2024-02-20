import { useInView } from "framer-motion";
import { useRef } from "react";
import {motion} from 'framer-motion'

interface Props {
    children: any;
  }
export const Section: React.FC<Props> = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <motion.h1
            className="text-4xl font-bold font-mono text-blue-500"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
        >
          {children}
        </motion.h1>
      </section>
    );
  }