import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import prizemlje_1 from '../assets/prizemlje_1.jpg'
import prizemlje_2 from '../assets/prizemlje_2.jpg'
import prizemlje_3 from '../assets/prizemlje_3.jpg'
import prizemlje_4 from '../assets/prizemlje_4.jpg'

gsap.registerPlugin(ScrollTrigger);

function InfiniteZoneScroll() {
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);
  const [activeBg, setActiveBg] = useState("#ffffff");

  const zones = [
    {
      bgColor: "#9d1516",
      text: [
        {
          title: "Presentation zone",
          subtitle: "Ovo nije",
          text: "Ovo je mesto gde je neko prvi put video oduševljenje ljudi na izložene radove. I svoj talenat pretvorio u uspešnu buducnost.",
        },
        {
          title: "Moderno uređeno i prostrano prizemlje",
          text: "Prostor Savremene gimnazije nalazi se u prizemlju Beograđanke i koncipirana je kao otvoreni prostor za prezentaciju školskih aktivnosti. Prostor saglediv sa ulice, sa tipskim izložbenim postamentima za privremene izložbe i prezentacije, daje priliku učenicima da predstave svoje projekte, ideje i postignuća.",
          list: ["88m2", "aktivna zona", "kolektivno"]
        },
      ],
      images: [prizemlje_1, prizemlje_2],
    },
    {
      bgColor: "#427042",
      text: [
        {
          title: "Presentation zone",
          subtitle: "Ovo nije",
          text: "Ovo je mesto gde je neko prvi put video oduševljenje ljudi na izložene radove. I svoj talenat pretvorio u uspešnu buducnost.",
        },
        {
          title: "Moderno uređeno i prostrano prizemlje",
          text: "Prostor Savremene gimnazije nalazi se u prizemlju Beograđanke i koncipirana je kao otvoreni prostor za prezentaciju školskih aktivnosti. Prostor saglediv sa ulice, sa tipskim izložbenim postamentima za privremene izložbe i prezentacije, daje priliku učenicima da predstave svoje projekte, ideje i postignuća.",
          list: ["88m2", "aktivna zona", "kolektivno"]
        },
      ],
      images: [prizemlje_3, prizemlje_4],
    },
    {
      bgColor: "#f7b815",
      text: [
        {
          title: "Presentation zone",
          subtitle: "Ovo nije",
          text: "Ovo je mesto gde je neko prvi put video oduševljenje ljudi na izložene radove. I svoj talenat pretvorio u uspešnu buducnost.",
        },
        {
          title: "Moderno uređeno i prostrano prizemlje",
          text: "Prostor Savremene gimnazije nalazi se u prizemlju Beograđanke i koncipirana je kao otvoreni prostor za prezentaciju školskih aktivnosti. Prostor saglediv sa ulice, sa tipskim izložbenim postamentima za privremene izložbe i prezentacije, daje priliku učenicima da predstave svoje projekte, ideje i postignuća.",
          list: ["88m2", "aktivna zona", "kolektivno"]
        },
      ],
      images: [prizemlje_1, prizemlje_2],
    },
  ];
  useEffect(() => {
    const ctx = gsap.context(() => {
      zones.forEach((zone, zoneIndex) => {
        zone.text.forEach((_, textIndex) => {
          const triggerEl = document.querySelector(
            `.zone-text[data-zone='${zoneIndex}'][data-index='${textIndex}']`
          );

          ScrollTrigger.create({
            trigger: triggerEl,
            start: "top center",
            end: "bottom center",
            onEnter: () => {
              imageRef.current.src = zone.images[textIndex];
              setActiveBg(zone.bgColor);
                // Ukloni aktivnu klasu sa svih tekstova
                document.querySelectorAll('.zone-text').forEach(el => el.classList.remove('active'));

                // Dodaj aktivnu klasu samo na trenutno aktivni
                triggerEl.classList.add('active');
            },
            onEnterBack: () => {
                imageRef.current.src = zone.images[textIndex];
              setActiveBg(zone.bgColor);
              document.querySelectorAll('.zone-text').forEach(el => el.classList.remove('active'));
              triggerEl.classList.add('active');
            },
          });
        });
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="infinite-zone-wrapper"
      style={{ '--active-bg': activeBg }}
    >
    <div className="color-box"></div>
      <div className="zone-content">
        
        {/* Leva strana: tekstovi */}
        <div className="zone-texts">
        
        {zones.map((zone, zoneIndex) =>
            zone.text.map((txt, i) => (
            <div
                key={`${zoneIndex}-${i}`}
                className={`zone-text ${i === 0 ? 'zone-text-primary' : 'zone-text-secondary'}`}
                data-zone={zoneIndex}
                data-index={i}
            >
                <div className="heading-box">
                    {txt.subtitle && <h4>{txt.subtitle}</h4>}
                    {txt.title && <h2>{txt.title}</h2>}
                </div>
                <p>{txt.text}</p>
                {txt.list && (
                <div className="list">
                    <div className="povrsina"><p>povrsina</p><span>{txt.list[0]}</span></div>
                    <div className="tip"><p>tip</p><span>{txt.list[1]}</span></div>
                    <div className="koriscenje"><p>koriscenje</p><span>{txt.list[2]}</span></div>
                </div>
                )}
            </div>
            ))
        )}
        </div>

        {/* Desna strana: sticky slika */}
        <div className="zone-image-box">
          <img ref={imageRef} alt="Zone preview" />
        </div>
        <div className="zone-background"></div>
      </div>
    </section>
  );
}

export default InfiniteZoneScroll;
