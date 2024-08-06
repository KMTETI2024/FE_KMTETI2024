/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
import { aosDuration, getDelay } from "../../../../components/allPage/configs/aosConfig"
import React from 'react'

function Slug_TETIChampion() {
    useEffect(() => {
        Aos.init();
      }, []);
  return (
    <div className='lg:px-[19.635vw] lg:py-[9.115vw] px-[7.778vw] py-[23.056vw] flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-y-[6vw] lg:gap-y-[2vw] w-fit'
        data-aos="fade-up"
        data-aos-duration={aosDuration}
        data-aos-delay={getDelay({turn: 1})}>
            <div className='flex flex-row self-start'>
                <div className='flex flex-col justify-center items-center '>
                    <h1 className='font-archivothin text-[6.111vw] lg:text-[1.823vw]'>Congratulations!</h1>
                    <h2 className='font-redditsanssemibold text-[6.111vw] lg:text-[1.823vw]'>TETI Champion!</h2>
                </div>
                <div>
                    <img className='lg:w-[10vw] w-[25vw]' src="/img/teti_champion/piala.png" alt=""></img>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col gap-x-[3vw] gap-y-[6vw] lg:gap-y-0 justify-center items-center'
            data-aos="fade-up"
            data-aos-duration={aosDuration}
            data-aos-delay={getDelay({turn: 2})}>
                <div className='lg:w-[19.688vw] lg:h-fit p-[0.625vw] lg:flex flex-col bg-[#F5F3F3] rounded-[0.26vw] gap-y-[0.5vw] justify-center items-center hidden'>
                    <img className='w-[19.375vw] object-cover' src="/img/artikel/pr-cover.png" alt="" />
                    <div>
                        <h2 className='font-redditsansbold text-black text-[1.042vw] self-center text-center'>RAMA SULAIMAN NURCAHYO, ANANTADHIRYA WISESA LINAN</h2>
                        <div className='flex flex-row items-center justify-center'>
                            <h2 className='font-redditsansitalic text-black text-[1.042vw] self-center text-center'>Juara 0</h2>
                            <h2 className='font-redditsansitalic text-black text-[1.042vw] self-center text-center'>&nbsp;|&nbsp;</h2>
                            <h2 className='font-redditsansitalic text-black text-[1.042vw] self-center text-center'>Kompetisi Yang Diikuti</h2>
                        </div>
                    </div>
                </div>
                <img className='w-[83.889vw] object-cover block lg:hidden mb-[2vw] rounded-[2vw]' src="/img/artikel/pr-cover.png" alt="" />
                <p className='font-archivo text-[3.333vw] lg:text-[1.458vw] w-full lg:w-[30vw] text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in nisl eu turpis faucibus porttitor eu nec enim. Proin ornare vitae lacus ac placerat. Fusce odio est, efficitur non tristique sit amet, hendrerit id purus. Sed a tortor lectus. Donec ut dolor maximus, efficitur nulla quis, iaculis eros. Praesent posuere sed velit eget dapibus. Ut et metus varius augue suscipit venenatis a quis diam. Suspendisse sit amet magna tempor, vehicula turpis eget, porttitor urna. Nulla congue eget nisi nec sodales. Pellentesque pretium magna hendrerit nibh rhoncus iaculis. Morbi diam lectus, laoreet eget hendrerit ac, pretium quis leo.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Slug_TETIChampion