export default function ExperienceItem({compania, cargo, descricao, periodo,}) {
  return (
    <div className="flex flex-col items-start px-4 py-5 w-full gap-3 md:hover:bg-[#1C1A19] rounded-2xl duration-500 transition">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
        <div>
          <h3 className="text-(--color-text) text-[18px] font-bold md:text-[26px]">
            {compania}
          </h3>
          <p className="text-(--color-text-span) text-[14px] md:text-[16px]">
            {cargo}
          </p>
        </div>

        <span className="text-(--color-text-p) text-[13px] md:text-[14px]">
          {periodo}
        </span>
      </div>

      {/* DESCRIPTION EM BULLETS */}
      <ul className="flex flex-col gap-2 pl-5 list-disc text-(--color-text-p) text-[14px] md:text-[15px] leading-relaxed">
        {Array.isArray(descricao) ? (
          descricao.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))
        ) : (
          <li>{descricao}</li>
        )}
      </ul>
    </div>
  );
}