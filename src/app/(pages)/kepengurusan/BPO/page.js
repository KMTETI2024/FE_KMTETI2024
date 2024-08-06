/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css"
import { aosDuration, getDelay } from "../../../../components/allPage/configs/aosConfig"

export default function BPO() {
    useEffect(() => {
        Aos.init();
      }, []);

    const leaders = [
        { title: 'Ketua', name: 'Muhammad Fathur Rohman' },
        { title: 'Wakil Ketua', name: 'Elisabeth Isabel Elgina' },
        { title: 'Sekretaris', name: 'Halomoan Lyon Gregorius' },
        { title: 'Bendahara', name: 'Bintang Adhitya Kuncoro' }
    ];

    return (
        <main className="lg:px-[17.396vw] px-[7.778vw] py-[14.778vw] lg:py-[12.292vw] flex flex-col items-center justify-center bg-white">
            <h1 className="text-black lg:text-[2.344vw] text-[5.556vw] font-montserrat font-medium lg:font-redditsanssemibold self-start lg:self-center" data-aos="fade-up"
                            data-aos-duration={aosDuration}
                            data-aos-delay={getDelay({turn: 1})}>
                Biro Pengembangan Organisasi
            </h1>
            <h1 className="text-black mb-[3.75vw] lg:text-[2.344vw] text-[5.556vw] font-montserrat font-medium lg:font-redditsanssemibold self-start lg:self-center" data-aos="fade-up"
                            data-aos-duration={aosDuration}
                            data-aos-delay={getDelay({turn: 2})}>
                KMTETI FT UGM
            </h1>
            <img className="mb-[2.604vw] w-full h-full" src="/img/kepengurusan/BPO/Biro PO.png" alt="BPO" data-aos="fade-up"
                            data-aos-duration={aosDuration}
                            data-aos-delay={getDelay({turn: 3})}/>
            <div className="flex flex-col gap-y-[1.75vw]" data-aos="fade-up"
                            data-aos-duration={aosDuration}
                            data-aos-delay={getDelay({turn: 4})}>
                <ul className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal self-start">
                    {leaders.map((leader, index) => (
                        <li key={index}>
                            <span className="font-archivosemibold">{leader.title}:</span> {leader.name}
                        </li>
                    ))}
                </ul>
                <p className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal">
                    Sentra Biro Pengembangan Organisasi atau yang sering disebut BPO merupakan salah satu divisi di Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi yang memiliki misi untuk memberdayakan kader-kader organisasi serta berperan dalam mengembangkan dan meningkatkan skill keorganisasian. Oleh karena itu, BPO aktif dalam mengawasi KMTETI dengan cermat dan melakukan riset untuk mengamati kualitas kinerja dari KMTETI beserta divisi-divisi yang ada di dalamnya. Biro inilah yang bertanggung jawab dalam membentuk karakter mahasiswa baru serta pengurus KMTETI.
                </p>
                <p className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal">
                    Biro Pengembangan Organisasi (BPO) terdiri dari 2 bagian, yaitu:
                </p>
                <ol className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal list-decimal">
                    <li>Bagian Pengembangan Manusia</li>
                    <p>Bagian ini berperan untuk memantau, mengontrol, dan mengembangkan kualitas berorganisasi di KMTETI, baik sebagai individu maupun sebagai tim. Program kerja dari Biro Pengembangan Organisasi terdiri dari Closing Cabinet, Forum Aspirasi dan Sosialisasi Program Kerja Terbuka atau yang disebut FAST, Pelatihan Kesekretariatan Kebendaharaan (PKK), TETI Lab Skill, Master Class 1, Master Class 2, Makrab dan LED (Let’s Enjoy the (D) Games), Open Recruitment Pengurus Baru KMTETI, Well Being Check Up, dan LinkedIn.</p>
                    <li>Bagian Kaderisasi</li>
                    <p>Bagian yang bertugas dalam menjalankan fungsi-fungsi kaderisasi. Program kerja dari Biro Pengembangan Organisasi bagian kaderisasi di antara lain adalah Rapat Evaluasi Pengurus KMTETI, seperti Evaluasi Tengah Tahun (ETT), dan Evaluasi Akhir Tahun (EAT), serta Audit Internal Divisi, kemudian ada Penilaian dan Rapor Pengurus KMTETI, Database Pengurus KMTETI, Birthday Calendar KMTETI, SOTM (Staff of the Three Months), Penilaian Kinerja oleh Angket (Key Performance Indicator), dan Motent (Motivation Content).</p>
                </ol>
            </div>
        </main>
    );
}
