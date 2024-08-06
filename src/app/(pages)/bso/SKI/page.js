/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
import { aosDuration, getDelay } from "../../../../components/allPage/configs/aosConfig"
export default function MPM() {
    useEffect(() => {
        Aos.init();
      }, []);

    const leaders = [
        { title: "Ketua", name: "Ni’am Al-Faqihunnafis" },
        { title: "Wakil Ketua", name: "Yahya Ayas Firdausi" },
        { title: "Sekretaris", name: "Tatsliya Na’imatun N." },
        { title: "Bendahara", name: "Navika Berlianda R." },
        { title: "Ketua Divisi Biro Kemuslimahan", name: "Nila Wahyu Saputri" },
        { title: "Ketua Divisi Kajian", name: "Muhammad Farrel Akbar" },
        { title: "Ketua Divisi Pengembangan", name: "Mahib Miftahul Falah" },
        { title: "Ketua Divisi Syiar Media", name: "Pijarwidyanara Andhita H." },
        { title: "Ketua Divisi Mushola", name: "Muhammad Luqman" }
      ];
    
    return (
        <main className="lg:px-[17.396vw] px-[7.778vw] py-[14.778vw] lg:py-[12.292vw] flex flex-col items-center justify-center bg-white">
            <h1 className="text-black lg:text-[2.344vw] text-[5.556vw] font-montserrat font-medium lg:font-redditsanssemibold self-start lg:self-center hidden" 
            data-aos="fade-up"
            data-aos-duration={aosDuration}
            data-aos-delay={getDelay({turn: 1})}>SKI</h1>
            <h1 className="text-black mb-[3.75vw] lg:text-[2.344vw] text-[5.556vw] font-montserrat font-medium lg:font-redditsanssemibold self-center"
            data-aos="fade-up"
            data-aos-duration={aosDuration}
            data-aos-delay={getDelay({turn: 1})}>SKI</h1>
            <img className="mb-[2.604vw] w-full h-full" src="/img/bso/SKI.png" alt="" 
            data-aos="fade-up"
            data-aos-duration={aosDuration}
            data-aos-delay={getDelay({turn: 2})}/>
            <div className="flex flex-col gap-y-[1.75vw]" data-aos="fade-up"
            data-aos-duration={aosDuration}
            data-aos-delay={getDelay({turn: 3})}>
                <ul className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal self-start">
                    {leaders.map((leader, index) => (
                        <li key={index}>
                            <span className="font-archivosemibold">{leader.title}:</span> {leader.name}
                        </li>
                    ))}
                </ul>
                <p className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal">Sentra Kerohanian Islam Al-Hannaan atau yang sering disingkat SKI Al-Hannaan berperan dalam mengumpulkan dan menyalurkan aspirasi islami dari mahasiswa dan mahasiswi DTETI FT UGM. SKI Al-Hannaan bertujuan menjadi wadah penyampaian dakwah, mendekatkan diri kepada Allah, menumbuhkan ukhuwah islamiyah, meningkatkan semangat ibadah, serta sebagai tempat untuk melatih kemampuan berorganisasi. Program kerja SKI Al-Hannaan secara umum di antara lain Muktamar SKI Al-Hannaan, Gathering SKI Al-Hannaan, dan Open Recruitment SKI Al-Hannaan.
                </p>
                <p className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal">
                SKI Al-Hannaan terbagi menjadi 5 divisi:</p>
                <ol className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal list-decimal">
                    <li>Kajian</li>
                    <p>Menyelenggarakan acara kajian Islam untuk civitas DTETI dan masyarakat umum untuk meningkatkan keimanan dan pengetahuan agama, dengan program kerja kajian akhir semester.</p>
                    <li>Syiar Media</li>
                    <p>Menyebarkan informasi tentang islam dan event SKI Al-Hannaan, bertanggung jawab untuk menyampaikan informasi kegiatan SKI Al-Hannaan dan pesan dakwah ke civitas DTETI dan masyarakat umum, dengan program kerja post rutin, dan post event</p>
                    <li>Kemuslimahan</li>
                    <p>Melaksanakan kegiatan khusus untuk muslimah DTETI dan masyarakat umum, menampung semua muslimah dalam pengurus SKI Al-Hannaan dan menyelenggarakan kegiatan seperti tahsin dan kajian khusus muslimah</p>
                    <li>Pengembangan</li>
                    <p>Meningkatkan kualitas SDM dari pengurus SKI Al-Hannaan, dengan program kerja pengawasan kinerja pengurus dan leadership camp teknik</p>
                    <li>Mushola</li>
                    <p>Berfokus pada pelayanan umat di Mushola serta merawat Mushola DTETI, dengan program kerjanya yaitu Takjil Gratis DTETI.</p>
                </ol>
            </div>
        </main>
        )
    }