'use client';

import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const dummyData = [
    {
        img: "/img/artikel/pr-cover.png",
        title: "Elektropos Edisi April 2024",
        date: "23 / 02 / 2024",
        link: "/"
    },
    // Add more dummy data objects here
    {
        img: "/img/artikel/pr-cover.png",
        title: "PRESS RELEASE : Foto Kabinet Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi Periode 2024",
        date: "23 / 02 / 2024",
        link: "/"
    },
    {
        img: "/img/artikel/pr-cover.png",
        title: "PRESS RELEASE : Foto Kabinet Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi Periode 2024",
        date: "23 / 02 / 2024",
        link: "/"
    },
    {
        img: "/img/artikel/pr-cover.png",
        title: "PRESS RELEASE : Foto Kabinet Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi Periode 2024",
        date: "23 / 02 / 2024",
        link: "/"
    },
    {
        img: "/img/artikel/pr-cover.png",
        title: "PRESS RELEASE : Foto Kabinet Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi Periode 2024",
        date: "23 / 02 / 2024",
        link: "/"
    },
    {
        img: "/img/artikel/pr-cover.png",
        title: "PRESS RELEASE : Foto Kabinet Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi Periode 2024",
        date: "23 / 02 / 2024",
        link: "/"
    },
    {
        img: "/img/artikel/pr-cover.png",
        title: "PRESS RELEASE : Foto Kabinet Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi Periode 2024",
        date: "23 / 02 / 2024",
        link: "/"
    },
];

const Elektropos = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        rows: 2,  // Show items in 2 rows
        slidesToShow: 3,
        slidesToScroll: 3
    };

    const settings_mobile = {
        dots: true,
        infinite: true,
        speed: 500,
        rows: 3,  // Show items in 2 rows
        slidesToScroll: 1
    };

    return (
        <div className='px-[8.611vw] py-[28.778vw] lg:px-[16.146vw] lg:py-[11.094vw] '>
            <div className='flex-col gap-y-[2vw] lg:flex hidden'>
                <h1 className='font-redditsanssemibold text-[2.344vw] text-black'>Elektropos</h1>
                <hr className="z-[9] lg:w-full w-[77.222vw] h-[0.2vw] bg-black mb-[1vw]"></hr>
                <div className=''>
                    <Slider {...settings}>
                        {dummyData.map((item, index) => (
                            <Link key={index} href={item.link} className='lg:w-[24.71vw] lg:h-[29.333vw] p-[0.625vw] flex flex-col bg-[#F5F3F3] rounded-[0.26vw] gap-y-[0.5vw] justify-center items-center'>
                                <img className='w-[19.375vw] object-cover' src={item.img} alt="" />
                                <h2 className='font-archivo text-black text-[1.042vw] my-[0.6vw] self-center text-center'>{item.title}</h2>
                            </Link>
                        ))}
                    </Slider>
                </div>
                
                
            </div>
            <div className='flex flex-col lg:hidden'>
                <div className='flex flex-row mb-[8vw] justify-center items-center'>
                    <h1 className='font-montserrat font-medium text-[5.556vw] text-black flex-grow w-full'>Elektropos</h1>
                    <p className='font-archivolight text-black text-[2.5vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in nisl eu turpis faucibus porttitor eu nec enim</p>
                </div>
                <div className='lg:hidden block'>
                    <Slider {...settings_mobile}>
                        {dummyData.map((item, index) => (
                            <Link href={item.link} key={index} className='w-[82.778vw] h-fit p-[0.625vw] flex flex-col bg-[#F5F3F3] rounded-[0.26vw] gap-y-[0.5vw]'>
                                <img className='w-[77.778vw] object-cover' src={item.img} alt="" />
                                <h2 className='font-montserrat text-center font-medium text-black text-[3.333vw] flex-grow my-[0.6vw]'>{item.title}</h2>
                            </Link>
                        ))}
                    </Slider>
                </div>             
            </div>
        </div>
    );
};

export default Elektropos;
