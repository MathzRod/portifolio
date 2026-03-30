import ProjectItem from "../ui/ProjectItem";

const projects = [
  {
    id: 1,
    titulo: "Axios 3D Studio",
    descricao: "Template de Landing Page",
    imagem: "/axios3d.png",
    url: "https://www.axios3d.com.br/",
  },
  {
    id: 2,
    titulo: "Weather APP",
    descricao: "Aplicação Web para consumo de API",
    imagem: "/weatherApp.png",
    url: "https://seu-link.com",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="w-full mt-7 flex flex-col gap-4 px-5 ">

      <h2 className="text-(--color-text) text-5xl font-bold mb-4 w-45 md:text-[110px]">
        PROJETOS <span className="text-(--color-text-span)">RECENTES</span>
      </h2>

      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          titulo={project.titulo}
          descricao={project.descricao}
          imagem={project.imagem}
          href={project.url}
        />
      ))}

    </div>
  );
}