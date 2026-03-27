import ExperienceItem from "../ui/ExperienceItem";

const experiences = [
  {
    id: 1,
    company: "Equifax | Boa Vista",
    role: "Estágio",
    description: "ASDBASJDBAS",
    period: "Jan 2020 - Present",
  },
  {
    id: 2,
    company: "Bradesco Seguros",
    role: "Estágio",
    description: "ASDBASJDBAS",
    period: "Jan 2020 - Present",
  },
];

export default function Experience() {
  return (
    <div id="experience" className="flex flex-col mt-6 gap-5 items-center px-5">
      <h2 className="text-start text-amber-50 text-5xl font-bold md:text-[110px]">
        1 Year of <span className="text-(--color-text-span)">Experience</span>
      </h2>

      {experiences.map((exp) => (
        <ExperienceItem
          key={exp.id}
          company={exp.company}
          role={exp.role}
          description={exp.description}
          period={exp.period}
        />
      ))}
    </div>
  );
}