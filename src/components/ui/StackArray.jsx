import { Icon } from '@iconify/react';
import { motion } from "framer-motion";

export default function StackArray({ array }) {
  return (
    <div className="flex gap-4">
      {array.map((logo, i) => (
        <motion.div key={i} whileHover={{ x: 10 }}>
            <Icon icon={logo} width="50" height="50" />
        </motion.div>
      ))}
    </div>
  );
}
