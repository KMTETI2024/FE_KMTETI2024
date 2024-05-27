/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";

export default function Hero_Beranda() {
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
    return (
        <div className="h-[100vh] flex flex-row justify-center items-center bg-white">
            <div className="w-[30%] mr-[7.24vw] gap-y-[2.708vw] flex flex-col">
            <h1 className="text-[1.823vw] text-black"><span className=" font-archivo  ">KMTETI merupakan singkatan dari </span><span className=" font-archivosemibold">Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi.</span></h1>
            <h2 className="text-[1.302vw] text-black"><span className=" font-archivothin">KMTETI adalah organisasi resmi yang ada di Departemen Teknik Elektro dan Teknologi Informasi (DTETI). Salah satu semboyan yang dimiliki KMTETI adalah </span><span className=" font-archivosemibolditalic">Profesionalisme Berbasis Kekeluargaan.</span></h2>
            </div>
            <div className="w-[53.646vw] h-[30.729vw] flex gap-x-[1.042vw]">
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
        <img className="absolute bottom-[3vw] w-[1.354vw] animate-movingPointer hover:cursor-pointer" src="/img/kepengurusan/arrow.png " alt="" onClick={() => handleClick()} />
      </div>
    )
}