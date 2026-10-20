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
    title: "FIFY — Handmade Knitted Bag E-Commerce Website",
    description: "A user-friendly online store for handmade knitted handbags, featuring product browsing, shopping cart management, and WhatsApp ordering with automatically generated order and customer information.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/images/fifybg1.png",
    problemStatement:
      "To simplify product browsing and ordering for handmade knitted handbags.",
    gallery: ["/images/fify1.png", "/images/fify3.png", "/images/fify2.png", "/images/fify4.png"],
  },
  "food-system": {
    title: "FNJ Delivery System",
    description: "A web-based delivery system designed to improve customer convenience by allowing customers to arrange for their devices to be collected from or delivered to their homes. Inspired by the on-demand delivery models of Foodpanda and Grab, the system aims to enhance FNJ Multimedia's customer service by making device-related services more accessible and convenient.",
    tech: ["PHP", "HTML", "Bootstrap", "MySQL"],
    image: "/images/fnj-login.png",
    problemStatement:
      "Customers who want to send or collect their devices from FNJ Multimedia may face time and transportation constraints, making it necessary to develop a delivery system that offers convenient services at their homes",
    gallery: ["/images/ERD.png", "/images/fnj.png", "/images/fnj1.png", "/images/fnj2.png", "/images/fnj4.png", "/images/fnj5.png", "/images/fnj6.png", "/images/fnjRider.png", "/images/fnjRider1.png", "/images/fnjRider2.png", "/images/fnjAdmin.png", "/images/fnjAdmin1.png", "/images/fnjAdmin2.png", "/images/fnjAdmin3.png"],
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