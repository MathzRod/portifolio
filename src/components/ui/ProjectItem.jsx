export default function ProjectItem({title, description, image, href,}) {
  const content = (
    <div className="w-full flex gap-4 items-center p-5 md:hover:bg-[#1C1A19] rounded-2xl duration-700 transition ease-in-out">
      <div className="w-32.5 h-32.5 shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-(--color-text) font-bold text-lg md:text-[26px]">
          {title}
        </h3>

        <p className="text-(--color-text-p) text-[16px] leading-snug">
          {description}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        {content}
      </a>
    );
  }

  return content;
}