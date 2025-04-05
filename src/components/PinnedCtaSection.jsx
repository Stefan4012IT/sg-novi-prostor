import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ctaImg from "../assets/open-day-hero-bw.jpg";

gsap.registerPlugin(ScrollTrigger);

function PinnedCtaSection() {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const box = boxRef.current;

    const boxMaxY = section.offsetHeight - box.offsetHeight;

    const ctx = gsap.context(() => {
      // 👇 POMERAJ .floated-box
      gsap.to(box, {
        y: boxMaxY,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${boxMaxY}`,
          scrub: true,
        },
      });

      // 👇 PIN CELE SEKCIJE
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: true,
      });

      // 👇 Parallax za title
      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      });

      // 👇 Parallax za text
      gsap.from(textRef.current, {
        y: 80,
        opacity: 0,
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "top 30%",
          scrub: true,
        },
      });

      // 👇 Parallax za sliku
      gsap.fromTo(
        imgRef.current,
        { y: 80, opacity: 0, scale: 1.05 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-7" ref={sectionRef}>
      <h2 className="title" ref={titleRef}>
        At the heart of the thriving
      </h2>

      <img src={ctaImg} alt="Kids" className="kids-img" ref={imgRef} />

      <div className="text" ref={textRef}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
      </div>

      <div className="btn-box">
        <div className="floated-box" ref={boxRef}></div>
        <div className="btn-cta">
          <a href="#"><span>Prijavi se</span></a>
        </div>
      </div>
    </section>
  );
}

export default PinnedCtaSection;
