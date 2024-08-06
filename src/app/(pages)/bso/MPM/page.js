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
        { title: "Ketua", name: "Dhimas Nurhanindya Putra" },
        { title: "Sekretaris 1", name: "Aurellia Zalfa Sulistiyanto" },
        { title: "Sekretaris 2", name: "Judah Charis Pramana" },
        { title: "Bendahara 1", name: "Kyla Lavinia Aisha Suryanto" },
        { title: "Bendahara 2", name: "Mutiara Depuspa" },
        { title: "Publikasi", name: "Mofid Narawangsa" },
        { title: "Ketua Komisi I", name: "Imannuel R. H. D." },
        { title: "Wakil Ketua Komisi I", name: "Diaz Trisnajati" }
      ];
    
    return (
        <main className="lg:px-[17.396vw] px-[7.778vw] py-[14.778vw] lg:py-[12.292vw] flex flex-col items-center justify-center bg-white">
            <h1 className="text-black lg:text-[2.344vw] text-[5.556vw] font-montserrat font-medium lg:font-redditsanssemibold self-start lg:self-center hidden"
            data-aos="fade-up"
            data-aos-duration={aosDuration}
            data-aos-delay={getDelay({turn: 1})}>Beacon</h1>
            <h1 className="text-black mb-[3.75vw] lg:text-[2.344vw] text-[5.556vw] font-montserrat font-medium lg:font-redditsanssemibold self-center"
            data-aos="fade-up"
            data-aos-duration={aosDuration}
            data-aos-delay={getDelay({turn: 1})}>MPM</h1>
            <img className="mb-[2.604vw] w-full h-full" src="/img/bso/MPM.png" alt="" data-aos="fade-up"
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
                    Majelis Permusyawaratan Mahasiswa (MPM) Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi Universitas Gadjah Mada (KMTETI UGM) merupakan lembaga yang berperan penting dalam mengawasi dan mengawal jalannya organisasi. Dipimpin oleh Dhimas Nurhanindya Putra sebagai Ketua, MPM terdiri dari berbagai posisi strategis termasuk dua sekretaris, dua bendahara, serta ketua dan wakil ketua komisi. MPM berfungsi untuk memastikan bahwa semua kegiatan dan kebijakan yang dijalankan oleh KMTETI sesuai dengan Anggaran Dasar, Anggaran Rumah Tangga, dan Garis-Garis Besar Haluan Kerja yang telah ditetapkan. 
                </p>
                <p className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal">
                    MPM juga bertanggung jawab atas pelaksanaan Musyawarah Besar, Serah Terima Jabatan, dan pemilihan Ketua Umum KMTETI. Musyawarah Besar diadakan untuk membahas dan menetapkan AD, ART, dan GBHK, sementara Serah Terima Jabatan mengesahkan kepengurusan baru. Pemilihan Ketua Umum dilakukan untuk memilih pemimpin baru KMTETI. Selain menjalankan tugas-tugas administratif, MPM juga bertindak sebagai mitra yang mengawal kinerja pengurus harian KMTETI, memastikan bahwa semua program kerja berjalan sesuai rencana dan berkontribusi secara maksimal terhadap kemajuan dan kesejahteraan mahasiswa Teknik Elektro dan Teknologi Informasi UGM.
                </p>
            </div>
        </main>
        )
    }