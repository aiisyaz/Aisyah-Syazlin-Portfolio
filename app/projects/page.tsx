"use client";

import { motion } from "framer-motion";
import ProjectSection from "../public/ProjectSection";

export default function ProjectPage() {
  return (
    <section className="w-full min-h-screen pt-14 pb-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ProjectSection />
      </motion.div>
    </section>
  );
}
