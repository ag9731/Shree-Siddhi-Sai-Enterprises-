import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import h1 from "../../assets/homeHero1.jpg";
import h2 from "../../assets/homeHero2.jpg"
import h3 from "../../assets/homeHero3.jpg";
import h4 from "../../assets/homeHero4.jpg";
import "./Home.css"
import HomeHeroText from './HomeHeroText';

const HomeHero = () => {
  return (
    <>  
     <div className="relative w-auto md:w-full h-[300px] md:h-[500px] lg:h-[500px] ">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        interval={3000}
        stopOnHover={false}
        className="h-full "
      >
        {/* <div className="relative">
          <img src={h1} alt="Slide 1" className="object-cover object-top w-full h-[300px] md:h-[500px] lg:h-[500px]" />
          <div className=" opacity-0"></div>
        </div> */}
        <div className="relative">
          <img src={h2} alt="Slide 2" className="object-cover object-top w-full h-[300px] md:h-[500px] lg:h-[500px]" />
          <div className=" opacity-50"></div>
        </div>
        <div className="relative">
          <img src={h3} alt="Slide 3" className="object-cover object-top w-full h-[300px] md:h-[500px] lg:h-[500px]" />
          <div className=" opacity-50"></div>
        </div>
        <div className="relative">
          <img src={h4} alt="Slide 4" className="object-cover object-center w-full h-[300px] md:h-[500px] lg:h-[500px]" />
          <div className=" opacity-50"></div>
        </div>
        {/* <div className="relative">
          <img src={h5} alt="Slide 5" className="object-cover object-center w-full h-[300px] md:h-[500px] lg:h-[500px]" />
          <div className=" opacity-50"></div>
        </div> */}
      </Carousel>
    </div>
    
    {/* <HomeHeroText/> */}
    </>

  );
};

export default HomeHero;
