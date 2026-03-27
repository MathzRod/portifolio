export default function ExperienceItem({
  company,
  role,
  description,
  period,
}) {
  return (
    <div className="flex flex-col items-start px-2 py-4 w-full gap-1">
      <h3 className="text-(--color-text) text-[18px] font-bold">
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