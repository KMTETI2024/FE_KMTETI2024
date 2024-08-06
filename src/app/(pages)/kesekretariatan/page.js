/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
import { aosDuration, getDelay } from "../../../components/allPage/configs/aosConfig"
export default function Kesekretariatan() {
    useEffect(() => {
        Aos.init();
      }, []);

    return(
        <main className="relative flex flex-col items-center justify-center bg-white" data-aos="fade-up"
        data-aos-duration={aosDuration}
        data-aos-delay={getDelay({turn: 1})}>
            <div className="relative w-full lg:h-screen h-[197.222vw] flex flex-col justify-center items-center">
                <img src="/img/kesekretariatan/Top_Left.svg" alt="" className="w-[30.611vw] absolute top-0 left-0 block lg:hidden"/>
                <img src="/img/kesekretariatan/Center_Right.svg" alt="" className="w-[30.611vw] absolute m-auto right-0 top-0 bottom-0 block lg:hidden"/>
                <img src="/img/kesekretariatan/Bottom_Left.svg" alt="" className="w-[30.611vw] absolute bottom-0 left-0 block lg:hidden"/>
                <img src="/img/kesekretariatan/bg.png" className="z-[1] absolute object-cover h-screen w-full opacity-10 hidden lg:block" alt="" />
                <div className="z-[2] bg-[#123C59] w-full absolute h-full opacity-20 hidden lg:block"></div>
                    <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-x-[9vw] gap-y-[20vw]">
                        <div className="flex flex-col justify-center items-center" data-aos="fade-up"
            data-aos-duration={aosDuration}
            data-aos-delay={getDelay({turn: 2})}>
                            <h1 className=" font-redditsanssemibold text-[7.5vw] lg:text-[3.125vw] z-[2] text-black drop-shadow-2xl text-center lg:w-[35vw]">Alur Peminjaman Alat dan Ruang DTETI</h1>
                            <a href="" className="z-[2] w-[28.889vw] lg:w-[11.667vw] h-[8.611vw] lg:h-[2.969vw] text-black font-redditsanslight bg-white text-[3.333vw] lg:text-[1.25vw] text-center justify-center items-center flex rounded-[12.778vw] lg:rounded-[2.396vw] drop-shadow-2xl mt-[1vw]">
                                <p>Lihat</p>
                            </a>
                        </div>
                        <div className="flex flex-col justify-center items-center" data-aos="fade-up"
            data-aos-duration={aosDuration}
            data-aos-delay={getDelay({turn: 2})}>
                            <h1 className="font-redditsanssemibold text-[7.5vw] lg:text-[3.125vw] z-[2] text-black drop-shadow-2xl text-center lg:w-[40vw]">Template&nbsp;
                                <span className=" font-redditsanssemibolditalic">
                                    {'(LPJ, SPJ, dan Keperluan Surat lainnya)'}
                                </span></h1>      
                            <a href="" className="z-[2] w-[28.889vw] lg:w-[11.667vw] h-[8.611vw] lg:h-[2.969vw] text-black font-redditsanslight bg-white text-[3.333vw] lg:text-[1.25vw] text-center justify-center items-center flex rounded-[12.778vw] lg:rounded-[2.396vw] drop-shadow-2xl mt-[1vw]">
                                <p>Lihat</p>
                            </a>
                        </div>
                    </div>
            </div>
        </main>
    )
}