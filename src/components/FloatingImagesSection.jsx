import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import img_1 from "../assets/dump_img_1.avif";
import img_2 from "../assets/dump_img_2.avif";
import img_3 from "../assets/dump_img_3.avif";
import img_4 from "../assets/dump_img_2.avif";
import img_5 from "../assets/dump_img_3.avif";
import img_6 from "../assets/dump_img_1.avif";

gsap.registerPlugin(ScrollTrigger);

const imgList = [img_1, img_2, img_3, img_4, img_5, img_6];

function FloatingImagesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const images = sectionRef.current.querySelectorAll(".float-image");
  
    images.forEach((img, i) => {
      const yFrom = gsap.utils.random(-10, 30);
      const scaleFrom = gsap.utils.random(1.05, 1.25);
  
      gsap.fromTo(
        img,
        {
          y: yFrom,
          scale: scaleFrom,
        },
        {
          y: -yFrom,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: img, // svaki img kao poseban trigger
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="floating-images-section">
      {imgList.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`floating-${i}`}
          className={`float-image float-image--${i + 1}`}
        />
      ))}
    </section>
  );
}

export default FloatingImagesSection;