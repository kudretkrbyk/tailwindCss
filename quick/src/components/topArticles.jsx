import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdPerson } from "react-icons/md";


export default function TopArticles() {
  return (
    <Router>
      <div>
        <div className="grid grid-rows-2  ">
          <div className="   ">
            <p className="mt-8 flex justify-center items-center  ">
              TOP ARTICLES
            </p>
            <h1 className="mt-8 flex justify-center items-center  ">
              Want To Learn More? Read Blog
            </h1>
            <p className="mt-8  flex justify-center items-center ">
              When An Unknown Printer Took A Galley Of Type And Scrambled It To
              Make A Type Specimen
            </p>
            <p className="  flex justify-center items-cente ">
              Book It Has Survived Not Only Five Centuries
            </p>
          </div>
          <div className="grid grid-cols-4  -mt-10">
            <div className="w-80  ml-6  mr-6 ">
              <Link to="/ornek">
                <img
                  src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/blog_03-380x277.jpg"
                  alt="2"
                ></img>
              </Link>
              <div>
                <button className="bg-gray text-purple ml-5 mt-5 rounded h-8 w-24  hover:bg-purple hover:text-white">
                  deneme
                </button>
              </div>
              <h3 className="font-bold text-purple   ">
                Take Your Career Next Leveley Future Approch
              </h3>
              <ul className="flex items-center">
                <li  className = " flex items-center text-gray ">
                  <i >
                    <FaRegCalendarAlt className=" text-purple"/>
                  
                  </i>
                  Kasım 2023
                  
                </li>
                <li className = "ml-10  flex items-center">
                <i className = " " >
                <MdPerson /> 
                </i>
                <p className = "text-gray">BY </p>
                <Link to = "#"> Admin</Link>
                
              </li>
              </ul>
            </div>

            <div className="w-80   mr-6 ">
              <Link to="/ornek">
                <img
                  src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/blog_04-380x277.jpg"
                  alt="2"
                ></img>
              </Link>
              <div>
              <button className="bg-gray text-purple ml-5 mt-5 rounded h-8 w-24  hover:bg-purple hover:text-white">
                deneme
              </button>
            </div>
            <h3 className="font-bold text-purple   ">
              Take Your Career Next Leveley Future Approch
            </h3>
            <ul className="flex items-center">
              <li  className = " flex items-center text-gray ">
                <i >
                  <FaRegCalendarAlt className=" text-purple"/>
                
                </i>
                Kasım 2023
                
              </li>
              <li className = "ml-10  flex items-center">
              <i className = " " >
              <MdPerson /> 
              </i>
              <p className = "text-gray">BY </p>
              <Link to = "#"> Admin</Link>
              
            </li>
            </ul>
            </div>
            <div className="w-80   mr-6 ">
              <Link to="/ornek">
                <img
                  src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/blog_06-380x277.jpg"
                  alt="2"
                ></img>
              </Link>
              <div>
              <button className="bg-gray text-purple ml-5 mt-5 rounded h-8 w-24  hover:bg-purple hover:text-white">
                deneme
              </button>
            </div>
            <h3 className="font-bold text-purple   ">
              Take Your Career Next Leveley Future Approch
            </h3>
            <ul className="flex items-center">
              <li  className = " flex items-center text-gray ">
                <i >
                  <FaRegCalendarAlt className=" text-purple"/>
                
                </i>
                Kasım 2023
                
              </li>
              <li className = "ml-10  flex items-center">
              <i className = " " >
              <MdPerson /> 
              </i>
              <p className = "text-gray">BY </p>
              <Link to = "#"> Admin</Link>
              
            </li>
            </ul>
            </div>
            <div className="w-80   mr-6 ">
              <Link to="/ornek">
                <img
                  src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/event_04-380x277.jpg"
                  alt="2"
                ></img>
              </Link>
              <div>
              <button className="bg-gray text-purple ml-5 mt-5 rounded h-8 w-24 hover:bg-purple hover:text-white">
                deneme
              </button>
            </div>
            <h3 className="font-bold text-purple   ">
              Take Your Career Next Leveley Future Approch
            </h3>
            <ul className="flex items-center">
              <li  className = " flex items-center text-gray ">
                <i >
                  <FaRegCalendarAlt className=" text-purple"/>
                
                </i>
                Kasım 2023
                
              </li>
              <li className = "ml-10  flex items-center">
              <i className = " " >
              <MdPerson /> 
              </i>
              <p className = "text-gray">BY </p>
              <Link to = "#"> Admin</Link>
              
            </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
