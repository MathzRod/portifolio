// components/layout/LogoCarousel.tsx
import { SiReact, SiTypescript, SiNodedotjs, SiPython, SiDocker, SiPostgresql, SiGraphql, SiRedis, SiJavascript,SiAngular,SiDjango,SiCss, SiGit, SiJest, SiNextdotjs, SiFigma } from "react-icons/si";

const logos = [
  { label: "React",      Icon: SiReact },
  { label: "TypeScript", Icon: SiTypescript },
  { label: "Node.js",    Icon: SiNodedotjs },
  { label: "Python",     Icon: SiPython },
  { label: "Docker",     Icon: SiDocker },
  { label: "PostgreSQL", Icon: SiPostgresql },
  { label: "GraphQL",    Icon: SiGraphql },
  { label: "Redis",      Icon: SiRedis },
  { label: "JavaScript", Icon: SiJavascript},
  { label: "Angular",    Icon: SiAngular },
  { label: "Django",     Icon: SiDjango },
  { label: "CSS",        Icon: SiCss },
  { label: "Git",        Icon: SiGit },
  { label: "Jest",       Icon: SiJest },
  { label: "Next.js",    Icon: SiNextdotjs },
  { label: "Figma",      Icon: SiFigma },
];

export default function LogoCarousel() {
  return (
    <div className="overflow-hidden py-8 `[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]` w-screen">
      <div className="flex animate-scroll hover:[animation-duration:60s]">
        {/* Primeiro grupo */}
        <ul className="flex shrink-0 gap-15 min-w-full justify-around">
          {logos.map((logo, i) => (
            <LogoItem key={i} logo={logo} />
          ))}
        </ul>

        {/* Segundo grupo — clone exato para o loop */}
        <ul className="flex shrink-0 gap-15 min-w-full justify-around" aria-hidden>
          {logos.map((logo, i) => (
            <LogoItem key={i} logo={logo} />
          ))}
        </ul>
      </div>
    </div>
  );
}
function LogoItem({ logo }) {
  return (
    <li className="
      flex flex-col items-center gap-2  
      shrink-0 cursor-default
      opacity-55 transition-all duration-300
      hover:opacity-100 hover:grayscale-0 hover:scale-110 text-[#e70545]
    ">
      <logo.Icon size={60} style={{ fill: "none", stroke: "currentColor", strokeWidth: 1 }} />
      <span className="hidden">{logo.label}</span>
    </li>
  );
}