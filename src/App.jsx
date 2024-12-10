import React, { Suspense } from "react";
import './index.css'
import SphereWithZones from './sphere';
import stamperbanner from './stamperbanner.png'
import stamperlogo from './logo.png'
import TeamCarousel from './sliderAnimation';

const App = () => {
  return (
    <div  style={{ width: "100vw", height: "100vh", position: "relative",  }}>
      <div className="canvas-container">
        <Suspense fallback={<div>Loading...</div>}>
        </Suspense>
      </div>
      
      {/* Space Background */}
          <div className="content-container">
            {/* Navbar */}
            <div className="w-full container mx-auto">
              <div className="w-full flex items-center ">
                <div className="flex-1"></div>
                <div className="flex flex-1 justify-end content-center pr-4">
                  <a
                    className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                    href="https://www.linkedin.com/company/stamperai/"
                  >
                    <svg
                      className="fill-current h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Main Section */}
            <div className="container pt-20 md:pt-10 mx-auto flex flex-col items-center">
              {/* Left Column */}
              <div className="flex flex-col w-full xl:w-2/5 justify-center items-center">
              <div className="flex justify-center">
                <h1 className="text-center mb-10 ">
                <div className="relative bg-black rounded-full flex items-center justify-center text-gray-400 font-bold text-4xl lg:text-7xl  animate-border px-[200px] py-[60px] shadow-[inset_0_0_20px_rgba(255,255,255,0.3)]"
                  >
                    <div style={{backgroundImage: `url(${stamperbanner})`, backgroundSize: 'cover',width: '100%', height: '100%', backgroundPosition: 'center'}} className="absolute bg-black/60 rounded-full pb-8 flex items-center justify-center px-[34px] py-[28px]">
                      
                    </div>
                  </div>
                </h1>
              </div>
                <h2 className="my-4 text-2xl md:text-4xl text-gray-300 opacity-75 font-bold leading-tight text-center">
                  GenAI{" "}
                  <span className="bg-clip-text text-transparent bg-gray-300">
                    Lab
                  </span>{" "}
                  for creativity
                </h2>
                <div className="mt-3 h-[500px] leading-normal text-gray-400 text-base md:text-2xl mb-8 text-center">
                  {/* Try exploring the creative AI applications we are building */}
                  <SphereWithZones />
                </div>
              </div>
              <div className="text-center text-gray-300 font-bold md:text-8xl mb-8">
                Our Team
              </div>
              <div className="w-screen">
                <TeamCarousel />
              </div>
              <form className="bg-gray-900 w-[65%] opacity-75 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label
                      className="block text-blue-300 py-2 font-bold mb-2"
                      htmlFor="emailaddress"
                    >
                      Signup for our newsletter
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                      id="emailaddress"
                      type="text"
                      placeholder="you@somewhere.com"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <button
                      className=" bg-black text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                      type="button"
                    >
                      <div className="animate-border-2">
                        Sign Up
                      </div>
                    </button>
                  </div>
                </form>

              {/* Right Column */}
              <div className="w-full xl:w-3/5 p-12 overflow-hidden">
              </div>

              <div className="mx-auto md:pt-16">
                
              </div>
            </div>
            <div className="flex justify-left ml-10 mb-10">
              <img src={stamperlogo} alt="Stamper Logo" className="w-1/6" />
            </div>

            {/* Footer */}
            <div className="w-full pb-6 text-sm text-center fade-in">
              <a
                className="text-gray-500 no-underline hover:no-underline"
                href="#"
              >
                &copy; App 2020
              </a>{" "}
              - Template by{" "}
              <a
                className="text-gray-500 no-underline hover:no-underline"
                href="https://www.tailwindtoolbox.com"
              >
                TailwindToolbox.com
              </a>
            </div>
          </div>
        </div>
  );
};

export default App;
