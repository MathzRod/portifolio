import { LuBox } from "react-icons/lu";
import CardItem from "../ui/CardItem";

export default function Card() {
  return (
    <div className="w-full flex flex-col items-center gap-4 px-5 mb-5 md:flex-row">

      <CardItem
        title="Full-Stack Developer"
        icon={LuBox}
        bgColor="bg-[#F46C38]"
        textColor="text-white"
        borderColor="border-white"
        hoverBg="bg-white"
        hoverText="text-[#F46C38]"
        arrowFill="#F46C38"
      />

      <CardItem
        title="QA Tester"
        icon={LuBox}
        bgColor="bg-[#C5FF41]"
        textColor="text-black"
        borderColor="border-black"
        hoverBg="bg-black"
        hoverText="text-[#C5FF41]"
        arrowFill="#C5FF41"
      />

    </div>
  );
}