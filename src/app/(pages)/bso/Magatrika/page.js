/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
import { aosDuration, getDelay } from "../../../../components/allPage/configs/aosConfig"

export default function Magatrika() {
    useEffect(() => {
        Aos.init();
      }, []);

    const leaders = [
        { title: "Ketua", name: "Brahmantio Farhan" },
        { title: "Wakil Ketua", name: "Raden Satrio" },
        { title: "Sekretaris", name: "Tasya Nadhila" },
        { title: "Bendahara", name: "Elizabeth Devina" },
        { title: "Ketua Divisi PSDM", name: "Michael Ivan" },
        { title: "Ketua Divisi Humas", name: "Citra Agatha" },
        { title: "Ketua Divisi Power System", name: "I Putu Buddhi Gunawan" },
        { title: "Ketua Divisi Energy Conversion", name: "Natanael Bimo Priambodo" },
        { title: "Ketua Divisi Power Electronics", name: "Muhammad Ikhsan" }
      ];

    return (
        <main className="lg:px-[17.396vw] px-[7.778vw] py-[14.778vw] lg:py-[12.292vw] flex flex-col items-center justify-center bg-white">
            <h1 className="text-black lg:text-[2.344vw] text-[5.556vw] font-montserrat font-medium lg:font-redditsanssemibold self-start lg:self-center hidden" data-aos="fade-up"
            data-aos-duration={aosDuration}
            data-aos-delay={getDelay({turn: 1})}>Magatrika</h1>
            <h1 className="text-black mb-[3.75vw] lg:text-[2.344vw] text-[5.556vw] font-montserrat font-medium lg:font-redditsanssemibold self-center"
            data-aos="fade-up"
            data-aos-duration={aosDuration}
            data-aos-delay={getDelay({turn: 1})}>Magatrika</h1>
            <img className="mb-[2.604vw] w-full h-full" src="/img/bso/Magatrika.png" alt="" data-aos="fade-up"
            data-aos-duration={aosDuration}
            data-aos-delay={getDelay({turn: 2})}/>
            <div className="flex flex-col gap-y-[1.75vw]"
            data-aos="fade-up"
            data-aos-duration={aosDuration}
            data-aos-delay={getDelay({turn: 3})}>
                <ul className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal self-start">
                    {leaders.map((leader, index) => (
                        <li key={index}>
                            <span className="font-archivosemibold">{leader.title}:</span> {leader.name}
                        </li>
                    ))}
                </ul>
                <p className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal">Sentra Magatrika adalah salah satu Badan Semi Otonom Departemen Teknik Elektro dan Teknologi Informasi yang diperuntukkan bagi mahasiswa konsentrasi STL.
                </p>
                <p className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal">
                Visi: Memfasilitasi dan mendukung terciptanya sumber daya mahasiswa yang terdepan dalam bidang ketenagalistrikan yang bersifat kritis dan aplikatif dengan mengedepankan prinsip Ketuhanan Yang Maha Esa, Kekeluargaan, Kemandirian, dan Kecerdasan.</p>
                <p className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal">
                Misi: Membuat Mahasiswa Ketenagalistrikan mendapatkan manfaat secara maksimal dari Magatrika dengan program-program yang berkualitas serta dapat merealisasikan ide-ide dari para keluarga Magatrika demi terciptanya sumber daya mahasiswa yang matang dan siap menghadapi dunia pasca-kuliah.
                </p>
                <p className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal">
                BSO Magatrika terdiri dari 5 divisi:
                </p>
                <ol className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal list-decimal">
                    <li>Divisi PDSM</li>
                    <p>Divisi ini bertanggung jawab dalam mengenalkan BSO Magatrika, menyeleksi, membentuk serta menyambut staf BSO dalam kepengurusan baru.</p>
                    <li>Divisi Humas</li>
                    <p>Divisi ini bertanggung jawab memberikan gambaran serta diskusi mengenai dunia kerja di bidang ketenagalistrikan, menghubungkan anggota Magatrika dengan pihak pemilik proyek ketenagalistrikan yang sedang membutuhkan SDM serta mencari perlombaan dan kompetisi di ranah ketenagakerjaan untuk dapat diikuti.</p>
                    <li>Divisi Power System</li>
                    <p>Divisi ini bertanggung jawab mengadakan pelatihan software, infografis power system serta National Electrical Power System Competition (NESCO) yang menyajikan seminar nasional, paper competition, poster competition dan video competition, NESCO bertujuan memberi wadah minat bakat penelitian dan pengembangan inovasi industri 4.0 bidang teknik elektro dan teknologi informasi. </p>
                    <li>Divisi Energy Conversion</li>
                    <p>Divisi ini berperan menerbitkan infografis dan mengadakan pelatihan software.</p>
                    <li>Divisi Power Electronics</li>
                    <p>Divisi ini berperan mengadakan kegiatan Exposing Power Electronics (EXPEL) dan pelatihan elektronika daya.</p>
                </ol>
            </div>
        </main>
        )
    }