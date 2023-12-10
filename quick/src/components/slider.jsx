import React, { useEffect, useRef } from "react";
import "./slider.css";


export default function Slider() {
  const xImgRef = useRef(null);
  const mainImgRef = useRef(null);
  const blueLineRef = useRef(null);
  const coursesRef = useRef(null);
  const dotdotRef = useRef(null);
  const zigzagRef = useRef(null);
  const satisfiedRef =useRef(null);
  

  useEffect(() => {
    const handleMouseMove = (e) => {
      const layers = [
        { speed: 1, position: xImgRef },
        { speed: 0.5, position: mainImgRef },
        { speed: 1, position: blueLineRef },
        { speed: 0.75, position: coursesRef },
        { speed: 0.5, position: zigzagRef },
        { speed: 2, position: dotdotRef },
        { speed: 4, position: satisfiedRef },
        // Diğer resimler için aynı şekilde ekleyebilirsiniz.
      ];

      layers.forEach(({ speed, position }) => {
        // Ref'in mevcut durumu null ise işlem yapma
        if (position.current) {
          const x = (window.innerWidth - e.pageX * speed) / 100;
          const y = (window.innerHeight - e.pageY * speed) / 100;

          position.current.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-gray mt-24 grid grid-cols-2 z-10">
      <div className="pt-8 pr-8 pb-8 pl-8 sm:p-16 col-span-1">
        <div className="flex-col lg:flex-row flex">
          <div className="lg:mb-0 lg:w-1/2 lg:pr-5 mb-6">
            <div>
              <p className="text-xl tracking-tight leading-6 sm:text-4xl block text-gray-900 font-sans">
                100% QUALITY COURSES
              </p>
              <p className="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none inline text-gray-900 font-sans">
                Find Your Perfect Courses And Improve Your
              </p>
              <p
                className="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none inline text-blue-700
                  font-sans"
              >
                Skills
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 relative">
        <img
          className="satisfied-img absolute top-10 z-10"
          ref={satisfiedRef}
          src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/hero-shape-10.png"
          alt=""
        />
        <img
          className="x-img parallax-layer relative left-56 top-56 -z-1"
          ref={xImgRef}
          src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/hero-shape-14.svg"
          alt=""
        />
        <img
          className="main-img relative z-10  "
         
          src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/hero-img-2.png"
          alt="deneme"
        />
        <img
          className="blue-line absolute  bottom-0 -z-1"
          
          src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/hero-shape-8.svg"
          alt=""
        />
        <img
          className="25-courses absolute left-96 bottom-24 z-10"
          ref={coursesRef}
          src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/hero-shape-12.png"
          alt=""
        />
        <img
          className="big-line absolute left-40 bottom-80  "
          ref={zigzagRef}
          src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/hero-shape-13.svg"
          alt=""
        />
        <img
          className="dotdot-img absolute left-12 top-96  "
          ref={dotdotRef}
          src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/about-shape-2.svg"
          alt=""
        />
        <img
          className="blue-zigzag-line absolute right-40 top-10 "
          ref={zigzagRef}
          src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/hero-shape-11.svg"
          alt=""
        />
      </div>
    </div>
  );
}
