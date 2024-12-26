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
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-light mb-4 text-amber-600">
              CONTACT INFORMATION
            </h2>
            <div className="w-full h-[2px] md:h-[1px] bg-gray-500 max-w-[500px] mx-auto"></div>
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
            {/* Contact Details Section */}
            <div className="flex-1 lg:w-1/2 mb-8 lg:mb-0">
              <div className="flex items-start mb-8">
                <FontAwesomeIcon
                  className="text-amber-400 text-3xl mr-4"
                  icon={faMapMarkerAlt}
                />
                <p className="text-gray-950">
                  #637, Muniyappa complex, Jalahalli Cross Circle, Peenya,
                  Bengaluru-560057.
                </p>
              </div>
              <div className="flex items-start mb-8">
                <FontAwesomeIcon
                  className="text-amber-400 text-3xl mr-4"
                  icon={faMobileAlt}
                />
                <p className="text-gray-950">
                  <a href="tel:+919845956633" className="hover:underline">
                    +91-98459 56633
                  </a>
                </p>
              </div>
              <div className="flex items-start mb-8">
                <FontAwesomeIcon
                  className="text-amber-400 text-3xl mr-4"
                  icon={faGlobeAsia}
                />
                <p className="text-gray-950">
                  <a
                    href="mailto:chethanaservices@gmail.com"
                    className="hover:underline"
                  >
                    chethanaservices@gmail.com
                  </a>
                </p>
              </div>

              {/* Google Map Section */}
              <div className="mt-8">
                <h3 className="text-xl font-medium text-gray-950 mb-4">
                  Find Us Here:
                </h3>
                <div className="w-full aspect-video">
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.842546729585!2d77.5153455748178!3d13.035636187051314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1797990373f7%3A0xa97fc4bc31411193!2s637%2C%20Muniyappa%20Complex%2C%20Jalahalli%20Cross%20Circle%2C%20Peenya%2C%20Bengaluru%2C%20Karnataka%20560057!5e0!3m2!1sen!2sin!4v1692619278184!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    className="w-full h-full rounded-md"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="flex-1 lg:w-1/2 mt-8 lg:mt-0">
              <h2 className="text-2xl md:text-4xl font-light text-center mb-5 text-amber-600">
                SEND US A MESSAGE
              </h2>
              <div className="w-full h-[2px] md:h-[1px] bg-gray-500 max-w-[500px] mx-auto my-4"></div>
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
                      className="border border-amber-600 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                      className="border border-amber-600 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                      className="border border-amber-600 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                      className="border border-amber-600 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                    className="border border-amber-600 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    rows="6"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="border border-amber-600 text-black py-2 px-4 w-full md:w-[270px] rounded-md hover:bg-amber-600 hover:text-white transition ease-in-out duration-300"
                  >
                    SEND NOW
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBody;
