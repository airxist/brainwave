import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <div className="pt-[4.57rem] lg:pt-[5.27rem] overflow-hidden">
        <Header />
        <Hero />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
