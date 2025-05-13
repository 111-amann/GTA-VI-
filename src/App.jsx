import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -1,
      ease: "Expo.easeInOut",
    });
    gsap.to(".sky", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });
    gsap.to(".character", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden w-full h-screen bg-black relative">
            <div className="navbar absolute md:p-4 p-2 top-0 left-0 z-10 w-full">
              <div className="logo flex sm:gap-4 gap-3 items-center">
                <div className="lines flex flex-col sm:gap-[4px] gap-[3px]">
                  <div className="line w-8 h-[3px] bg-white"></div>
                  <div className="line w-5 h-[3px] bg-white"></div>
                  <div className="line w-3 h-[3px] bg-white"></div>
                </div>
                <h3 className="md:text-lg text-md leading-none text-white sm:-mt-[8px] -mt-[5px]">
                  Rockstar
                </h3>
              </div>
            </div>
            <div className="imagesdiv overflow-hidden w-full h-screen relative">
              <img
                className="w-full sky scale-[1.5] rotate-[-20deg] h-full object-cover absolute top-0 left-0"
                src="./sky.png"
                alt="skyimg"
              />
              <img
                className="w-full h-full scale-[1.8] rotate-[-3deg] bg object-cover absolute top-0 left-0"
                src="./bg.png"
                alt="bgimage"
              />
              <div className="text text-white absolute flex flex-col gap-1 md:top-5 sm:top-10 top-43 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="sm:text-7xl text-6xl leading-none md:-ml-14 sm:-ml-12 -ml-5">
                  grand
                </h1>
                <h1 className="sm:text-7xl text-6xl leading-none md:ml-20 sm:ml-20 ml-20">
                  theft
                </h1>
                <h1 className="sm:text-7xl text-6xl leading-none md:-ml-14 sm:-ml-12 -ml-5">
                  auto
                </h1>
              </div>
              <img
                className="absolute character sm:-bottom-[53%] -bottom-[15%] left-1/2 -translate-x-1/2 w-lg scale-[2.5] rotate-[-20deg]"
                src="./girlbg.png"
                alt="bgimage"
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 md:p-5 sm:p-3 p-2 w-full bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-2 items-center">
                <a href="#down">
                  <i className="ri-arrow-down-line md:text-xl sm:text-lg text-md"></i>
                </a>
                <h3 className="font-[Helvetica] md:text-xs sm:text-xs/2 text-xs/3">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute top-1/2 left-1/2 -translate-1/2 sm:h-[30px] h-[20px]"
                src="./ps5.png"
                alt="ps5png"
              />
            </div>
          </div>
          <div
            id="down"
            className="w-full h-screen bg-black flex px-8 items-center justify-center"
          >
            <div className="cntnr sm:flex text-white w-full sm:h-[80%] h-full">
              <div className="limg sm:w-1/2 relative sm:h-full h-[40%]">
                <img
                  className="absolute sm:top-1/2 sm:left-1/2 top-40 left-1/2 -translate-1/2 sm:w-[70%] w-[90%]"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg sm:w-[37%] w-[100%] sm:py-10 pt-10 text-center">
                <h1 className="text-4xl">Still Running</h1>
                <h1 className="text-4xl">Not Hunting</h1>
                <p className="mt-6 font-[Helvetica] sm:text-[10px] text-[9px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deleniti repellat officia, laborum similique laudantium earum
                  distinctio aspernatur iusto facere. Non, expedita placeat.
                </p>
                <p className="mt-2 font-[Helvetica] sm:text-[10px] text-[9px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  perspiciatis nam fugit maiores voluptatibus ex quo. Alias
                  voluptas totam officiis blanditiis! Labore nam consequatur
                  accusantium ab iusto amet, eligendi accusamus.
                </p>
                <p className="mt-3 font-[Helvetica] sm:text-[10px] text-[9px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  perspiciatis nam fugit maiores voluptatibus ex quo. Alias
                  voluptas totam officiis blanditiis! Labore nam consequatur
                  accusantium ab iusto amet, eligendi accusamus.
                </p>
                <button className="mt-6 bg-yellow-500 p-4 text-xl text-black cursor-pointer hover:bg-yellow-400">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
