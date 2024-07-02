import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, Gradient, BottomLine } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generate from "./Generate";
import Notifications from "./Notifications";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef();

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[15.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] text-center mx-auto mb-[4rem] sm:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with{" "}
            <span className="inline-block relative">
              Brainwave{" "}
              <img
                src={curve}
                alt="curve"
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app
          </p>
          <Button href="/pricing" white>
            Get Started
          </Button>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 border">
          <div className="relative z-1 p-0 5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  alt="robot"
                  className="w-full scale-[1.7] translate-y-[8%] md:-translate-y-[10%]lg:-translate-y-[33%]"
                  width={1024}
                  height={490}
                />
                <Generate className="absolute left-4 right-4 bottom-5 rounded-3xl md:bottom-8 md:w-[38%] md:left-1/2 md:-translate-x-1/2" />
                {/* single parallax */}
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl lg:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} alt="icon" width={24} height={24} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                {/* single parallax */}
                <ScrollParallax isAbsolutelyPositioned>
                  <Notifications
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code Generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>

          <div className="absolute -top-[54%] left-[50%] w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              alt="herobg"
              className="w-full"
              width={1440}
              height={1800}
            />
          </div>

          <BackgroundCircles parallaxRef={parallaxRef} />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
