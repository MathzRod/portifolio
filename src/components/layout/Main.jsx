import HeroSection from "./HeroSection";
import LogoLoop from "./LogoLoop";
import Card from "./card";
import Projects from "./Projects";
import Experience from "./Experience";
import Form from "./Form";


export default function Main() {
  return (
    <main className="w-screen max-w-300 flex flex-col gap-6">
      <HeroSection/>
      <LogoLoop />
      <Card />
      <Projects />
      <Experience />
      <Form/>
    </main>
  )
}