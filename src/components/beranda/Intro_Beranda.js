"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css"
import { aosDuration, getDelay } from "../allPage/configs/aosConfig"

export default function Intro_Beranda() {
  useEffect(() => {
    Aos.init();
  }, []);

    return (
        <div className="w-full lg:h-full h-[125vw] flex flex-row justify-center items-center bg-white">
        <div className="relative w-full h-[125vw] lg:h-[60.885vw] flex flex-col justify-center items-center">
          <img src="/img/home/Rectangle.png" className="z-[0] absolute object-cover h-[125vw] lg:h-[60.885vw] w-screen"  alt="" />
          <div className="bg-black w-full absolute h-[125vw] lg:h-[60.885vw] opacity-70"></div>
          <div className="my-[2vw] z-[9] flex flex-col justify-center items-center">
            <h1 className="z-[9] text-[6.111vw] font-redditsanssemibold text-white mb-[2vw] self-start lg:hidden" 
                            data-aos="fade-up"
                            data-aos-duration={aosDuration}
                            data-aos-delay={getDelay({turn: 1})}>Get To Know Us More</h1>
            <div className="z-[9]">
              <iframe className="z-[9999] w-[85.278vw] lg:w-[50.729vw] lg:h-[28.542vw] h-[48.056vw]" src="https://www.youtube.com/embed/PGAydha01RI?si=8uSzuCJU27CGtcdX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen data-aos="fade-up"
                            data-aos-duration={aosDuration}
                            data-aos-delay={getDelay({turn: 2})}></iframe>
            </div>
            <div className="flex flex-col justify-center items-center" data-aos="fade-up"
                            data-aos-duration={aosDuration}
                            data-aos-delay={getDelay({turn: 3})}>
              <h2 className="z-[9] lg:text-[3.646vw] text-[5vw] font-redditsanssemibold text-white mt-[2vw]">Tagline Kita Sekarang</h2>
              <hr className="z-[9] lg:w-[46.12vw] w-[77.222vw] h-[0.2vw] bg-white my-[2vw] lg:my-0"></hr>
              <h3 className="z-[9] lg:text-[1.823vw] text-[3.333vw] font-redditsanslight text-white">Gala Nawasena KMTETI FT UGM 2024</h3>
            </div>
          </div>
        </div>
      </div>
    )
}