import { LuBox } from "react-icons/lu"
import { LuArrowBigRight } from "react-icons/lu";

export default function Card() {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="bg-[#F46C38] rounded-2xl px-5 pt-8 pb-5 w-full max-w-300 flex flex-col gap-7 justify-between h-55 mt-7">
        <LuBox size={40} color="#fff" />
        <p className="text-white text-2xl weight-bold font-poppins">
          Full-Stack Developer
        </p>
        <button className="bg-transparent text-white font-bold py-2 px-2 rounded-lg w-max self-end border-2 border-white hover:bg-white hover:text-[#F46C38] hover:border-white transition-colors duration-300 ">
          <LuArrowBigRight  fill="#F46C38" size={30}/>
        </button>
      </div>

      <div className="bg-[#C5FF41] rounded-2xl px-5 pt-8 pb-5 w-full max-w-300 flex flex-col gap-7 justify-between h-55 mt-7">
        <LuBox size={40} color="#000" />
        <p className="text-black text-2xl weight-bold font-poppins">
          QA Tester
        </p>
        <button className="bg-transparent text-black font-bold py-2 px-2 rounded-lg w-max self-end border-2 border-black hover:bg-black hover:text-[#C5FF41] hover:border-black transition-colors duration-300 ">
          <LuArrowBigRight  fill="#C5FF41" size={30}/>
        </button>
      </div>
    
    </div>

  )
}