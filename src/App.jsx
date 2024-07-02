import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefit from "./components/Benefit";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/RoadMap";
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className="pt-[4.57rem] lg:pt-[5.27rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefit />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
