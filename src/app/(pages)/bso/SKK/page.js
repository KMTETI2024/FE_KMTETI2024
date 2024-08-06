/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
import { aosDuration, getDelay } from "../../../../components/allPage/configs/aosConfig"

export default function SKK() {
    useEffect(() => {
        Aos.init();
      }, []);
    
    const leaders = [
      { title: "Ketua", name: "Barbara Neanake Ajiesti" },
      { title: "Wakil Ketua", name: "Alexander Johan Pramudito" },
      { title: "Sekretaris", name: "Felicia Anindita" },
      { title: "Bendahara", name: "Gabriella Eileen Gultom" },
      { title: "Penanggung Jawab Eksternal", name: "Angelica Grace Cahyani" },
      { title: "Penanggung Jawab Internal", name: "Eduardus Bagus W." },
      { title: "Penanggung Jawab Publikasi", name: "Christy Clarrimond K." },
      { title: "Penilik Angkatan I", name: "Timothy Tanuwidjaya" },
      { title: "Penilik Angkatan II", name: "Halomoan Lyon G." }
    ];

    return (
        <main className="lg:px-[17.396vw] px-[7.778vw] py-[14.778vw] lg:py-[12.292vw] flex flex-col items-center justify-center bg-white">
            <h1 className="text-black lg:text-[2.344vw] text-[5.556vw] font-montserrat font-medium lg:font-redditsanssemibold self-start lg:self-center hidden" 
            data-aos="fade-up"
            data-aos-duration={aosDuration}
            data-aos-delay={getDelay({turn: 1})}>SKK</h1>
            <h1 className="text-black mb-[3.75vw] lg:text-[2.344vw] text-[5.556vw] font-montserrat font-medium lg:font-redditsanssemibold self-center"
            data-aos="fade-up"
            data-aos-duration={aosDuration}
            data-aos-delay={getDelay({turn: 1})}>SKK</h1>
            <img className="mb-[2.604vw] w-full h-full" src="/img/bso/SKK.png" alt="" 
            data-aos="fade-up"
            data-aos-duration={aosDuration}
            data-aos-delay={getDelay({turn: 2})}/>
            <div className="justify-center items-center flex flex-col gap-y-[1.75vw]" data-aos="fade-up"
            data-aos-duration={aosDuration}
            data-aos-delay={getDelay({turn: 3})}>
                <ul className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal self-start">
                    {leaders.map((leader, index) => (
                        <li key={index}>
                            <span className="font-archivosemibold">{leader.title}:</span> {leader.name}
                        </li>
                    ))}
                </ul>
                <p className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal">
                    Badan Semi Otonom Sie Kerohanian Kristen (SKK) merupakan BSO yang menjadi wadah berkumpulnya mahasiswa/i DTETI FT UGM yang beragama  Kristen Protestan dan Katolik. BSO ini berperan dalam menyelenggarakan kegiatan-kegiatan kerohanian dengan harapan dapat menumbuhkan iman dan mempererat hubungan sosial antar setiap anggotanya.
                </p>
                <p className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal">
                    Guna terwujudnya tujuan di atas, BSO SKK didukung oleh kepengurusan yang terdiri dari ketua, wakil ketua, sekretaris, bendahara, dan beberapa penanggung jawab urusan. Terdapat dua bagian urusan, yaitu urusan eksternal dan urusan internal. Bagian eksternal bertanggung jawab terhadap semua kegiatan kerohanian, seperti ibadah dan sebagainya dengan cakupan di luar lingkup DTETI FT UGM. Bagian internal bertanggung jawab terhadap seluruh kegiatan kerohanian, seperti ibadah dan sebagainya dengan cakupan hanya di dalam lingkup DTETI FT UGM. Pada bagian ini, penanggung jawab dibantu oleh penilik angkatan yang bertanggung jawab sebagai penghubung antara BSO dengan tiap angkatan.
                </p>
                <p className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal">
                    SKK DTETI memiliki berbagai program kerja, baik internal maupun eksternal, seperti First Gathering SKK, Doa Bersama setiap sebelum pekan ujian, Perayaan Natal, dan Perayaan Paskah untuk memperdalam iman serta mempererat kebersamaan dalam kasih Tuhan.
                </p>
            </div>
        </main>
        )
    }