import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import l1 from "../../../assets/client/abb-removebg-preview.png";
import l2 from "../../../assets/client/bbmp-removebg-preview.png";
import l3 from "../../../assets/client/embassy-removebg-preview.png";
import l4 from "../../../assets/client/larsenTurbo-removebg-preview.png";
import l5 from "../../../assets/client/ncc-removebg-preview.png";
import l6 from "../../../assets/client/qualcom-removebg-preview.png";

import l7 from "../../../assets/client/Simplex-Infrastructures-Ltd-removebg-preview.png";
import l8 from "../../../assets/client/adarsh-removebg-preview.png";
import l9 from "../../../assets/client/divyashree-removebg-preview.png";
import l10 from "../../../assets/client/itd-removebg-preview.png";
import l11 from "../../../assets/client/mfar-removebg-preview.png";
import l12 from "../../../assets/client/navayuga-removebg-preview.png";
import l13 from "../../../assets/client/punjLyoyd-removebg-preview.png";
import l14 from "../../../assets/client/totalEnvt-removebg-preview.png";

import l15 from "../../../assets/client/centuryrealestate.png"; 
import l16 from "../../../assets/client/chennaimetrorail.png";
import l17 from "../../../assets/client/chief_minister_of_karrnataka_kn.png";
import l18 from "../../../assets/client/delta.jpeg";
import l19 from "../../../assets/client/iaf_logo.png";
import l20 from "../../../assets/client/isro.png";
import l21 from "../../../assets/client/jll.png";
import l22 from "../../../assets/client/kimshospital.png";
import l23 from "../../../assets/client/logo-Zauba.webp";
import l24 from "../../../assets/client/merk.png";
import l25 from "../../../assets/client/National_Highways_Authority_of_India_logo.svg.png";
import l26 from "../../../assets/client/POWERMECHPROJECTSLTD.png";
import l27 from "../../../assets/client/purvankar.png";
import l28 from "../../../assets/client/ramaih.webp";
import l29 from "../../../assets/client/serlogo.png";
import l30 from "../../../assets/client/vajramconstruction.png";

const clientLogos = [
  l1,
  l2,
  l3,
  l4,
  l5,
  l6,
  l7,
  l8,
  l9,
  l10,
  l11,
  l12,
  l13,
  l14,
  l15,
  l16,
  l17,
  l18,
  l19,
  l20,
  l21,
  l22,
  l23,
  l24,
  l25,
  l26,
  l27,
  l28,
  l29,
  l30,
];

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1280 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 1280, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1
    }
};

const Client = () => {
    return (
        <div className="flex flex-col items-center justify-center my-8 md:my-20">
        <div className="flex items-center justify-center mb-12 px-32">
        <div className="flex-grow border-t w-[70px] border-black"></div>
        <h1 className="text-4xl md:text-2xl font-semibold text-center mx-4 text-amber-500">
          OUR CLIENTS
        </h1>
        <div className="flex-grow border-t w-[70px] border-black"></div>
      </div>
            <div className="w-full max-w-7xl">
                <Carousel
                    responsive={responsive}
                    ssr={true} // Server-side rendering support
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={''} // You can pass the device type if available
                    itemClass="carousel-item-padding-40-px"
                >
                    {clientLogos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center p-4">
                            <img src={logo} alt={`Client Logo ${index + 1}`} className="h-24 md:h-32 object-contain" />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Client;
