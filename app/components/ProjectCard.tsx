"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  image,
  link,
}: {
  title: string;
  image: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="
        block bg-white rounded-2xl
        border border-blue-100
        shadow-[0_6px_0_#dbeafe,0_20px_30px_rgba(0,0,0,0.08)]
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-[0_10px_0_#bfdbfe,0_30px_40px_rgba(0,0,0,0.12)]
      "
    >
      {/* IMAGE WRAPPER WITH GAP */}
      <div className="p-4">
        <div className="relative w-full h-48 md:h-56 rounded-xl overflow-hidden border border-blue-100">
          <Image
            src={image}
            alt={title}
            fill
            loading="lazy"
            className="object-cover"
          />
        </div>
      </div>

      {/* TITLE */}
      <div className="px-4 pb-4">
        <h3 className="text-gray-800 font-semibold text-base md:text-lg">
          {title}
        </h3>
      </div>
    </Link>
  );
}
