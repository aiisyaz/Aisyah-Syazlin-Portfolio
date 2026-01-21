"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { imageBasePath } from "../lib/config";

export default function AboutMe() {
  return (
    <section className="relative w-full bg-blue-400 overflow-hidden">
      {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="blob blob-pink" />
        <span className="blob blob-yellow" />
        <span className="blob blob-blue" />
      </div>

      {/* IMAGE BACKGROUND (MOBILE) */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src={`${imageBasePath}/images/lin-picture.svg`}
          alt="Aisyah portrait"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-blue-500/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            grid grid-cols-1
            md:grid-cols-[2fr_1fr]
            items-center gap-12
          "
        >
          {/* TEXT */}
          <div className="relative z-10 space-y-6 text-black">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {"Hello! I'm"}{" "}
              <span className="text-yellow-300">Aisyah Syazlin</span>
            </h2>

            <p className="text-lg text-blue-100 leading-relaxed">
              {"I’m"} a passionate web designer and developer who loves building
              digital experiences that feel alive and meaningful ✨
            </p>

            <p className="text-lg text-blue-100 leading-relaxed">
              I blend{" "}
              <span className="font-semibold text-yellow-300">
                imagination and functionality
              </span>{" "}
              to turn ideas into interactive stories.
            </p>

            <p className="italic text-blue-200">
              “Every creation is a heartbeat — where logic meets art.” 🌙
            </p>

            <a
              href={`${imageBasePath}/resume_aisyahsyazlin.pdf`}
              download
              className="
                inline-block mt-6 px-8 py-4
                bg-yellow-400 hover:bg-yellow-300
                text-blue-900 font-bold
                rounded-full shadow-xl
                transition-all duration-300
              "
            >
              📄 Download Resume
            </a>
          </div>

          {/* IMAGE RIGHT (DESKTOP ONLY) */}
          <div className="hidden md:block relative w-full h-[680px] overflow-hidden">
            <Image
              src={`${imageBasePath}/images/lin-picture.svg`}
              alt="Aisyah portrait"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
