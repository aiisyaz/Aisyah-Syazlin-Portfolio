"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProjectModule({
  title,
  description,
  tech,
  image,
  problemStatement,
  gallery
}: {
  title: string;
  description: string;
  tech: string[];
  image: string;
  problemStatement: string;
  gallery: string[];
}) {
  const [zoomSrc, setZoomSrc] = useState<string | null>(null);

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 space-y-20">

      {/* MAIN OVERVIEW */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h1>
          <p className="text-gray-600 text-lg">{description}</p>

          <div>
            <h2 className="font-semibold text-gray-800 mb-2">Tech used:</h2>
            <ul className="flex gap-2 flex-wrap">
              {tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-lg"
                >
                  {t}
                </span>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* PROBLEM STATEMENT */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Problem Statement</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          {problemStatement}
        </p>
      </div>

      {/* GALLERY */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((src, i) => (
            <button
              key={i}
              onClick={() => setZoomSrc(src)}
              className="relative w-full h-40 rounded-lg overflow-hidden shadow-md focus:outline-none"
            >
              <Image
                src={src}
                alt={`Gallery ${i}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {/* MODAL ZOOM */}
      {zoomSrc && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 cursor-zoom-out"
          onClick={() => setZoomSrc(null)}
        >
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={zoomSrc}
              alt="Zoomed image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
