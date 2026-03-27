import { CiLinkedin, CiInstagram} from "react-icons/ci";


export default function HeroSection() {
  return (

    <section className=" h-full  flex flex-col items-center gap-8 px-5 pb-2
                        md:bg-blue-500 md:h-screen                                               " >
        <div className="bg-white  w-full max-w-sm rounded-2xl flex flex-col items-center px-7 py-7.5">
            <img src="/MatheusR.jpg" alt="" className="w-full aspect-[4/3] object-cover rounded-2xl " />
            <p className="text-3xl font-bold text-center mt-5 font-poppins ">Matheus Camargo</p>
            <p className="text-center mt-3">A Software Engineer who has developed countless innovative solutions.</p>
            <ul className="flex gap-5 mt-5 justify-center">
              <li className="text-3xl ">
                <CiLinkedin color="var(--color-highlight)" strokeWidth={0.4}/>
              </li>
              <li className="text-3xl ">
                <CiInstagram color="var(--color-highlight)" strokeWidth={0.4}/>
              </li>
            </ul>
        </div>
        <div className=" flex flex-col items-start w-full " >
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-5xl font-bold text-start mt-2 font-poppins text-(--color-text) ">SOFTWARE <span className="text-(--color-text-span)">ENGINEER</span></h1>
                <p className="text-start  text-(--color-text-p) text-lg leading-relaxed">Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.</p>
            </div>
        </div>
    </section>
  );
}