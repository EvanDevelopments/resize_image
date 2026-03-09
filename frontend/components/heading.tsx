"use client";
import {motion} from "framer-motion";

interface HeadingProps {
  title: string;
}

export default function Heading({ title}: HeadingProps) {
  return (
    <motion.div className="max-w-xl" initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 2.1, ease: "easeOut" }} viewport={{ once: true, amount: 0.5 }}><h1 className="font-bold text-7xl tracking-tighter">{title}</h1></motion.div>
  );
}