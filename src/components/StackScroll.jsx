import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function StackScroll({ children }) {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = panelsRef.current;
      const count = panels.length;
      const scrollLength = window.innerHeight * (count - 1);
  
      ScrollTrigger.matchMedia({
        // 👉 Horizontal stacking (desktop)
        "(min-width: 993px)": () => {
          panels.forEach((panel, i) => {
            gsap.set(panel, {
              x: i === 0 ? 0 : "100%",
              y: 0,
            });
          });
  
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: `+=${scrollLength}`,
              scrub: true,
              pin: true,
              anticipatePin: 1,
            },
          });
  
          panels.forEach((panel, i) => {
            if (i === 0) return;
  
            tl.to(panel, {
              x: 0,
              duration: 1,
              ease: "power2.inOut",
            }, i);
          });
        },
  
        // 👉 Vertical stacking (mobile & tablet)
        "(max-width: 992px)": () => {
          panels.forEach((panel, i) => {
            gsap.set(panel, {
              y: i === 0 ? 0 : "100%",
              x: 0,
            });
          });
  
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: `+=${scrollLength}`,
              scrub: true,
              pin: true,
              anticipatePin: 1,
            },
          });
  
          panels.forEach((panel, i) => {
            if (i === 0) return;
  
            tl.to(panel, {
              y: 0,
              duration: 1,
              ease: "power2.inOut",
            }, i);
          });
        },
      });
    }, containerRef);
  
    return () => ctx.revert(); // čisti samo ovaj kontekst
  }, []);

  return (
    <section className="stack-scroll" ref={containerRef}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`stack-panel panel-${index}`}
          ref={(el) => (panelsRef.current[index] = el)}
        >
          {child}
        </div>
      ))}
    </section>
  );
}

export default StackScroll;
