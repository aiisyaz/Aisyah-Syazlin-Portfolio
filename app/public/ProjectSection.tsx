"use client";

import Link from "next/link";
import { imageBasePath } from "../lib/config";
import ProjectCard from "../components/ProjectCard";

export default function ProjectSection() {
  return (
    <section className="relative py-10 bg-white ">
      <div className="text-center pb-10">
        <h2 className="main-title">My Projects</h2>
      </div>

      <div className="px-4 md:px-40 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      <ProjectCard
        title="Personal Portfolio"
        image={`${imageBasePath}/images.png`}
        link="/projects/portfolio"
      />

      <ProjectCard
        title="project-2"
        image={`${imageBasePath}/images.png`}
        link="/projects/food-system"
      />

      </div>
    </section>
  );
}