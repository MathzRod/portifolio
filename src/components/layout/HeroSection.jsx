import HeroCard from "../ui/HeroCard";

export default function HeroSection() {
  return (
    <section  id="about" className="h-full flex flex-col items-center gap-8 px-5 pb-2">
      <div className="lg:hidden w-full flex justify-center">
        <HeroCard />
      </div>

      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <h1 className="text-5xl font-bold text-start mt-2 font-poppins text-(--color-text) md:text-[110px]">
            SOFTWARE <span className="text-(--color-text-span)">ENGINEER</span>
          </h1>

          <p className="text-start text-(--color-text-p) text-lg leading-relaxed md:text-lg">
            Construindo soluções digitais com foco em desenvolvimento, organização e boa experiência de uso.
          </p>
        </div>
      </div>
    </section>
  );
}