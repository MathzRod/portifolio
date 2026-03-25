const projects = [
  {
    id: 1,
    title: "Projeto 1",
    description: "SaaS Framer Template",
    image: "/Projeto1.png",
  },
  {
    id: 2,
    title: "Projeto 2",
    description: "SaaS Framer Template",
    image: "/Projeto2.png",
  },
  {
    id: 3,
    title: "Projeto 3",
    description: "SaaS Framer Template",
    image: "/Projeto3.png",
  },
];

export default function Projects() {
  return (

    <div className=" w-full mt-7 flex flex-col items-center gap-4 px-5">
      <h2 className=" text-center text-white text-5xl font-bold mb-4 w-45">
        Recent <span className="text-(--color-text-span)">Projects</span>
      </h2>

      {projects.map((project) => (
        <div key={project.id} className="bg-amber-300 w-full flex justify-start gap-4 items-center">
          <div className="w-22.5 h-22.5 bg-amber-700">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-2xl" />
          </div>
          <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  )

}
