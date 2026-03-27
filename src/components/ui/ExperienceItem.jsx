export default function ExperienceItem({
  company,
  role,
  description,
  period,
}) {
  return (
    <div className="flex flex-col items-start px-4 py-4 w-full gap-1 md:hover:bg-[#1C1A19] rounded-2xl duration-700 transition ease-in-out">
      <h3 className="text-(--color-text) text-[18px] font-bold md:text-[26px]">
        {company}
      </h3>

      <p className="text-(--color-text-p) text-[16px]">
        {role}
      </p>

      <p className="text-(--color-text-p) text-[16px]">
        {description}
      </p>

      <p className="text-(--color-text-p) text-[16px]">
        {period}
      </p>
    </div>
  );
}