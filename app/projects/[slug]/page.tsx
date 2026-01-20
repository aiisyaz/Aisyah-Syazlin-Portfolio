import ProjectModule from "../../components/ProjectModule";

type ProjectData = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  problemStatement: string;
  gallery: string[];
};

const projects: Record<string, ProjectData> = {
  portfolio: {
    title: "Personal Portfolio",
    description: "A portfolio website to showcase my skills and works.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/images/portfolio-banner.png",
    problemStatement:
      "The challenge was to create a modern, responsive portfolio...",
    gallery: ["/images/portfolio-1.png", "/images/portfolio-2.png", "/images/portfolio-3.png"],
  },
  "food-system": {
    title: "Food Ordering System",
    description: "A centralized kiosk management platform.",
    tech: ["Ruby on Rails", "Bootstrap", "PostgreSQL"],
    image: "/images/food-system.png",
    problemStatement:
      "The challenge was to create a modern, responsive portfolio...",
    gallery: ["/images/portfolio-1.png", "/images/portfolio-2.png", "/images/portfolio-3.png"],
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return <p>Project not found.</p>;
  }

  return <ProjectModule {...project} />;
}