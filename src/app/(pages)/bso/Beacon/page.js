/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
import { aosDuration, getDelay } from "../../../../components/allPage/configs/aosConfig"

export default function Beacon() {
    useEffect(() => {
        Aos.init();
      }, []);

    const leaders = [
        { title: "Ketua", name: "Alfons Patrick Mulyosantoso" },
        { title: "Wakil", name: "Daffa Narendra Al-Kautsar" },
        { title: "Kepala Divisi Program", name: "Novanda Havid Ramadani" },
        { title: "Kepala Divisi Human Resources", name: "Aisya Listiana Boemara, Angelia Grace Cahyani" },
        { title: "Ketua Divisi Marketing", name: "Muhammad Bintang Harry Dharmawan" },
        { title: "Ketua Divisi Administration & Legal", name: "Chenaniah, Awaliya Shabrina" },
        { title: "Ketua Divisi Biomedical Hardware Community", name: "Aurrydiena Angelica" },
        { title: "Ketua Divisi Biomedical Software Community", name: "Ignasius Gilbert Wicaksana" }
      ];
    return (
        <main className="lg:px-[17.396vw] px-[7.778vw] py-[14.778vw] lg:py-[12.292vw] flex flex-col items-center justify-center bg-white">
            <h1 className="text-black lg:text-[2.344vw] text-[5.556vw] font-montserrat font-medium lg:font-redditsanssemibold self-start lg:self-center hidden" data-aos="fade-up"
            data-aos-duration={aosDuration}
            data-aos-delay={getDelay({turn: 1})}>Beacon</h1>
            <h1 className="text-black mb-[3.75vw] lg:text-[2.344vw] text-[5.556vw] font-montserrat font-medium lg:font-redditsanssemibold self-center"
            data-aos="fade-up"
            data-aos-duration={aosDuration}
            data-aos-delay={getDelay({turn: 1})}>Beacon</h1>
            <img className="mb-[2.604vw] w-full h-full" src="/img/bso/Beacon.png" alt="" data-aos="fade-up"
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
                <p className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal">Sentra Beacon merupakan Badan Organisasi Mahasiswa Semi Otonom yang dibentuk untuk mengembangkan minat dan bakat mahasiswa di bidang Biomedis. Beacon hadir dengan berbagai kegiatan, mulai dari seminar dan sharing alumni, project group, pameran hasil riset, informasi magang dan kompetisi, workshop biomedis, hingga project-based learning. 
                </p>
                <p className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal">
                BSO Beacon terdiri dari 6 divisi, yaitu:</p>
                <ol className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal list-decimal">
                    <li>Divisi Program</li>
                    <p>Bertanggungjawab dalam menyelenggarakan Seminar, Career Talk dan Sharing Alumni serta Pameran Hasil Riset (Simposium) Teknik Biomedis.</p>
                    <li>Divisi Human Resources</li>
                    <p>Mengadakan Open Recruitment Staff dan Member BSO Teknik Biomedis, dan First Gathering BSO TB. Melakukan evaluasi performa seluruh anggota BSO Teknik Biomedis setiap tiga bulan (Three Months Evaluation) dan apresiasi pengurus maupun anggota yang memiliki kinerja terbaik di tiap divisi dan komunitas dalam kurun setahun kepengurusan (Staff of the Year).
                    </p>
                    <li>Divisi Marketing</li>
                    <p>Berperan dalam menyebarkan informasi dan konten edukasi mengenai perkembangan ilmu Teknik Biomedis dalam media sosial BSO Teknik Biomedis, informasi-informasi mengenai peluang magang, Kerja Praktik, serta seminar Kerja Praktik melalui media sosial, informasi-informasi mengenai lomba dalam bidang Teknik Biomedis serta wadah pembentukan kelompok lomba dalam bidang Teknik Biomedis. Melakukan penjualan merchandise BSO Teknik Biomedis. Kemudian menyiarkan podcast yang membahas perkembangan terbaru dalam bidang Teknik Biomedis.</p>
                    <li>Divisi Administration & Legal</li>
                    <p>Bertanggung jawab dalam menyusun proposal dan LPJ (Laporan Pertanggungjawaban), mengurus segala mekanisme persuratan secara terstruktur, mencatat keterangan pemasukan atau pengeluaran dana, mengalokasikan pemasukan dana untuk program kerja tiap divisi termasuk di dalamnya menyetujui ataupun menolak rancangan anggaran yang diajukan oleh kepala divisi dengan berkoordinasi bersama Ketua dan/atau Wakil Ketua.</p>
                    <li>Divisi Hardware Community</li>
                    <p>Bertanggung jawab dalam mengadakan Project-based Learning Hardware Community yaitu pembelajaran bersama anggota BSO pada topik Hardware dalam bidang Teknik Biomedis, pembelajarannya dapat berupa pelatihan rutin maupun pengerjaan course daring bersama.</p>
                    <li>Divisi Software Community</li>
                    <p>Bertanggung jawab dalam mengadakan Project-based Learning Software Community yaitu pembelajaran bersama anggota BSO pada topik Software dalam bidang Teknik Biomedis, pembelajarannya dapat berupa pelatihan rutin maupun pengerjaan course daring bersama.</p>
                    <p>Divisi Software Community bersama dengan divisi Hardware Community berdua berkolaborasi dalam mengadakan kegiatan Research Project Group Incubator yaitu menyalurkan minat dan bakat anggota BSO Teknik Biomedis dalam bidang riset, terutama yang diadakan oleh dosen-dosen DTETI. Keduanya juga bersama mengadakan Biomedical Workshop berupa Hands on Practice pada peralatan dan software Teknik Biomedis.</p>
                </ol>
            </div>
        </main>
        )
    }