import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollZone from "./ScrollZone";

import backgroundNacrt from '../assets/prizemlje_nacrt.svg'

gsap.registerPlugin(ScrollTrigger);

function ScrollNarrative({ zones }) {
  const containerRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);

  // Generiši tačan niz koraka
  const steps = zones.flatMap((zone, zoneIndex) =>
    zone.images.map((img, imageIndex) => ({
      zoneIndex,
      imageIndex,
      text: imageIndex === 0 ? zone.text[0] : zone.text[1],
      image: img,
      bgColor: zone.bgColor,
    }))
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalSteps = steps.length;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${(totalSteps + 1) * window.innerHeight/1.5}`, // dodajemo +1 buffer
          scrub: true,
          pin: true,
        },
      });

      // DODAJEMO buffer korak koji ne menja state
      tl.to({}, { duration: 0 });

      for (let i = 0; i < totalSteps; i++) {
        tl.to({}, {
          duration: 1,
          onStart: () => {
            setCurrentStep(i);
          },
          onReverseComplete: () => {
            if (i - 1 >= 0) {
              setCurrentStep(i - 1);
            } else {
              setCurrentStep(0);
            }
          }
        });
      }
    }, containerRef);

    return () => ctx.revert(); // briše SAMO ovaj ScrollTrigger context
  }, [zones]);

  const current = steps[currentStep];

  return (
    <section
      ref={containerRef}
      className="scroll-narrative"
      style={{
        backgroundColor: current?.bgColor || "#fff",
      }}
    >
      <img className="backgroundImg" src={backgroundNacrt} alt="" />
      {current && (
        <ScrollZone text={current.text} image={current.image} />
      )}
    </section>
  );
}

export default ScrollNarrative;