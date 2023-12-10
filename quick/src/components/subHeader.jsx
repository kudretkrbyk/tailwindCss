import React from "react";
import { PiCaretDownLight } from "react-icons/pi";

export default function SubHeader() {
  return (
    <div>
      <div className="header-menu header-top relative block top-0 right-0 left-0 m-auto">
        <div className="container block">
          <div className="menu-full-wrap h-14 w-96 flex justify-between	 items-center">
            <div className="site-branding">
              <a
                className="dark-logo"
                href="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/"
              >
                <img
                  width="191"
                  height="52"
                  src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/logo-dark.svg"
                  className="attachment-full size-full"
                  alt=""
                />
              </a>
              <a
                className="light-logo"
                href="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/"
              >
                <img
                  src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/logo-light.svg"
                  className="attachment-full size-full"
                  alt=""
                />
              </a>
            </div>

            <div className="rt-course-search grow block">
              <form
                className="form-inline block rounded-2xl"
                role="search"
                method="get"
                action="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/courses/"
              >
                <div className="form-group block">
                  <div className="input-group relative flex flex-wrap">
                    <div className="input-group-addon rt-dropdown block">
                      <button className="rt-btn cat-toggle">
                        <span className="rt-cat text-center block ">
                          All Categories
                        </span>
                        <i className="down-arrow icon-quiklearn-angle-down"></i>
                      </button>
                      <ul
                        className="dropdown-menu rt-drop-menu"
                        aria-labelledby="dropdownCourseButton1"
                      >
                        <li>
                          <a href="#" data-cat="0">
                            All
                          </a>
                        </li>
                        <li>
                          <a href="#" data-cat="art-design">
                            Art &amp; Design
                          </a>
                        </li>
                        <li>
                          <a href="#" data-cat="business">
                            Business
                          </a>
                        </li>
                        <li>
                          <a href="#" data-cat="data-science">
                            Data Science
                          </a>
                        </li>
                        <li>
                          <a href="#" data-cat="development">
                            Development
                          </a>
                        </li>
                        <li>
                          <a href="#" data-cat="finance">
                            Finance
                          </a>
                        </li>
                        <li>
                          <a href="#" data-cat="health-fitness">
                            Health &amp; Fitness
                          </a>
                        </li>
                        <li>
                          <a href="#" data-cat="technology">
                            Technology
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="input-group-addon rt-input-wrap grow">
                      <input  name="course_category" value="" />
                      <input  name="ref" value="course" />
                      <input
                       
                        className="form-control rt-search-text  block h-12 w-96"
                        placeholder="Find Your Courses . . ."
                        
                      />
                    </div>
                    <div className="input-group-addon input-group-append">
                      <button  className="search-btn">
                        <i className="icon-quiklearn-search"></i>Search
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="header-icon-area">
              <div className="header-login-wrap">
                <div className="header-login">
                  <a
                    target="_self"
                    href="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/my-account/"
                  >
                    Login
                  </a>
                  <a
                    className="active"
                    target="_self"
                    href="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/my-account/"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
