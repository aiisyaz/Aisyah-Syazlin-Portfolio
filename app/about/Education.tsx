"use client";

export default function Education() {
  const items = [
    {
      img: "/images.png",
      place: "Universiti Teknologi MARA (UiTM) Shah Alam",
      title1: "BACHELOR OF INFORMATION SYSTEMS (HONS.)",
      title2: "INFORMATION SYSTEMS ENGINEERING",
      cgpa: "3.33",
      year: "March 2023 - July 2025",
      note: "Major in Information System Engineering\nDean’s List Award: Semester 3 & Semester 6"
    },
    {
      img: "/images.png",
      place: "Universiti Teknologi MARA (UiTM) Machang",
      title1: "DIPLOMA IN COMPUTER SCIENCE",
      title2: " ",
      cgpa: "3.63",
      year: "Oct 2020 – Feb 2023",
      note: "Vice Chancellor’s Award\nMUET Band 3.5"
    }
  ];


  return (
    <section className="w-full py-10 bg-[#f6faff]">
      {/* Title Section */}
      <div className="max-w-6xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:justify-between gap-8">
        <div>
          <p className="text-sm font-medium text-gray-400 tracking-wide">EDUCATION</p>
            <h2 className="text-3xl font-bold text-blue-600">
              My Academic Qualifications
            <span className="block w-20 h-1 bg-yellow-400 mt-3 rounded-full" />
            </h2>
        </div>
      </div>

{/* LIST */}
<div className="max-w-6xl mx-auto px-6 space-y-10">
  {items.map((edu, i) => {
    const imageOnRight = i % 2 === 1;

    return (
      <div
        key={i}
        className={`w-full bg-white  shadow-md rounded-3xl overflow-hidden flex flex-col ${
          imageOnRight ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* IMAGE */}
        <div className="w-full md:w-1/2 h-[240px]">
          <img
            src={edu.img}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 flex flex-col items-start justify-center space-y-2">

          <p className="font-semibold text-gray-900">
            {edu.place}
          </p>

          <p className="text-xs text-gray-500">
            {edu.year}
          </p>

          <h3 className="text-lg font-bold text-blue-600 leading-tight">
            {edu.title1}<br />{edu.title2}
          </h3>
          <div className="py-2">
            <span className="w-fit inline-block px-3 py-1 bg-yellow-300 text-gray-800 text-xs font-semibold rounded-full">
              CGPA: {edu.cgpa}
            </span>
          </div>
          <p className="text-sm text-gray-600 whitespace-pre-line">
            {edu.note}
          </p>
        </div>

      </div>
    );
  })}
</div>

    </section>
  );
}
