import React, {useState} from 'react';
import img_1 from '../assets/dump_img_1.avif'
import img_2 from '../assets/dump_img_2.avif'
import img_3 from '../assets/dump_img_3.avif'

import prizelje_1 from '../assets/prizemlje_1.jpg'
import prizelje_2 from '../assets/prizemlje_2.jpg'

import intro_img_1 from '../assets/intro_1.jpg'
import intro_img_2 from '../assets/intro_2.jpg'
import intro_img_3 from '../assets/intro_3.jpg'
import intro_img_4 from '../assets/intro_4.jpg'

import imgPrizemlje from '../assets/prizemlje_nacrt.svg'
import Benefit from '../components/Benefit';
import RotatingWords from '../components/RotatingWords';
import StackScroll from '../components/StackScroll';
import ScrollNarrative from '../components/ScrollNarrative';
import FloatingImagesSection from '../components/FloatingImagesSection';

import ctaImg from '../assets/open-day-hero-bw.jpg'
import PinnedCtaSection from '../components/PinnedCtaSection';
import ParallaxSection_8 from '../components/ParallaxSection-8';
import InfiniteZoneScroll from '../components/InfiniteZoneScroll';


const benefitsData = [
    { num: "1", title: "Brzina", text: "Naš tim razvija rešenja ekspresno." },
    { num: "2", title: "Kvalitet", text: "Svaki detalj je doveden do savršenstva." },
    { num: "3", title: "Fleksibilnost", text: "Prilagođavamo se svakom projektu." },
    { num: "4", title: "Podrška", text: "Tu smo i posle lansiranja." },
  ];

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
      images: [prizelje_1, prizelje_2],
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
      images: [prizelje_1, prizelje_2],
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
      images: [prizelje_1, prizelje_2],
    },
  ];




function Home() {
    
    return (
      <main className="home">

        <section className="hero section-1">
            <div className="hero--title-right">
                <h1>For the one who is</h1>
            </div>
            <div className="hero--title-left">
                <RotatingWords words={["Colorful", "Driven", "Creative", "Sportive", "Sustainable"]} />
            </div>
          <div className="hero-img">
            <img src={intro_img_1} alt="" className="img-1" />
            <img src={intro_img_2} alt="" className="img-2" />
            <img src={intro_img_3} alt="" className="img-3" />
            <img src={intro_img_4} alt="" className="img-4" />
          </div>
          <h2 className="title">
            At the heart of the thriving
          </h2>
        </section>
        
        <StackScroll>
            {benefitsData.map((benefit, index) => (
            <Benefit
                key={index}
                num={benefit.num}
                title={benefit.title}
                text={benefit.text}
                className={`benefit--${index}`}
            />
            ))}
        </StackScroll>
        <section className="section-3">
          <h2 className="title">
            At the heart of the thriving
          </h2>
          <div className="section-img">
            <img src={imgPrizemlje} alt="" />
          </div>
          <h3 className="title-2">
            Prizemlje
          </h3>
        </section>
        <InfiniteZoneScroll />
        {/* <ScrollNarrative zones={zones} /> */}

        {/* <section className="section-4">
          <h2 className="title">
            At the heart of the thriving
          </h2>
          <div className="section-img">

          </div>
          <h3 className="title-2">
            I Sprat
          </h3>
        </section>
        <ScrollNarrative zones={zones} />

        <section className="section-5">
          <h2 className="title">
            At the heart of the thriving
          </h2>
          <div className="section-img">

          </div>
          <h3 className="title-2">
            II Sprat
          </h3>
        </section>
        <ScrollNarrative zones={zones} />

        <section className="section-6">
          <h2 className="title">
            At the heart of the thriving
          </h2>
          <div className="section-img">

          </div>
          <h3 className="title-2">
            III Sprat
          </h3>
        </section>
        <ScrollNarrative zones={zones} /> */}
        <PinnedCtaSection />
        <ParallaxSection_8 />
        <div className="section-9">

        </div>
        <section className="section-10">
          <div className="section-10--base">
            <h1>savremena</h1>
          </div>
          <div className="section-10--overlay">
            <FloatingImagesSection />
          </div>
        </section>
      </main>
    );
  }
  
  export default Home;
  