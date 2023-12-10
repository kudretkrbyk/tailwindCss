import React from "react";
import { CiShare2 } from "react-icons/ci";
import { useState } from "react";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Instructors() {
  const [showSocialIcons, setShowSocialIcons] = useState(false);

  const handleShareIconHover = () => {
    setShowSocialIcons(true);
  };

  const handleShareIconLeave = () => {
    setTimeout(() => {
      setShowSocialIcons(false);
    }, 200); // 200 milisaniye gecikme ekleyerek, diğer ikona hızlı geçişlerde kapanmayı engelliyoruz
  };
  const handleSocialIconHover = () => {
    setShowSocialIcons(true);
  };

  const handleSocialIconLeave = () => {
    setShowSocialIcons(false);
  };
  return (
    <>
      <div className="grid grid-rows-2  ">
        <div className="flex justify-center "></div>
        <p className="text-center   ">OUR INSTRUCTORS</p>
        <div className=" mt-5  ">
          <h1 className="text-center text-2xl font-bold   ">
            From The Quiklearn Community
          </h1>
        </div>
        <div className=" mt-5  ">
          {" "}
          <p className="text-center">
            When An Unknown Printer Took A Galley Of Type And Scrambled It To
            Make A Type Specimen Book It Has Survived Not Only Five Centuries
          </p>
        </div>

        <div className="grid-cols-1 sm:grid md:grid-cols-4">
          <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
            
              <img
                className="rounded-t-lg"
                src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads//learn-press-profile/9/a87cce35aa3a4cb374ad14c92334a35e.jpeg"
                alt="Hollywood Sign on The Hill"
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card title
              </h5>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              {" "}
              <div onMouseLeave={handleShareIconLeave}>
                <CiShare2
                  onMouseEnter={handleShareIconHover}
                  
                  id="icon-Instructors"
                  className=" bg-white hover:bg-purple absolute ml-60 mt-5 rounded-full "
                />{" "}
                {showSocialIcons && ( 
                  <div className="absolute flex flex-col items-center mt-5 ml-60">
                    <FaTwitter
                      id="icon-Instructors"
                      className="text-blue-500 mb-2 mt-12 "
                    />
                    <FaInstagram
                      id="icon-Instructors"
                      className="text-pink-500 mb-2"
                    />
                    <FaFacebook
                      id="icon-Instructors"
                      className="text-indigo-500 mb-2"
                    />
                  </div>
                )}
              </div>
              <img
                className="rounded-t-lg"
                src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads//learn-press-profile/10/418cbee72cafbbf58290b71f9e359260.jpeg"
                alt="Palm Springs Road"
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card title
              </h5>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads//learn-press-profile/8/8d69d3fc4b9ecc16660fc9e32192e9e1.jpeg"
                alt="Skyscrapers"
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card title
              </h5>
            </div>
          </div>

          <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads//learn-press-profile/7/84ce06432355d2548c4c2d534bb8873e.jpeg"
                alt="Los Angeles Skyscrapers"
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card title
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
