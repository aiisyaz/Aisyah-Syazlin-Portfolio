"use client";

import Link from "next/link";
import { Github, Mail, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
        w-full py-10 px-6
        bg-blue-50
        text-gray-800
        border-t border-blue-200
      "
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">

        {/* Name */}
        <h2 className="text-2xl font-bold text-blue-700">
          Aisyah Syazlin
        </h2>

        {/* Quick Links */}
        <div className="flex gap-6 text-lg font-medium">
          <Link
            href="/home"
            className="hover:text-blue-600 transition-all relative"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-600 transition-all relative"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="hover:text-blue-600 transition-all relative"
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className="hover:text-blue-600 transition-all relative"
          >
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/nikyuuki"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-all"
          >
            <Github />
          </a>

          <a
            href="mailto:aiisyahsyazlin6@gmail.com"
            className="hover:text-blue-600 transition-all"
          >
            <Mail />
          </a>

          <a
            href="https://www.linkedin.com/in/aisyah-syazlin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-all"
          >
            <Linkedin />
          </a>

          <a
            href="https://wa.me/601155073223"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-all"
          >
            <Phone />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-blue-200"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Aisyah Syazlin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
