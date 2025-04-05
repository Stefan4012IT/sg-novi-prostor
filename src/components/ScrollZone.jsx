
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";

function ScrollZone({ text, image }) {
  const containerRef = useRef(null);
  const [prevText, setPrevText] = useState(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      if (prevText) {
        // Animate previous text out
        tl.to(".text-prev", {
          y: -50,
          opacity: 0,
          duration: 0.14,
          ease: "power2.inOut",
        });
      }

      // Animate new text in
      tl.fromTo(
        ".text-current",
        { y: -350, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power2.in",
        },
        "<" // paralelno ako hoćeš, ili "+=0.1" ako hoćeš lag
      );

      // Animate new text in
      tl.fromTo(
        ".text-current-withNoHeading",
        { y: 350, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power2.in",
        },
        "<" // paralelno ako hoćeš, ili "+=0.1" ako hoćeš lag
      );
    }, containerRef);

    return () => ctx.revert();
  }, [text, prevText]);

  useEffect(() => {
    setPrevText(text); // upamti prethodni tekst
  }, [text]);

  return (
    <div
      ref={containerRef}
      className="scroll-zone"
    >

      <div className="scroll-box">
        {prevText && prevText !== text && (
          <div
            className="text-prev"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              opacity: 1,
            }}
          >
            {prevText.title && (
              <h2 className="title">
                {prevText.title}
              </h2>
            )}
            <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
              {prevText.text}
            </p>
          </div>
        )}
      { text.title && text.text && text.list ? (
        <div className="text-current-withList">
          <div className="text-heading">
            <h3>{text.title}</h3>
          </div>
          <p>{text.text}</p>
          <div className="text-list">
            <div className="povrsina"><p>Povrsina</p><span>{text.list[0]}</span></div>
            <div className="tip"><p>Tip aktivnosti</p><span>{text.list[1]}</span></div>
            <div className="koriscenje"><p>Koriscenje</p><span>{text.list[2]}</span></div>
            
            
          </div>
        </div>
      ) : text.title ? (
        <div className="text-current">
          <div className="text-heading">
            {text.subtitle && <h4>{text.subtitle}</h4>}
            <h2>{text.title}</h2>
          </div>
          <p>{text.text}</p>
        </div>
      ) : (
        <div className="text-current-withNoHeading">
          <p>{text.text}</p>
        </div>
      )}
      </div>

      <div className="zone-img-box">
        
        <img
          src={image}
          alt="Slika"
          className="zoneImg"
        />
      </div>
    </div>
  );
}

export default ScrollZone;
