const experiences = [
  {
    id: 1,
    company: "Bradesco Seguros",
    role: "Estágio",
    period: "Jan 2020 - Present",
  },
  {
    id: 2,
    company: "Bradesco Seguros",
    role: "Estágio",
    period: "Jan 2020 - Present",
  },
  {
    id: 3,
    company: "Bradesco Seguros",
    role: "Estágio",
    period: "Jan 2020 - Present",
  },
];

export default function Experience() {
  return (
    <div className="flex flex-col  mt-6  gap-5  items-center  px-5">
      <h2 className="text-center text-amber-50 text-5xl font-bold">
        1 Year of <span className="text-(--color-text-span)">Experience</span>
      </h2>

      {experiences.map((exp) => (
        <div key={exp.id} className="flex flex-col items-start px-2 py-4 bg-blue-800 w-full">
          <h3 className="text-white text-[16px]">{exp.company}</h3>
          <p>{exp.role}</p>
          <p>{exp.period}</p>
        </div>
      ))}

    </div>
  )

}