import ExperienceItem from "../ui/ExperienceItem";

const experiences = [
  {
    id: 1,
    company: "Equifax | Boa Vista",
    role: "Estágio",
    description: [
      "Supervised and validated RPA processes, analyzing failures in automated workflows and improving operational efficiency by 30%.",
      "Developed automation scripts using Python, ensuring process reliability and quality before and after deployments.",
      "Designed and executed test scenarios to validate business rules, identifying bugs and ensuring delivery stability.",
      "Applied web development best practices, focusing on component-based architecture and data validation to improve system quality and maintainability.",
    ],
    period: "Sept 2025 - Feb 2026",
  },
  {
    id: 2,
    company: "Bradesco Seguros",
    role: "Estágio",
    description: [
      "Validated and optimized critical security processes, ensuring compliance with business requirements and stakeholder expectations.",
      "Developed quality-focused initiatives and process control strategies, driving a 30% improvement in operational efficiency within the Information Security team.",
      "Collaborated with cross-functional teams to define acceptance criteria, identify non-conformities, and improve the reliability of secure delivery processes.",
    ],
    period: "Sept 2024 - Aug 2025",
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