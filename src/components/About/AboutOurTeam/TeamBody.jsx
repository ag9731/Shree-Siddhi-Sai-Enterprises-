import React from 'react';
import "./TeamBody.css";
import teamMain from "../../../assets/teamBg.jpg";
import teamMain2 from "../../../assets/teamBg2.jpg";

const TeamBody = () => {
    return (
        <div>
            <div className="flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 mb-6 sm:mb-8 md:mb-12 md:my-20">
                <div className="flex-grow border-t border-black"></div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mx-2 sm:mx-4
         text-amber-500 whitespace-nowrap">
                    OUR TEAM
                </h1>
                <div className="flex-grow border-t border-black"></div>
            </div>

            <div className='teamBg flex justify-center   h-[700px] '>
                <div className="bg-black bg-opacity-50 p-6 h-[400px] md:h-auto absolute top-[1px]
        md:absolute md:top-36
         sm:p-10 md:p-12 w-full
          md:w-[1200px]  xl:w-[1200px]  md:border-[1px] md:border-amber-500">
                    <div className="flex flex-col sm:flex-row items-start ">
                        <img
                            src={teamMain}
                            alt="Sri. M H Krishna Murthy"
                            className="w-24 h-32 md:h-[140px] 
                            border-[2px] border-amber-500
                            md:w-[170px] rounded-none mr-0 sm:mr-4 mb-4 sm:mb-0"
                        />
                        <p className="text-justify text-white font-light leading-relaxed">
                            <span className='text-xl text-amber-500 font-semibold'> Sri. M H Krishna Murthy </span>, proprietor of Shree Chethan Services, has a vast experience and
                            knowledge in the field of Demolition and civil Industry. He is a passionate and dedicated businessman,
                            being in the field for about more than 30+ years. With his vast knowledge and technical experience,
                            he has gained excellent recognition in the demolition industry.
                            <br />
                            He is a strategic, technical, and
                            coherent solution for any type of challenging works like building collapse in Bangalore for the last 15 years.
                            He has handled major challenging and big projects like Namma Metro station construction, Bangalore,
                            NH-4 National Highway road widening works, Bangalore International Airport road widening and
                            excavation works.
                            <br />

                        </p>
                    </div>
                    <p className="text-justify text-white font-light leading-relaxed">

                        He also oversees rentals of machinery and vehicles.
                        He has a vast experience and knowledge in the demolition and excavation field.
                        He has handled and successfully completed dismantling works for great IT companies like ABB, Intel,
                        IBM (Chennai), Qualcomm, etc. to name a few. Under his guidance...
                    </p>
                    <br />
                    <div className="flex flex-col sm:flex-row items-start gap-x-4">

                        <p className="text-justify text-white font-light leading-relaxed">
                            <span className='text-xl text-amber-500 font-semibold'>Chethan K Jodidhar, </span>Project Manager at SCS has
                            been in the field for more than 10 years. He heads
                            the supervisors, manages and monitors both
                            manpower as well as machineries required at
                            work site. He is pioneen handling the dismantling
                            works, demolition works. He oversees and manages the quotation for projects, preparation of
                            BOQ, tenders etc. under the guidance of Sri M H
                            Krishna Murthy.
                            He also oversees rentals of machineries and vehicles.
                            He has a vast experience and knowledge in the demolition and excavation field.
                        </p>
                        <br />


                        <img
                            src={teamMain2}
                            alt="Sri. M H Krishna Murthy"
                            className="w-60 h-48 md:h-[140px] 
                            border-[2px] border-amber-500 md:w-[170px] rounded-none mr-0 sm:mr-4 mb-4 sm:mb-0"
                        />
                    </div>



                </div>

            </div>
        </div>
    );
}

export default TeamBody;
