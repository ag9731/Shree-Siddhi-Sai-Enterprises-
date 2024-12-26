import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAsia,
  faMapMarkerAlt,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

const ContactBody = () => {
  return (
    <section className="p-4 sm:p-6 md:p-10">
      <div className="container mx-auto">
        <div className="pb-8 md:pb-16">
          <div className="text-left mb-8">
            <h2 className="text-2xl md:text-4xl font-light mb-4 text-amber-600">
              CONTACT INFORMATION
            </h2>
            <div className="w-full h-[2px] md:h-[1px] bg-gray-500 max-w-[500px]"></div>
            <p className="text-gray-950 mt-4">
              Partner with Chethan for reliable, safe, and high-quality service
              delivery across India.
            </p>
            <p className="text-gray-950">
              Contact us today to discuss your demolition, excavation, or site
              preparation needs.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="flex-1 lg:w-1/2 mb-8 lg:mb-0">
              <div className="flex items-start mb-8">
                <div className="text-3xl text-gray-950 mr-4">
                  <FontAwesomeIcon
                    className="text-amber-400"
                    icon={faMapMarkerAlt}
                  />
                </div>
                <div>
                  <p className="text-gray-950">
                    #637, Muniyappa complex, jalahalli cross circle, peenya,
                    bengaluru- 560057.
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-8">
                <div className="text-3xl text-gray-950 mr-4">
                  <FontAwesomeIcon
                    className="text-amber-400"
                    icon={faMobileAlt}
                  />
                </div>
                <div>
                  <p className="text-gray-950">
                    <a href="tel:+919845956633" className="hover:underline">
                      +91-98459 56633
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-3xl text-gray-950 mr-4">
                  <FontAwesomeIcon
                    className="text-amber-400"
                    icon={faGlobeAsia}
                  />
                </div>
                <div>
                  <p className="text-gray-950">
                    <a
                      href="mailto:chethanaservices@gmail.com"
                      className="hover:underline"
                    >
                      chethanaservices@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 lg:w-1/2 mt-8 lg:mt-0">
              <h2 className="text-2xl md:text-4xl font-light text-center mb-5 text-amber-600">
                SEND US A MESSAGE
              </h2>
              <div className="w-full h-[2px] md:h-[1px] bg-gray-500 max-w-[500px] mx-auto my-4"></div>
              <div className="max-w-xl mx-auto">
                <form
                  id="contact-form"
                  action="https://whizthemes.com/nazmul/php/mail.php"
                  method="post"
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label className="mb-2 font-normal text-gray-950">
                        YOUR NAME*
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="border border-amber-600 p-2 w-full h-[50px] md:h-[70px]"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-2 font-normal text-gray-950">
                        YOUR EMAIL*
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="border border-amber-600 p-2 w-full h-[50px] md:h-[70px]"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-2 font-normal text-gray-950">
                        SUBJECT*
                      </label>
                      <input
                        type="text"
                        name="subject"
                        className="border border-amber-600 p-2 w-full h-[50px] md:h-[70px]"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-2 font-normal text-gray-950">
                        PHONE*
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="border border-amber-600 p-2 w-full h-[50px] md:h-[70px]"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 font-normal text-gray-950">
                      MESSAGE*
                    </label>
                    <textarea
                      name="message"
                      className="border border-amber-600 p-2 w-full h-[170px]"
                      rows="6"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="border border-amber-600 text-black py-2 px-4 w-full md:w-[270px] h-[50px] md:h-[70px] hover:bg-amber-600 hover:text-white transition ease-in-out duration-300"
                    >
                      SEND NOW
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBody;
