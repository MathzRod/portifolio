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
        A Software Engineer who has developed countless innovative solutions.
      </p>
      </div>
      
      <ul className="flex gap-5 mt-5 justify-center">
        <li className="text-3xl">
          <CiLinkedin color="var(--color-highlight)" strokeWidth={0.4} />
        </li>
        <li className="text-3xl">
          <CiInstagram color="var(--color-highlight)" strokeWidth={0.4} />
        </li>
      </ul>
    </div>
  );
}