import { ScrollTrigger } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavourSection";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <MessageSection />
      <FlavorSection />
    </main>
  );
};

export default App;
