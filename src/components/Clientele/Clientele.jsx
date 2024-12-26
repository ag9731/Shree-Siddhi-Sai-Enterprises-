import React from "react";

import l1 from "../../assets/client/abb-removebg-preview.png";
import l2 from "../../assets/client/bbmp-removebg-preview.png";
import l3 from "../../assets/client/embassy-removebg-preview.png";
import l4 from "../../assets/client/larsenTurbo-removebg-preview.png";
import l5 from "../../assets/client/ncc-removebg-preview.png";
import l6 from "../../assets/client/qualcom-removebg-preview.png";
import l7 from "../../assets/client/Simplex-Infrastructures-Ltd-removebg-preview.png";
import l8 from "../../assets/client/adarsh-removebg-preview.png";
import l9 from "../../assets/client/divyashree-removebg-preview.png";
import l10 from "../../assets/client/itd-removebg-preview.png";
import l11 from "../../assets/client/mfar-removebg-preview.png";
import l12 from "../../assets/client/navayuga-removebg-preview.png";
import l13 from "../../assets/client/punjLyoyd-removebg-preview.png";
import l14 from "../../assets/client/totalEnvt-removebg-preview.png";

import l15 from "../../assets/client/centuryrealestate.png";
import l16 from "../../assets/client/chennaimetrorail.png";
import l17 from "../../assets/client/chief_minister_of_karrnataka_kn.png";
import l18 from "../../assets/client/delta.jpeg";
import l19 from "../../assets/client/iaf_logo.png";
import l20 from "../../assets/client/isro.png";
import l21 from "../../assets/client/jll.png";
import l22 from "../../assets/client/kimshospital.png";
import l23 from "../../assets/client/logo-Zauba.webp";
import l24 from "../../assets/client/merk.png";
import l25 from "../../assets/client/National_Highways_Authority_of_India_logo.svg.png";
import l26 from "../../assets/client/POWERMECHPROJECTSLTD.png";
import l27 from "../../assets/client/purvankar.png";
import l28 from "../../assets/client/ramaih.webp";
import l29 from "../../assets/client/serlogo.png";
import l30 from "../../assets/client/vajramconstruction.png";
import ClientHero from "./ClientHero/ClientHero";

const Clientele = () => {
  // Array of image URLs (replace with your actual image paths)
  const images = [
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

  return (
    <>
      <ClientHero />
      <div className="px-6 py-10 md:px-12 lg:px-24">
        <div className="flex items-center justify-center mb-12">
          <div className="flex-grow border-t w-[70px] border-black"></div>
          <h1 className="text-4xl md:text-2xl font-semibold text-center mx-4 text-amber-500">
            OUR MAJOR CLIENTS
          </h1>
          <div className="flex-grow border-t w-[70px] border-black"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-lg hover:shadow-xl transition-shadow rounded-none"
            >
              <img
                src={image}
                alt={`Client ${index + 1}`}
                className="w-full h-40 object-contain rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Clientele;
