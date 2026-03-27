import "./App.css";
import Navbar from "./components/layout/NavBar";
import Main from "./components/layout/Main";
import HeroCard from "./components/ui/HeroCard";

function App() {
  return (
    <div className="bg-(--background) min-h-screen">
      <Navbar />

      <div className="w-full max-w-350 mx-auto md:flex md:items-start md:gap-25 px-5 md:px-8 md:px-12 pt-6">
        <aside className="hidden lg:block lg:w-[320px] xl:w-90 lg:shrink-0 lg:sticky lg:top-6">
          <HeroCard />
        </aside>

        <div className="flex-1 min-w-0">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;