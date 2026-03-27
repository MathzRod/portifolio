import HeroSection from "./HeroSection";
import LogoLoop from "./LogoLoop";
import Card from "./card";
import Projects from "./Projects";
import Experience from "./Experience";
import Form from "./Form";
import Footer from "./Footer";

export default function Main() {
  return (
    <main className="w-full flex flex-col gap-10 ">
      <HeroSection />
      <LogoLoop />
      <Card />
      <Projects />
      <Experience />
      <Form />
      <Footer />
    </main>
  );
}