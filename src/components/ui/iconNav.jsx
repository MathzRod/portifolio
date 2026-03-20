  import { BiHomeAlt,BiUser  } from "react-icons/bi";
import ItemList from "./ItemList";

export default function Icons() {
    return(
      <nav className="bg-white rounded-2xl h-12 flex items-center justify-center mb-8 mt-5">
        
        <ul className="flex gap-8.5 justify-center items-center px-5  ">
            <ItemList>
              <button className="text-[24px]">
                <BiHomeAlt/>
              </button>

            </ItemList>
            <ItemList >
              <button className="text-[24px]">
                <BiUser/>
              </button>
            </ItemList>
            
        </ul>
     
      </nav>
    )

}
