import React from "react";

export default function StartLearnig() {
  return (
    <div className = "   " >
      <div className="bg-purple grid grid-cols-3   ">
        <div className = "mt-10 ml-10 w-72 relative ">
          <img className = "relative w-40 h-64 z-10 ml-11"
            src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/call-action-img1.png"
            alt="2"
          ></img>
          <span  className = "absolute -left-12 top-20 z-[0] ">
          <img src = "https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/call-shape1.svg" alt="2"></img> </span>
        </div>
        <div>
          <h1 className = "text-xl font-bold mt-40 ">Affordable Online Courses & Learning Opportunities For You</h1>
        </div>
        <div className = "mt-48  ml-48 ">
        <button className = "bg-white text-purple rounded-3xl h-10 w-40 hover:bg-purple-900 hover:text-white">Start Learning Today</button>
        </div>
      </div>
    </div>
  );
}
