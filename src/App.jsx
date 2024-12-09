import React, { Suspense } from "react";
import './index.css'
import SliderAnimation from './sliderAnimation';
const SpaceBackground = React.lazy(() => import('./Bganimation'));

const App = () => {
  return (
    <div  style={{ width: "100vw", height: "100vh", position: "relative",  }}>
      <div className="canvas-container">
        <Suspense fallback={<div>Loading...</div>}>
          <SpaceBackground />
        </Suspense>
      </div>
      
      {/* Space Background */}
          <div className="content-container">
            {/* Navbar */}
            <div className="w-full container mx-auto">
              <div className="w-full flex items-center justify-between">
                <div className="flex-1"></div>
                <div className="flex flex-1 justify-end content-center">
                  <a
                    className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                    href="https://twitter.com/intent/tweet?url=#"
                  >
                    <svg
                      className="fill-current h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                    >
                      <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path>
                    </svg>
                  </a>
                  <a
                    className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                    href="https://www.facebook.com/sharer/sharer.php?u=#"
                  >
                    <svg
                      className="fill-current h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                    >
                      <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Main Section */}
            <div className="container pt-20 md:pt-10 mx-auto flex flex-col items-center">
              {/* Left Column */}
              <div className="flex flex-col w-full xl:w-2/5 justify-center items-center">
              <div>
                <h1 className="text-center mb-10">
                <div className="relative bg-black rounded-full flex items-center justify-center text-gray-400 font-bold text-4xl lg:text-7xl  animate-border px-[200px] py-[60px] shadow-[inset_0_0_20px_rgba(255,255,255,0.3)]"
                  >
                    <div className="absolute bg-black/60 rounded-full pb-8 flex items-center justify-center px-[34px] py-[28px]">
                      stamper.ai
                    </div>
                  </div>
                </h1>
              </div>
                <h2 className="my-4 text-2xl md:text-4xl text-gray-300 opacity-75 font-bold leading-tight text-center">
                  GenAI{" "}
                  <span className="bg-clip-text text-transparent bg-gray-300">
                    Lab
                  </span>{" "}
                  to explore creative AI applications
                </h2>
                <div className="mt-3 h-[500px] leading-normal text-gray-400 text-base md:text-2xl mb-8 text-center">
                  {/* Try exploring the creative AI applications we are building */}
                </div>
              </div>
              <div className="text-center text-gray-300 font-bold md:text-8xl mb-8">
                Our Team
              </div>
              <div className="w-screen">
              <SliderAnimation />
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
                      className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                      type="button"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>

              {/* Right Column */}
              <div className="w-full xl:w-3/5 p-12 overflow-hidden">
              </div>

              <div className="mx-auto md:pt-16">
                
              </div>
            </div>

            {/* Footer */}
            <div className="w-full pt-16 pb-6 text-sm text-center fade-in">
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
