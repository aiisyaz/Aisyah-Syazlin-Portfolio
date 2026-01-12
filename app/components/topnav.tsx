"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function TopNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact Me", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* 🌸 Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          Aisyah Syazlin<span className="text-gray-800">.</span>
        </Link>

        {/* 🖥️ Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-medium transition
                  ${isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}
                `}
              >
                {item.name}

                {/* 🌟 Yellow underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-[3px] rounded-full bg-yellow-400 transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* 📱 Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg border-t border-gray-200">
          <nav className="flex flex-col items-center gap-6 py-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`font-medium text-lg transition
                    ${isActive ? "text-blue-600 underline decoration-yellow-400 decoration-4" : "text-gray-800 hover:text-blue-600"}
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
