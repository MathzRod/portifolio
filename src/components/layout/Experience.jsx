import ExperienceItem from "../ui/ExperienceItem";

const experiences = [
  {
    id: 1,
    compania: "Equifax | Boa Vista",
    cargo: "Estágio",
    descricao: [
      "Supervisionei e validei processos de RPA, analisando falhas em fluxos de trabalho automatizados e melhorando a eficiência operacional em 30%.",
      "Desenvolvi scripts de automação usando Python e JavaScript, garantindo a confiabilidade e a qualidade do processo antes e depois das implantações.",
      "Elaborei e executei cenários de teste para validar regras de negócio, identificando erros e garantindo a estabilidade da entrega.",
      "Aplicação das melhores práticas de desenvolvimento web, com foco em arquitetura baseada em componentes e validação de dados para melhorar a qualidade e a capacidade de manutenção do sistema.",
    ],
    periodo: "Set 2025 - Fev 2026",
  },
  {
    id: 2,
    compania: "Bradesco Seguros",
    cargo: "Estágio",
    descricao: [
      "Validação e otimização de processos de segurança críticos, garantindo a conformidade com os requisitos de negócios e as expectativas das partes interessadas.",
      "Desenvolvi iniciativas focadas na qualidade e estratégias de controle de processos, resultando em uma melhoria de 30% na eficiência operacional da equipe de Segurança da Informação.",
      "Colaborei com equipes multifuncionais para definir critérios de aceitação, identificar não conformidades e melhorar a confiabilidade dos processos de entrega segura.",
    ],
    periodo: "Set 2024 - Ago 2025",
  },
];

export default function Experience() {
  return (
    <div id="experience" className="flex flex-col mt-6 gap-5 items-center px-5">
      <h2 className="text-start text-amber-50 text-5xl font-bold md:text-[110px]">
        1 Ano de <span className="text-(--color-text-span)">Experiência</span>
      </h2>

      {experiences.map((exp) => (
        <ExperienceItem
          key={exp.id}
          compania={exp.compania}
          cargo={exp.cargo}
          descricao={exp.descricao}
          periodo={exp.periodo}
        />
      ))}
    </div>
  );
}