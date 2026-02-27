import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Hero = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.out",
    });
  });
  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        <img
          src="/images/static-img.png"
          alt="hero-img"
          className="absolute bottom-0 left-1/2 -translate-x-1/2  scale-100 md:scale-150"
        />
        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title">Freaking delicious</h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Protein + Caffine</h1>
            </div>
          </div>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum harum
            dolorum natus tempore ducimus ex laborum blanditiis, dolore nostrum
            optio!
          </h2>
          <div className="hero-button">
            <p>Chug a SPYLT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
