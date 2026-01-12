"use client";

export default function SkillSection() {
  const services = [
    {
      title: "Web Development",
      desc: "Building responsive, performant, and scalable websites using modern frontend frameworks.",
      icon: "💻",
    },
    {
      title: "UI / UX Design",
      desc: "Designing intuitive interfaces and thoughtful user experiences focused on usability.",
      icon: "🎨",
    },
    {
      title: "Frontend Engineering",
      desc: "Transforming designs into clean, maintainable, and accessible frontend code.",
      icon: "⚡",
    },
    {
      title: "Backend Integration",
      desc: "Integrating APIs, authentication, and databases to support complete web solutions.",
      icon: "🧩",
    },
    {
      title: "Tools & Workflow",
      desc: "Working efficiently with Git, GitHub, Notion, and modern development workflows.",
      icon: "🛠",
    },
    {
      title: "Collaboration",
      desc: "Communicating clearly, managing time effectively, and working well in teams.",
      icon: "🤝",
    },
  ];

  return (
    <section className="w-full py-10 bg-[#f6faff]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-blue-400 mb-2">
            Features
          </p>
          <h2 className="text-3xl font-bold text-blue-600">
            What I Do
            <span className="block w-16 h-1 bg-yellow-400 mx-auto mt-3 rounded-full" />
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <div
              key={i}
              className="
                relative
                bg-white
                p-6 rounded-2xl
                border border-blue-100
                shadow-[0_8px_0_#dbeafe,0_20px_30px_rgba(0,0,0,0.08)]

                transition-all duration-300 ease-out
                hover:-translate-y-2
                hover:shadow-[0_12px_0_#bfdbfe,0_30px_40px_rgba(0,0,0,0.12)]
              "
            >

              <div className="text-3xl mb-4">{item.icon}</div>

              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
