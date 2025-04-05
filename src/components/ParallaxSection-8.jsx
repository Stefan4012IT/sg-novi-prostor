import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img_3 from "../assets/dump_img_3.avif";

gsap.registerPlugin(ScrollTrigger);

function ParallaxSection_8() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 250,
        opacity: 0,
        duration: 2.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "top 30%",
          scrub: true,
        },
      });

      gsap.from(textRef.current, {
        y: -80,
        opacity: 0,
        duration: 2.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top 20%",
          scrub: true,
        },
      });

      gsap.fromTo(imgRef.current,
        { y: -200, scale: 1.2, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-8" ref={sectionRef}>
      <h2 className="title" ref={titleRef}>Get in touch</h2>
      <div className="text" ref={textRef}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
      </div>
      <img src={img_3} alt="Get in touch" className="img_gttouch" ref={imgRef} />
    </section>
  );
}

export default ParallaxSection_8;
