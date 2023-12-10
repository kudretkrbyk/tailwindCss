import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaUserGraduate } from "react-icons/fa";

export default function Experiences() {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-1 gap-5 bg-gray-400">
        <div className="grid grid-cols-2 grid-rows-1 gap-5 bg-gray-400">
          <div className="row-span-5 ">
            <div className="grid grid-cols-2 grid-rows-1 gap-5  "></div>
            <div className=" ml-10 mt-10  h-32 w-56 bg-yellow flex items-center justify-center rounded-xl">
              <h1 className=" ml-10 text-xl  tracking-tight  sm:text-xl inline-flex  text-gray-900 font-sans ">
                12 Years Of Experiences
              </h1>
            </div>
            <div className="mt-10">
              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/goal-img-1.png"
                alt="deneme"
              ></img>
            </div>
          </div>
          <div className="row-span-5 mt-5">
            <div>
              {" "}
              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/goal-img-2.png"
                alt="deneme"
              ></img>
            </div>
            <div className=" h-36 w-64 relative drop-shadow-sm"></div>
            <h3>
              {" "}
              <span
                className="text-2xl bold  "
                data-num="35"
                data-rtspeed="5000"
                data-rtsteps="10"
              >
                35
              </span>
              <span class="counter-unit">K+</span>
            </h3>
            <h4 class="block   ">Positive Reviews</h4>
          </div>
        </div>

        <div className="grid grid-cols-1 grid-rows-2 gap-5">
          <div>
            <p>WHAT’S OUR MAIN GOAL</p>
            <h1 className="text-3xl font-bold  mt-4">
              Take The Next Step Toward Your Personal And Professional Goals
              With Quiklearn
              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/themes/quiklearn/assets/element/underline.svg"
                alt=""
              ></img>
            </h1>
            <p className=" mt-4 ">
              When An Unknown Printer Took A Galley Offer Area Type And
              Scrambled To Make A Type Specimen Book Has Survived When An
              Unknown Printer Took A Galley Offer Area Type And Scrambled To
              Make.
            </p>
          </div>
          <div className="flex items-center">
            <div className="flex items-center mr-8">
              <div className="mr-4">
                <FaUserGraduate className="text-6xl text-purple" />
              </div>
              <div>
                <h3 className="rt-title">Learn From Experts</h3>
                <div className="rt-text">
                  Motype Specimen Book Has Survived When <br />
                  An Unknown Printer Took
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-4">
                <FaUserGraduate className="text-6xl text-purple" />
              </div>
              <div>
                <h3 className="rt-title">Learn From Experts</h3>
                <div className="rt-text">
                  Motype Specimen Book Has Survived When <br />
                  An Unknown Printer Took
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
