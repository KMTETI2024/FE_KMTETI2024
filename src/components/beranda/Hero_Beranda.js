/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css"
import { aosDuration, getDelay } from "../allPage/configs/aosConfig"

export default function Hero_Beranda() {
    useEffect(() => {
        Aos.init();
      }, []);
    
    const [stretchedIndex, setStretchedIndex] = useState(0);

    const images = [
        "/img/home/Foto1.png",
        "/img/home/Foto2.png",
        "/img/home/Foto3.png",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
        setStretchedIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Ganti gambar setiap 3 detik

        return () => clearInterval(interval);
    }, [images.length]);

    const handleImageClick = (index) => {
        setStretchedIndex(index);
    };

    const handleClick = () => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        });
      };

    const defaultWidths = ["w-[8.854vw]", "w-[11.458vw]", "w-[8.854vw]"];
    const stretchedWidth = ["w-[31.25vw]", "w-[33.854vw]", "w-[31.25vw]"];
    const hoverWidths = ["hover:w-[31.25vw]", "hover:w-[33.854vw]", "hover:w-[31.25vw]"];
    const defaultWidthsMobile = ["w-[18.333vw]", "w-[18.333vw]", "w-[18.333vw]"];
    const stretchedWidthMobile = ["w-[44.444vw]", "w-[44.444vw]", "w-[44.444vw]"];
    const hoverWidthsMobile = ["hover:w-[44.444vw]", "hover:w-[44.444vw]", "hover:w-[44.444vw]"];
    return (
        <div className="h-[200vw] lg:h-[56.25vw] flex flex-col lg:flex-row justify-center items-center bg-white relative">
            <img src="/img/home/circle-tr.svg" alt="" className="absolute top-[-20vw] right-0 lg:hidden w-[52.386vw]" />
            <div className="lg:w-[30%] lg:mr-[7.24vw] gap-y-0 lg:gap-y-[2.708vw] flex flex-col p-[6.944vw] lg:p-0">
                <h1 className="font-redditsanssemibold text-[10.556vw] lg:hidden leading-none text-black"
                            data-aos="fade-up"
                            data-aos-duration={aosDuration}
                            data-aos-delay={getDelay({turn: 1})}>KMTETI</h1>
                <h2 className="font-archivolight text-black text-[3.889vw] lg:hidden"
                            data-aos="fade-up"
                            data-aos-duration={aosDuration}
                            data-aos-delay={getDelay({turn: 2})}>merupakan singkatan dari Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi.</h2>
                <h1 className="text-[1.823vw] text-black hidden lg:block" data-aos="fade-up"
                            data-aos-duration={aosDuration}
                            data-aos-delay={getDelay({turn: 2})}><span className="font-archivo">KMTETI merupakan singkatan dari </span><span className=" font-archivosemibold">Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi.</span></h1>
                <h2 className="lg:text-[1.302vw] text-[3.333vw] text-black mt-[10vw] lg:mt-0"
                            data-aos="fade-up"
                            data-aos-duration={aosDuration}
                            data-aos-delay={getDelay({turn: 2})}>
                            <span className="lg:font-archivothin font-archivolight">KMTETI adalah organisasi resmi yang ada di Departemen Teknik Elektro dan Teknologi Informasi (DTETI). Salah satu semboyan yang dimiliki KMTETI adalah </span><span className=" font-archivosemibolditalic">Profesionalisme Berbasis Kekeluargaan.</span></h2>
            </div>
            <div className="lg:w-[53.646vw] lg:h-[30.729vw] lg:flex hidden gap-x-[1.042vw]"
                        data-aos="fade-left"
                        data-aos-duration={aosDuration}
                        data-aos-delay={getDelay({turn: 4})}>
                {images.map((src, index) => (
                    <div
                    key={index}
                    className={`h-[30.729vw] duration-700 ease-in-out transition-[width] rounded-[1.146vw] ${
                        stretchedIndex === index ? stretchedWidth : `${defaultWidths[index]} ${hoverWidths[index]}`
                    }`}
                    onClick={() => handleImageClick(index)}
                    >
                    <img
                        className="object-cover w-full h-full rounded-[1.146vw] transition"
                        src={src}
                        alt={`Foto ${index + 1}`}
                    />
                    </div>
                ))}
            </div>
            <div className="w-[85vw] h-[65.556vw] flex lg:hidden gap-x-[1.944vw] z-[10]" 
                        data-aos="fade-up"
                        data-aos-duration={aosDuration}
                        data-aos-delay={getDelay({turn: 4})}>
                {images.map((src, index) => (
                    <div
                    key={index}
                    className={`h-[65.556vw] duration-700 ease-in-out transition-[width] rounded-[2.778vw] ${
                        stretchedIndex === index ? stretchedWidthMobile : `${defaultWidthsMobile[index]} ${hoverWidthsMobile[index]}`
                    }`}
                    onClick={() => handleImageClick(index)}
                    >
                    <img
                        className="object-cover w-full h-full rounded-[2.778vw] transition"
                        src={src}
                        alt={`Foto ${index + 1}`}
                    />
                    </div>
                ))}
            </div>
            <img className="absolute lg:bottom-[3vw] bottom-[15vw] lg:w-[1.354vw] w-[3vw] animate-movingPointer hover:cursor-pointer z-[10]" src="/img/home/arrow.png " alt="" onClick={() => handleClick()}             
            data-aos="fade-up"
            data-aos-duration={aosDuration}
            data-aos-delay={getDelay({turn: 5})}/>
            <img className="bottom-[-10vw] absolute w-full z-0 lg:hidden" src="/img/home/circle-bc.svg" alt="" />
      </div>
    )
}