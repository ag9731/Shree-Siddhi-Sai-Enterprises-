import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import l1 from "../../../assets/client/abb-removebg-preview.png";
import l2 from "../../../assets/client/bbmp-removebg-preview.png";
import l3 from "../../../assets/client/embassy-removebg-preview.png";
import l4 from "../../../assets/client/larsenTurbo-removebg-preview.png";
import l5 from "../../../assets/client/ncc-removebg-preview.png";
import l6 from "../../../assets/client/qualcom-removebg-preview.png";

const clientLogos = [
    l1, l2, l3, l4, l5, l6
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
