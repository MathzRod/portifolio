import { CiLinkedin, CiInstagram } from "react-icons/ci";

export default function HeroCard() {
  return (
    <div className="bg-white w-full max-w-lg rounded-2xl flex flex-col items-center px-7 py-7.5">
      <img
        src="/MatheusR.jpg"
        alt="Foto de Matheus Camargo"
        className="w-full aspect-4/3 object-cover rounded-2xl md:h-74"
      />
      <div className="flex flex-col gap-10">
        <p className="text-3xl font-bold text-center mt-5 font-poppins">
        Matheus Camargo
      </p>

      <p className="text-center mt-3">
        Estudante de Engenharia da Computação e ADS. Focado em Desenvolvimento WEB, projetos práticos e evolução contínua na área de tecnologia."
      </p>
      </div>
      
      <ul className="flex gap-5 mt-5 justify-center">
        <li className="text-3xl">
          <a href="https://www.linkedin.com/in/matheusrodrcarm/">
            <CiLinkedin color="var(--color-highlight)" strokeWidth={0.4} />
          </a>
        </li>
        <li className="text-3xl">
          <a href="https://www.instagram.com/itsthe_math/">
            <CiInstagram color="var(--color-highlight)" strokeWidth={0.4} />
          </a>
          
        </li>
      </ul>
    </div>
  );
}