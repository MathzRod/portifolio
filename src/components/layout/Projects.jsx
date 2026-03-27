import ProjectItem from "../ui/ProjectItem";

const projects = [
  {
    id: 1,
    title: "Axios 3D Studio",
    description: "Landing Page Template",
    image: "/axios3d.png",
    url: "https://www.axios3d.com.br/",
  },
  {
    id: 2,
    title: "Weather APP",
    description: "Web application for consuming API",
    image: "/Projeto2.png",
    url: "https://seu-link.com",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="w-full mt-7 flex flex-col gap-4 px-5 ">

      <h2 className="text-(--color-text) text-5xl font-bold mb-4 w-45 md:text-[110px]">
        Recent <span className="text-(--color-text-span)">Projects</span>
      </h2>

      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          href={project.url}
        />
      ))}

    </div>
  );
}