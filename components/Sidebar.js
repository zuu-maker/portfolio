import React from "react";

function Sidebar({ activeLink, showSidebar }) {
  return (
    <div
      className={`z-5 xl:flex flex-col left-0 overflow-y-auto fixed text-right top-0 w-[340px] justify-between text-[#fff] h-screen bg-[#222629] dark:bg-gray-800  shadow-lg transform transition-transform duration-300 ease-in-out ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      } `}
    >
      <div className="flex-grow relative">
        <div className="relative cursor-default m-h-[45px] mt-7 leading-none mb-6 mx-6">
          <span className="absolute top-0 left-0 w-12 h-12 ">
            <img className="w-12 h-12" src="/portfolio/favison.png" alt="" />
          </span>
          <h1 className="relative font-bold text-xl text-white" id="title">
            Mkhuzo
          </h1>
          <p className="relative block text-sm text-[#ffffff80] leading-tight mt-2">
            Software Engineer
          </p>
        </div>

        <nav className="pl-0 mb-0" id="nav">
          <ul>
            <li>
              <a
                onClick={() => handleClick("home")}
                className={`flex justify-between items-center px-6 py-5 ${
                  activeLink === "home" && "bg-[#00000026]"
                }`}
                href="#home"
                id="home-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-5 h-5 ${
                    activeLink === "home" ? "text-cyan-300" : "text-[#ffffff80]"
                  }`}
                >
                  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>

                <span
                  className={`text-sm 
                ${activeLink === "home" ? "text-[#fff]" : "text-[#ffffff80]"}
                `}
                >
                  Home
                </span>
              </a>
            </li>

            <li>
              <a
                onClick={() => handleClick("services")}
                className={`flex justify-between items-center px-6 py-5 ${
                  activeLink === "services" && "bg-[#00000026]"
                }`}
                href="#services"
                id="serives-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-5 h-5 ${
                    activeLink === "services"
                      ? "text-cyan-300"
                      : "text-[#ffffff80]"
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span
                  className={`text-sm 
                ${
                  activeLink === "services" ? "text-[#fff]" : "text-[#ffffff80]"
                }
                `}
                >
                  Services
                </span>
              </a>
            </li>

            <li>
              <a
                onClick={() => handleClick("portfolio")}
                className={`flex justify-between items-center px-6 py-5 ${
                  activeLink === "portfolio" && "bg-[#00000026]"
                }`}
                href="#portfolio"
                id="portfolio-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-5 h-5 ${
                    activeLink === "portfolio"
                      ? "text-cyan-300"
                      : "text-[#ffffff80]"
                  }`}
                >
                  <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                </svg>

                <span
                  className={`text-sm 
                ${
                  activeLink === "portfolio"
                    ? "text-[#fff]"
                    : "text-[#ffffff80]"
                }
                `}
                >
                  Portfolio
                </span>
              </a>
            </li>

            <li>
              <a
                onClick={() => handleClick("contact")}
                className={`flex justify-between items-center px-6 py-5 ${
                  activeLink === "contact" && "bg-[#00000026]"
                }`}
                href="#contact"
                id="contact-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-5 h-5 ${
                    activeLink === "contact"
                      ? "text-cyan-300"
                      : "text-[#ffffff80]"
                  }`}
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>

                <span
                  className={`text-sm 
                ${activeLink === "contact" ? "text-[#fff]" : "text-[#ffffff80]"}
                `}
                >
                  Contact Me
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
