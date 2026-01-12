"use client";

export default function Experience() {
  const items = [
    {
      company: "Freelance",
      location: "Malaysia",
      role: "Project Manager",
      year: "Disember 2025 – Present",
      tasks: [
        "Coordinating with clients",
        "Managing deliverables",
        "Ensuring successful project outcomes",
      ],
      tags: ["Management", "Client Handling"],
    },
    {
      company: "Syspro Web Development",
      location: "Malaysia",
      role: "Software Development Intern,",
      year: "March - July 2025",
      tasks: [
        "Conducted exploratory testing for ERP modules to identify usability and logic issues.",
        "Validated new features against requirements and documented findings to support system refinement.",
        "Designed automation workflows for multiple industries, reducing manual tasks by 40%.",
        "Cleaned and structured datasets for AI model preparation, increasing data accuracy by 50%.",
      ],
      tags: ["Testing", "Client Handling"],
    },
    {
      company: "Shaleq Global Sdn Bhd",
      location: "Malaysia",
      role: "IT Intern,",
      year: "February 2022 – February 2023",
      tasks: [
        "Developed a staff management system using PHP/MySQL, reducing manual data tasks by 40%.",
        "Designed and maintained a WordPress-based website, ensuring smooth accessibility and content accuracy.",
        "Designed approximately 50 custom t-shirts using Adobe Illustrator and Photoshop, boosting customer satisfaction and brand visibility by 25%.",
      ],
      tags: ["Design", " Development"],
    },
  ];


  return (
    <section className="w-full py-10 bg-[#f6faff]">
      {/* Title Section */}
      <div className="max-w-6xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:justify-between gap-8">
        <div>
          <p className="text-sm font-medium text-gray-400 tracking-wide">EXPERIENCES</p>
            <h2 className="text-3xl font-bold text-blue-600">
            Explore my Profession Journey
            <span className="block w-20 h-1 bg-yellow-400 mt-3 rounded-full" />
            </h2>
        </div>
      </div>

    {/* Experiences List */}
    <div className="max-w-6xl mx-auto px-6 divide-y divide-gray-200">
      {items.map((exp, i) => (
        <div
          key={i}
          className="py-8 px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6 transition-all duration-200 hover:scale-[1.01] hover:shadow-md hover:bg-white rounded-lg"
        >

          {/* Left Section */}
          <div className="w-full md:w-1/3 space-y-1">

            <h3 className="font-semibold text-gray-900">
              {exp.company}{exp.location ? `, ${exp.location}` : ""}
            </h3>
            <h1 className="text-2xl font-medium text-blue-600">{exp.role}</h1>
            <span className="text-sm text-gray-500">{exp.year}</span>
          </div>

          {/* Center Desc */}
          <div className="w-full md:w-1/3 text-gray-800 text-sm leading-relaxed space-y-1">
            {exp.tasks?.map((task, i) => (
              <div key={i} className="flex gap-2">
                <span className="font-medium">•</span>
                <span>{task}</span>
              </div>
            ))}
          </div>

          {/* Right Tags */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end flex-wrap gap-2">
            {exp.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-yellow-100 text-gray-700 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>

    </section>
  );
}
