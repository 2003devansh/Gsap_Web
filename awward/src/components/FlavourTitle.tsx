import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";

const FlavourTitle = () => {
  useGSAP(() => {
    const firstSplit = SplitText.create(".first-test-split h1", {
      type: "chars",
    });

    const secSplit = SplitText.create(".second-test-split h1", {
      type: "chars",
    });

    gsap.from(firstSplit.chars, {
      yPercent: 200,
      stagger: 0.03,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 30%",
      },
    });

    gsap.from(secSplit.chars, {
      yPercent: 200,
      stagger: 0.03,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 30%",
      },
    });

    gsap.to(".flavor-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0% , 100% 100% , 0% 100%)",
      scrollTrigger: {
        trigger: ".flavor-section",
      },
    });
  });
  return (
    <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16">
      <div className="overflow-hidden 2xl:py-0 py-3 first-test-split">
        <h1>We have 6</h1>
      </div>

      <div
        style={{
          clipPath: "polygon(0 0, 0 0 , 0 100% , 0% 100%)",
        }}
        className="flavor-text-scroll"
      >
        <div className="bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
          <h2 className="text-milk">freaking</h2>
        </div>
      </div>

      <div className="overflow-hidden 2xl:py-0 py-3 second-test-split">
        <h1>delicious flavour</h1>
      </div>
    </div>
  );
};

export default FlavourTitle;
