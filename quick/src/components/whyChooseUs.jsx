import React from "react";
import { TiTick } from "react-icons/ti";

export default function whyChooseUs() {
  return (
    <div className = "whyChooseUs" >
      {" "}
      <div className="bg-purple grid grid-cols-2 h-auoto ">
        <div className=" mt-20  grid grid-rows-3 ml-8 ">
          <div>
            <p>WHY CHOOSE US </p>
            <h1 className="text-2xl font-bold  mt-5">
              Don’t Know How To Start With Quiklearn Courses
            </h1>
            <p className="mt-5  justify-center">
              When An Unknown Printer Took A Galley Offer Area Type And
              Scrambled To Make A Type Specimen Book .
            </p>
            <div className="grid grid-cols-2  mt-5">
              <div>
                <div>
                  <div className=" flex items-center ">
                    <TiTick id="icon" className="flex-none" />
                    <p className="text-xl flex-grow">dff</p>
                  </div>
                </div>
                <div>
                  <div className=" flex items-center ">
                    <TiTick id="icon" className="flex-none" />
                    <p className="text-xl flex-grow">dff</p>
                  </div>
                </div>
                <div>
                  <div className=" flex items-center ">
                    <TiTick id="icon" className="flex-none" />
                    <p className=" text-xl flex-grow">dff</p>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <div className=" flex items-center ">
                    <TiTick id="icon" className="flex-none" />
                    <p className=" text-xl flex-grow">dff</p>
                  </div>
                </div>
                <div>
                  <div className=" flex items-center ">
                    <TiTick id="icon" className="flex-none" />
                    <p className=" text-xl flex-grow">dff</p>
                  </div>
                </div>
                <div>
                  <div className=" flex items-center ">
                    <TiTick id="icon" className="flex-none" />
                    <p className=" text-xl flex-grow">dff</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="bg-white text-black font-bold py-2 px-4 rounded-2xl  ">
                explore all Courses
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 ">
          <div className=" mt-80 relative ">
            <img
              className="relative z-10  rounded-full	"
              src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/why-choose-us-img-2.png"
              alt="1"
            ></img>
          </div>
          <div className="mt-10 ml-40 absolute ">
            <img
              className="rounded-full	"
              src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/why-choose-us-img-1.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
