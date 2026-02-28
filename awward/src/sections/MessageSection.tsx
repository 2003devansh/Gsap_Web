import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const MessageSection = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "40% center",
        scrub: true,
      },
    });

    const reverseTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top top",
      },
    });
    reverseTl.to(".msg-text-scroll", {
      duration: 1,
      clipPath: "",
      ease: "circ.inOut",
    });

    tl.to(".middle-text", {
      duration: 1,
      clipPath: "polygon(0% 0% , 100% 0%,100% 100% ,0% 100%)",
      ease: "circ.inOut",
    });
    const firstMsgSplit = SplitText.create(".first-message", {
      type: "words",
    });

    const secMsgSplit = SplitText.create(".second-message", {
      type: "words",
    });

    const paragraphSplit = SplitText.create(".message-content p", {
      type: "words, line",
      linesClass: "paragraph-line",
    });

    gsap.from(paragraphSplit.words, {
      yPercent: 300,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.01,
      scrollTrigger: {
        trigger: ".message-content p",
        start: "top center",
      },
    });

    gsap.to(firstMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true,
      },
    });

    gsap.to(secMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "20% center",
        scrub: true,
      },
    });
  });

  return (
    <section className="message-content">
      <div className="container mx-auto flex-center py-28 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className="first-message">Stir up your fearless past and</h1>
            <div className="msg-text-scroll">
              <div
                className="middle-text bg-light-brown md:pb-5 pb-3 px-5"
                style={{
                  clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
                }}
              >
                <h2 className=" text-red-brown">Fuel up </h2>
              </div>
            </div>
            <h1 className="second-message">
              your future with every gulp of perfect Protien
            </h1>
          </div>
          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex-center overflow-hidden ">
              <p>
                Rev up your rebel spirit and feed the adventure of life with
                SPLYT , where you're one chug away from epic nostalgia and
                fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
