"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, Phone, Globe } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white pt-24  overflow-hidden">

      {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="blob blob-pink" />
        <span className="blob blob-yellow" />
        <span className="blob blob-blue" />
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6 z-10 relative pb-4">
          <p className="text-sm tracking-widest text-blue-400 uppercase">
            Welcome to my world
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Hi, I’m{" "}
            <span className="text-blue-600">Aisyah Syazlin</span>
          </h1>

          <p className="text-xl font-semibold text-yellow-400">
            Frontend Engineer
          </p>

          <p className="text-gray-600 max-w-lg">
            I create meaningful digital experiences by combining clean design,
            thoughtful interactions, and solid frontend engineering.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 pt-4 flex-wrap">

            {/* GitHub */}
            <a
              href="https://github.com/nikyuuki"
              target="_blank"
              className="p-3 rounded-xl bg-white shadow hover:shadow-md transition flex items-center justify-center"
            >
              <Github className="text-blue-600" size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/aisyah-syazlin"
              target="_blank"
              className="p-3 rounded-xl bg-white shadow hover:shadow-md transition flex items-center justify-center"
            >
              <Linkedin className="text-blue-600" size={20} />
            </a>

            {/* Portfolio / Website */}
            <a
              href="https://your-portfolio-link.com"
              target="_blank"
              className="p-3 rounded-xl bg-white shadow hover:shadow-md transition flex items-center justify-center"
            >
              <Globe className="text-blue-600" size={20} />
            </a>

            {/* Email */}
            <a
              href="mailto:aiisyahsyazlin6@gmail.com"
              className="p-3 rounded-xl bg-white shadow hover:shadow-md transition flex items-center justify-center"
            >
              <Mail className="text-blue-600" size={20} />
            </a>

            {/* WhatsApp (Phone) */}
            <a
              href="https://wa.me/601155073223"
              target="_blank"
              className="p-3 rounded-xl bg-white shadow hover:shadow-md transition flex items-center justify-center"
            >
              <Phone className="text-blue-600" size={20} />
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:block relative w-full h-[420px] md:h-[520px] rounded-3xl overflow-hidden">

          <Image
            src="/images/lin-picture.svg"
            alt="Aisyah Syazlin portrait"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* MOBILE BACKGROUND IMAGE */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/images/lin-picture.svg"
            alt="Aisyah portrait"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-white/70" />
        </div>

      </div>
    </section>
  );
}
