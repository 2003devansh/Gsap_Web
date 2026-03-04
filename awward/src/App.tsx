import { ScrollTrigger } from "gsap/all";
import ScrollSmoother from "gsap/ScrollSmoother";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavourSection";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 3,
      effects: true,
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Navbar />
        <Hero />
        <MessageSection />
        <FlavorSection />
      </div>
    </div>
  );
};

export default App;
