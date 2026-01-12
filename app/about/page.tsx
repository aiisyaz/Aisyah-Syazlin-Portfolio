"use client";

import { easeOut, motion } from "framer-motion";
import SkillSection from "../public/SkillSection";
import AboutMe from "../about/AboutMe";
import Education from "../about/Education";
import Experience from "./Experience";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut},
  },
};

export default function AboutPage() {
  return (
    <section className="relative w-full pt-10 overflow-hidden">

      {/* ABOUT ME */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-16"
      >
        <AboutMe />
      </motion.div>

      {/* SKILLS */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8"
      >
        <SkillSection />
      </motion.div>

      {/* EDUCATION */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-6"
      >
       <Experience />
      </motion.div>

      {/* EXPERIENCE */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Education />
      </motion.div>

    </section>
  );
}
