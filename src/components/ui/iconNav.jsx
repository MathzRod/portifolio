import { BiHomeAlt,BiUser, BiFolder, BiBriefcaseAlt, BiPencil  } from "react-icons/bi";
import ItemList from "./ItemList";

export default function Icons() {
    return(
      <nav className="bg-white rounded-2xl h-12 flex items-center justify-center mb-8 mt-5 fixed left-1/2 -translate-x-1/2">
        <ul className="flex gap-8.5 justify-center items-center px-5  ">
            <ItemList >
              <a href="#about" className="text-[24px]">
                <BiUser/>
              </a >
            </ItemList>
            <ItemList>
              <a href="#projects" className="text-[24px]">
                <BiFolder />
              </a >
            </ItemList>
            <ItemList>
              <a href="#experience" className="text-[24px]">
                <BiBriefcaseAlt />
              </a >
            </ItemList>
            <ItemList>
              <a href="#contact" className="text-[24px]">
                <BiPencil />
              </a >
            </ItemList>
        </ul>
      </nav>
    )
}
