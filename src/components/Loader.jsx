import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setShow(false), 1100);
    return () => clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#050816]"
        >
          <motion.span
            className="font-display text-3xl font-bold text-white"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.1, repeat: Infinity }}
          >
            VK<span className="text-gradient">.</span>
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
