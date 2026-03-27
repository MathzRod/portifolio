import "./App.css";
import Navbar from "./components/layout/NavBar";
import Main from "./components/layout/Main";
import HeroCard from "./components/ui/HeroCard";

function App() {
  return (
    <div className="bg-(--background) min-h-screen">
      <Navbar />

      <div className="w-full max-w-350 mx-auto pt-6 mt-7 md:flex md:items-start md:gap-25 px-5 md:px-8   ">
        <aside className="hidden lg:block md:w-[320px]  md:shrink-0 md:sticky md:top-6">
          <HeroCard />
        </aside>

        <div className="flex-1 min-w-0 mt-10">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;