
import Card from "../ui/card";
import LogoLoop from "../ui/LogoLoop";
import { CiLinkedin, CiInstagram } from "react-icons/ci";

export default function HeroSection() {
  return (

    <section className="bg-black h-full  flex flex-col items-center gap-8 px-5
                        md:bg-blue-500 md:h-screen                                               " >
        <div className="bg-white h-130 w-100 rounded-2xl flex flex-col items-center px-7 py-7.5">
            <img src="./public/MatheusR.jpg" alt="" className="w-75 h-67.5 object-cover rounded-2xl " />
            <p className="text-3xl font-bold text-center mt-5 font-poppins ">Matheus Camargo</p>
            <p className="text-center mt-3">A Software Engineer who has developed countless innovative solutions.</p>
            <ul className="flex gap-5 mt-5 justify-center">
              <li className="text-3xl ">
                <CiLinkedin color="#7B0828" strokeWidth={0.4}/>
              </li>
              <li className="text-3xl ">
                <CiInstagram color="#7B0828" strokeWidth={0.4}/>
              </li>
            </ul>
        </div>
        <div className="bg-black flex flex-col items-center px-7" >
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-5xl font-bold text-center mt-2 font-poppins text-white ">SOFTWARE <span className="text-[#353334]">ENGINEER</span></h1>
                <p className="text-center text-gray-300">Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.</p>
            </div>
        </div>
        <LogoLoop/>
        <Card/>
    </section>
  );
}