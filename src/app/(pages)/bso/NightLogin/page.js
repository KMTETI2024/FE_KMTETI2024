/* eslint-disable @next/next/no-img-element */
export default function NightLogin() {
    const leaders = [
        { title: "Ketua", name: "Giga Hidjrika A. A." },
        { title: "Wakil Ketua", name: "Ahmad Zaki Akmal" },
        { title: "Bendahara I", name: "Budi Setiawan" },
        { title: "Kepala Administrasi", name: "Laily Medha Nur I." },
        { title: "Ketua Divisi Media & Branding", name: "Salwa Maharani" },
        { title: "Ketua Divisi Programs", name: "Yitzhak Edmund T. M." },
        { title: "Ketua Communities (NADC)", name: "Difta Fitrahul Qihaj" },
        { title: "Ketua Communities (NCSC)", name: "Moh. Rizky Arif" },
        { title: "Ketua Communities (NHIC)", name: "Affix Vega Praditya" },
        { title: "Ketua Communities (NDSC)", name: "Agustinus Angelo C. F." },
        { title: "Ketua Communities (NGDC)", name: "Raditya Christoaji B. P." },
        { title: "Ketua Communities (NWDC)", name: "Aufa N. Rahman" }
      ];

    return (
        <main className="lg:px-[17.396vw] px-[7.778vw] py-[14.778vw] lg:py-[12.292vw] flex flex-col items-center justify-center bg-white">
            <h1 className="text-black lg:text-[2.344vw] text-[5.556vw] font-montserrat font-medium lg:font-redditsanssemibold self-start lg:self-center hidden">Night Login</h1>
            <h1 className="text-black mb-[3.75vw] lg:text-[2.344vw] text-[5.556vw] font-montserrat font-medium lg:font-redditsanssemibold self-center">Night Login</h1>
            <img className="mb-[2.604vw] w-full h-full" src="/img/bso/Night Login.png" alt="" />
            <div className="flex flex-col gap-y-[1.75vw]">
                <ul className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal self-start">
                    {leaders.map((leader, index) => (
                        <li key={index}>
                            <span className="font-archivosemibold">{leader.title}:</span> {leader.name}
                        </li>
                    ))}
                </ul>
                <p className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal">Sentra Night Login merupakan salah satu Badan Semi Otonom (BSO) yang didasarkan pada kompetensi program studi yang ada di DTETI FT UGM. Night Login adalah BSO atau komunitas di DTETI FT UGM yang bergerak di bidang teknologi informasi. Night Login hadir untuk menjadi wadah bagi mahasiswa/i DTETI FT UGM dalam menyalurkan serta mengembangkan minat, kemampuan, kreativitas, inovasi, dan wawasan di bidang IT. 
                </p>
                <p className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal">
                BSO Night Login memiliki enam kategori komunitas yang terbuka bagi mahasiswa/i DTETI FT UGM untuk bergabung sesuai dengan minat dan bakatnya. Pertama, ada Night Login Application Development Community (NADC) yang berfokus pada pengembangan aplikasi. Kedua, Night Login Cyber Security Community (NCSC) yang berfokus pada keamanan siber (cyber security). Ketiga, Night Login Human-Computer Interaction Community (NHIC) yang berfokus pada interaksi manusia dan komputer (mesin). Keempat, Night Login Data Science Community (NDSC) yang berfokus pada pengolahan ilmu data (data science). Kelima, Night Login Game Development Community (NGDC) yang berfokus pada pemgembangan sistem permainan (game). Terakhir, ada Night Login Web Development Community (NWDC) yang berfokus pada pengembangan situs web.</p>
                <p className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal">
                Untuk menunjang kompetensi dan minat mahasiswa/i DTETI FT UGM dalam bidang teknologi informasi, BSO Night Login menyelenggarakan beberapa program kerja, yaitu:
                </p>
                <ol className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal list-disc">
                    <li>Mentoring TETI Programming Week</li>
                    <li>TETI Programming Week X Workshop KMTETI</li>
                    <li>Community Training</li>
                    <li>Training Digital Marketing</li>
                    <li>Women in Tech</li>
                    <li>Work-At-Campus</li>
                    <li>Competition Hunter</li>
                    <li>After Hours Talk</li>
                    <li>NL Podcast</li>
                    <li>Collaboration Seminar (CTI Group, OCBC, Level Up)</li>
                    <li>Linkedin Workshop</li>
                </ol>
                <p className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal">
                Night Login menawarkan beragam kegiatan untuk kalian yang berminat dalam bidang IT. Night Login diharapkan dapat menajdi tempat pengasahan kemampuan mahasiswa/i DTETI FT UGM untuk bekal di masa depan.
                </p>
            </div>
        </main>
        )
    }