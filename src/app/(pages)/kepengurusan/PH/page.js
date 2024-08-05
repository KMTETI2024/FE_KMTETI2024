/* eslint-disable @next/next/no-img-element */
export default function BPO() {
    const leaders = [
        { title: "Ketua", name: "Hansen Justin H" },
        { title: "Sekretaris Jendral", name: "Ryan Krishandi Lukito" },
        { title: "Sekretaris Umum", name: "Shafa Artamevia" },
        { title: "Sekretaris I", name: "Sharon Nakisha Hezharu Putri" },
        { title: "Bendahara Umum", name: "Satama Safika" },
        { title: "Bendahara I", name: "Joecelyn Aurora Majesty" },
        { title: "Kerumahtanggaan I", name: "Rani Nirmala Prakoso" },
        { title: "Kerumahtanggaan II", name: "Reza Hanif Firmansyah" }
    ];

    return (
        <main className="lg:px-[17.396vw] px-[7.778vw] py-[14.778vw] lg:py-[12.292vw] flex flex-col items-center justify-center bg-white">
            <h1 className="text-black lg:text-[2.344vw] text-[5.556vw] font-montserrat font-medium lg:font-redditsanssemibold self-start lg:self-center mb-[3.75vw] lg:mb-0 w-[60vw] lg:w-fit">Pengurus Harian KMTETI FT UGM</h1>
            <h1 className="text-black mb-[3.75vw] lg:text-[2.344vw] text-[5.556vw] font-montserrat font-medium lg:font-redditsanssemibold self-start lg:self-center hidden lg:block">Periode 2023/2024</h1>
            <img className="mb-[2.604vw] w-full h-full" src="/img/kepengurusan/PH/ph.png" alt="" />
            <div className="flex flex-col gap-y-[1.75vw]">
                <ul className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal self-start">
                    {leaders.map((leader, index) => (
                        <li key={index}>
                            <span className="font-archivosemibold">{leader.title}:</span> {leader.name}
                        </li>
                    ))}
                </ul>
                <p className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal">Pengurus Harian adalah struktur organisasi yang bertanggung jawab dalam mengelola kegiatan sehari-hari KMTETI. Tugas Pengurus Harian antara lain adalah mengkoordinasikan kegiatan-kegiatan KMTETI, mengelola keuangan KMTETI, membuat Laporan Pertanggungjawaban dan RAB, serta bertanggung jawab atas program kerja KMTETI.
                </p>
            </div>
    </main>
        )
    }