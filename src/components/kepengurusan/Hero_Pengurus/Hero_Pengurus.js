/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css"
import { aosDuration, getDelay } from "../../allPage/configs/aosConfig"

export default function Hero_Pengurus() {
  useEffect(() => {
    Aos.init();
  }, []);

    const handleClick = () => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        });
      };
    return(
        <section className="relative flex-col items-center justify-center h-screen w-full lg:flex hidden">
                <img src="/img/kepengurusan/bg.png" className="z-[1] absolute h-[120vh] w-full object-cover" alt="" 
                            data-aos="fade-up"
                            data-aos-duration={aosDuration}
                            data-aos-delay={getDelay({turn: 1})}/>
                <h1 className=" font-redditsanssemibold text-[6.354vw] z-[2] text-black" 
                            data-aos="fade-up"
                            data-aos-duration={aosDuration}
                            data-aos-delay={getDelay({turn: 1})}>Kepengurusan</h1>
                <h2 className="text-[2.292vw] w-[39.063vw] text-black font-redditsanslight text-center" 
                            data-aos="fade-up"
                            data-aos-duration={aosDuration}
                            data-aos-delay={getDelay({turn: 1})}>Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi FT UGM 2024</h2>
                <img className="absolute z-[5] bottom-[3vw] w-[1.354vw] animate-movingPointer hover:cursor-pointer" 
                            data-aos="fade-up"
                            data-aos-duration={aosDuration}
                            data-aos-delay={getDelay({turn: 2})} src="/img/kepengurusan/arrow.png " alt="" onClick={() => handleClick()} />
        </section>
    )
}