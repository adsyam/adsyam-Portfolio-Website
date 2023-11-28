import { motion } from "framer-motion";

export default function StackArray({ array }) {
  return (
    <div className="flex gap-4">
      {array.map((logo, i) => (
        <motion.img
          whileHover={{ x: 10 }}
          key={i}
          src={logo}
          alt="Logo"
          className="max-w-[50px]"
        />
      ))}
    </div>
  );
}
