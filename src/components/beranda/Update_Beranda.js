"use client";
import { useState, useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css"
import { aosDuration, getDelay } from "../allPage/configs/aosConfig"

export default function Update_Beranda() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
  <div className="w-full lg:h-[64.74vw] h-[166.667vw] flex flex-col lg:flex-row justify-center items-center lg:bg-white bg-[#1B1B1B] px-[5.7vw] lg:px-0">
          <div className="flex flex-col lg:self-center self-start" 
                            data-aos="fade-up"
                            data-aos-duration={aosDuration}
                            data-aos-delay={getDelay({turn: 1})}>
            <h1 className="lg:text-black text-white font-redditsansbold lg:text-[5.208vw] text-[6.111vw] mb-[8vw] lg:mb-0 lg:w-[60%] self-start">Our Latest Updates</h1>
            <h2 className="text-black font-redditsans text-[2.083vw] w-[40%] lg:block hidden">Don&apos;t forget to Check these out!</h2>
          </div>
          <div 
              data-aos="fade-up"
              data-aos-duration={aosDuration}
              data-aos-delay={getDelay({turn: 1})}>
            <div className="flex flex-col" >
              <div className="flex flex-row mb-[8.333vw] lg:mb-[2.708vw]">
                <div href="" className="w-[43.611vw] lg:w-[22.188vw] h-[42.222vw] lg:h-[21.458vw] rounded-[2.778vw] lg:rounded-[1.927vw] mr-[8.333vw] lg:mr-[3.906vw] shadow-2xl bg-white"></div>
                <div href="" className="w-[33.056vw] lg:w-[16.823vw] h-[42.222vw] lg:h-[21.458vw] rounded-[2.778vw] lg:rounded-[1.927vw] shadow-2xl bg-white"></div>
              </div>
              <div className="flex flex-row">
                <div href="" className="w-[33.056vw] lg:w-[16.823vw] h-[42.222vw] lg:h-[21.458vw] rounded-[2.778vw] lg:rounded-[1.927vw] mr-[8.333vw] lg:mr-[3.906vw] shadow-2xl bg-white"></div>
                <div href="" className="w-[43.611vw] lg:w-[22.188vw] h-[42.222vw] lg:h-[21.458vw] rounded-[2.778vw] lg:rounded-[1.927vw] shadow-2xl bg-white"></div>
              </div>
          </div>
          </div>
        </div>
  )
}