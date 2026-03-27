import { LuArrowBigRight } from "react-icons/lu";

export default function CardItem({title, icon, bgColor, textColor, borderColor, hoverBg, hoverText, arrowFill,}) {
  const Icon = icon;
  return (
    <div className={`
      ${bgColor} rounded-2xl px-5 pt-8 pb-5 w-full max-w-300
      flex flex-col gap-7 justify-between h-55 mt-7
    `}>
      
      <Icon size={40} className={textColor} />

      <p className={`${textColor} text-2xl font-bold font-poppins`}>
        {title}
      </p>

      <button className={`
        bg-transparent font-bold py-2 px-2 rounded-lg w-max self-end border-2
        ${textColor} ${borderColor}
        hover:${hoverBg} hover:${hoverText}
        transition-colors duration-300
      `}>
        <LuArrowBigRight fill={arrowFill} size={30} />
      </button>

    </div>
  );
}