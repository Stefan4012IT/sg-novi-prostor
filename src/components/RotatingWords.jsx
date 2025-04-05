import { useEffect, useRef } from "react";
import gsap from "gsap";

function RotatingWords({ words = [], className = "" }) {
  const wordsRef = useRef([]);
  const timelineRef = useRef(null);

  useEffect(() => {
    const elements = wordsRef.current;

    // Postavi početne pozicije – samo prvi je vidljiv (y: 0), ostali ispod (y: 100%)
    gsap.set(elements, { yPercent: 100, opacity: 0 });
    gsap.set(elements[0], { yPercent: 0, opacity: 1 });

    let current = 0;
    const total = elements.length;

    const loop = () => {
      const currentEl = elements[current];
      const nextIndex = (current + 1) % total;
      const nextEl = elements[nextIndex];

      const tl = gsap.timeline({
        onComplete: () => {
          current = nextIndex;
          loop(); // rekurzivno pokrećemo sledeći krug
        },
      });

      tl.to(currentEl, {
        yPercent: -120,
        duration: 1,
        ease: "power2.inOut",
      })
        .set(currentEl, { yPercent: 100, opacity: 0 }) // odmah ga pošalji nazad ispod
        .to(
          nextEl,
          {
            opacity: 1,
            yPercent: 0,
            duration: 1,
            ease: "power2.inOut",
          },
          "<" // startuje istovremeno sa prethodnim .to
        );
    };

    loop(); // inicijalni loop

    return () => {
        // 🧹 Očisti timeline da se ne duplira pri ponovnom ulasku u komponentu
        if (timelineRef.current) {
          timelineRef.current.kill();
        }
      };
  }, [words]);

  return (
    <div className={`rotating-words ${className}`}>
      {words.map((text, i) => (
        <h1
          key={i}
          ref={(el) => (wordsRef.current[i] = el)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            whiteSpace: "nowrap",
          }}
        >
          {text}
        </h1>
      ))}
    </div>
  );
}

export default RotatingWords;
