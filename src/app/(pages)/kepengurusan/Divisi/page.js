"use client";

/* eslint-disable @next/next/no-img-element */
import { IoMdArrowDropdown } from 'react-icons/io';
import { useEffect, useRef, useState } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
import { aosDuration, getDelay } from "../../../../components/allPage/configs/aosConfig"

export default function Divisi() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Adkesma');
  const dropdownRef = useRef(null);

  const items = [
    'Adkesma',
    'Elektropreneur',
    'Humas',
    'Infokom',
    'Minat & Bakat',
    'Sosial Masyarakat',
    'Workshop'
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    if (isOpen) {
      dropdownRef.current.style.height = `${dropdownRef.current.scrollHeight}px`;
    } else {
      dropdownRef.current.style.height = '0px';
    }
  }, [isOpen]);

  const getContent = (item) => {
    switch (item) {
      case 'Adkesma':
        return {
          imgSrc: '/img/kepengurusan/Divisi/Adkesma.png',
          leaders: [
            { title: "Ketua", name: "Bagaskara Waskita Ahmad" },
            { title: "Wakil Ketua", name: "Rakhel Fadhila Nastiti" },
            { title: "Sekretaris I", name: "Jhon Samuel" },
            { title: "Sekretaris II", name: "Amira Syafika Pohan" },
            { title: "Bendahara I", name: "Fiyya Awalia Zaidal Faza" },
            { title: "Bendahara II", name: "Inge Arista Robiyanto" },
            { title: "Ketua Subdivisi Advokasi Umum", name: "Muhammad Shafa Aditya" },
            { title: "Ketua Subdivisi Advokasi Akademis", name: "Muhammad Aditya Rahmansyah B." },
            { title: "Ketua Subdivisi Media Adkesma", name: "Nila Wahyu Saputri" }
          ],
          paragraph1: 'Divisi Adkesma atau Advokasi dan Kesejahteraan Mahasiswa merupakan divisi di KMTETI yang menjadi perpanjangan tangan dalam mengingkatkan kesejahteraan mahasiswa dan menangani berbagai hal terkait kemahasiswaan, seperti fasilitas, akademis, hingga finansial mahasiswa/i DTETI FT UGM.',
          paragraph2: 'Divisi Adkesma sendiri terdiri dari tiga subdivisi, yaitu Subdivisi Advokasi Umum, Subdivisi Advokasi Akademis, dan Subdivisi Media Adkesma. Subdivisi Advokasi Umum bertanggung jawab dalam memenuhi fungsi advokasi terkait aspirasi-aspirasi umum mahasiswa/i DTETI FT UGM. Program kerja dari subdivisi ini, diantaranya Forum Warga TETI (Forwati), Aspirasi Umum dan Aspirasi Akademis, Pekan Konseling, serta Pencegahan Kekerasan Seksual. Subdivisi Advokasi Akademis bertanggung jawab dalam mewadahi dan memfasilitasi kegiatan penunjang terkait akademis mahasiswa. Program kerja dari subdivisi tersebut, diantaranya Kunjungan Industri, Bank Materi, Sosialisasi Kerja Praktik, Webinar dan Simulasi TOEFL, serta Perekrutan Asisten Akademik. Terakhir, Subdivisi Media Adkesma bertanggung jawab terhadap media publikasi terkait aktivitas kemahasiswaan di DTETI FT UGM. Program kerja dari subdivisi tersebut adalah Info Adkesma yang memuat informasi terkait akademik kemahasiswaan, seperti penyelenggaraan ujian, heregistrasi, penyelenggaraan tutorial, informasi pendadaran, dan masih banyak lagi informasi lainnya seputar akademik dan kemahasiswaan.'
        };
      case 'Elektropreneur':
        return {
          imgSrc: '/img/kepengurusan/Divisi/EP.png',
          leaders: [
            { title: "Ketua", name: "Fatihan Fawwasanie" },
            { title: "Wakil Ketua", name: "Varick Zahir Sarjiman" },
            { title: "Sekretaris 1", name: "Made Abel Noelanza" },
            { title: "Sekretaris 2", name: "Hayunitya Edadwi Pratita" },
            { title: "Bendahara 1", name: "Devi Fitriana" },
            { title: "Bendahara 2", name: "Warda Saniia Fawahaana" },
            { title: "Ketua Subdivisi Management Developing", name: "Pijar Widyanara" },
            { title: "Ketua Subdivisi Business Development", name: "Muhammad Aqiil Fauzan" }
          ],
          paragraph1: 'Divisi Electropreneur di Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi Universitas Gadjah Mada (KMTETI UGM) adalah wadah bagi para mahasiswa yang ingin mengembangkan keterampilan bisnis dan kewirausahaan. Dipimpin oleh Fatihan Fawwasanie sebagai ketua dan Varick Zahir Sarjiman sebagai wakil, divisi ini memiliki dua subdivisi utama: Management Developing dan Business Development. Subdivisi Management Developing fokus pada perencanaan dan penjualan merchandise serta kebutuhan harian mahasiswa, seperti melalui proyek EP-Merch, TETI Student Cafe, dan penjualan jaket KMTETI. Semua kegiatan ini bertujuan untuk melatih jiwa kewirausahaan anggota dan memenuhi kebutuhan civitas academica DTETI FT UGM.',
          paragraph2: 'Subdivisi Business Development lebih menekankan pada pendidikan dan pelatihan bisnis. Kegiatan seperti EP-Day (Entrepreneur Day), Bincang Bincang Bisnis (BBB), dan EP-Class dirancang untuk mengasah keterampilan bisnis peserta, memberikan wawasan tentang dunia usaha, dan membekali mereka dengan pengetahuan investasi. Selain itu, kegiatan rutin berupa Postingan Bisnis di media sosial memberikan edukasi berkelanjutan tentang tips dan trik bisnis. Dengan berbagai program yang ditawarkan, Divisi Electropreneur berperan penting dalam menumbuhkan semangat dan kemampuan berwirausaha di kalangan mahasiswa DTETI UGM.'
        };
      case 'Humas':
        return {
          imgSrc: '/img/kepengurusan/Divisi/Humas.png',
          leaders: [
            { title: "Ketua", name: "Muhammad Aldi Yustisio" },
            { title: "Wakil Ketua", name: "Aisya Listiana Boemara" },
            { title: "Sekretaris", name: "Chaira Nastya Warestri" },
            { title: "Bendahara", name: "Caroline Olivia Putri" }
          ],
          paragraph1: 'Divisi Hubungan Masyarakat (Humas) KMTETI merupakan interkoneksi atau perantara KMTETI dengan pihak luar. Baik dengan pihak internal DTETI, alumni mahasiswa DTETI, dan pihak eksternal lainnya. Divisi ini  akan menjalin kerjasama sehingga akan membangun hubungan yang baik serta menjaga citra positif antara pihak eksternal maupun internal untuk kebermanfaatan bersama. Divisi ini memiliki “image asik dan bertanggung jawab” sehingga selain menjalankan program-program kerjanya, divisi ini juga menjalankan beberapa kegiatan sebagai sarana refreshing dari rutinitas. Divisi Humas memiliki 8 Program Kerja, yakni:',
          paragraph2: '',
          additionalPrograms: [
            'Open House DTETI & Capstone Expo: Pengenalan DTETI ke siswa/siswi SMA atau sederajat dengan informasi dan pelatihan untuk menarik minat bergabung.',
            'Public Speaking Training: Pelatihan komunikasi efektif untuk mahasiswa DTETI dan eksternal, termasuk sesi mentoring langsung.',
            'Konten KMTETI: Menampilkan kehidupan mahasiswa/i DTETI dalam bentuk konten seperti podcast dan sharing.',
            'Sharing Alumni: Memotivasi mahasiswa dengan wawasan tentang dunia kerja dan cara bertahan dalam perjalanan akademik.',
            'SOP Media Partner: Pembuatan SOP untuk kerjasama dengan media partner.',
            'SOP Kunjungan: Pembuatan SOP untuk kunjungan keluar atau penerimaan kunjungan dari himpunan lain.',
            'PJ Teknik Fair: Kegiatan untuk memperkenalkan fakultas dan prodi di teknik UGM, serta menarik minat peserta Teknik Fair untuk prodi TETITB.',
            'Contact Person KMTETI: Kontak untuk komunikasi umum dengan pihak luar.'
          ]
        };
      case 'Infokom':
        return {
          imgSrc: '/img/kepengurusan/Divisi/Infokom.png',
          leaders: [
            { title: "Ketua", name: "Muhammad Bintang Harry Dharmawan" },
            { title: "Wakil Ketua", name: "Harry Boas Saputra" },
            { title: "Sekretaris I", name: "Kayana Anindya Azaria" },
            { title: "Sekretaris II", name: "Polerentina Devita Simamora" },
            { title: "Bendahara I", name: "Aurellya Ratna Dewanti" },
            { title: "Bendahara II", name: "Tanaya Edra Abitama" },
            { title: "Ketua Subdivisi Media Sosial", name: "Nasywa Rahmadhani Putri Setiawan" },
            { title: "Ketua Subdivisi Jurnalistik", name: "Hanief Anwar Hayat" },
            { title: "Ketua Subdivisi Desain Grafis", name: "Gavind Muhammad Pramahita" },
            { title: "Ketua Subdivisi Videografi", name: "Cornelia Zefanya" }
          ],
          paragraph1: 'Divisi Informasi dan Komunikasi atau yang sering disebut divisi Infokom merupakan salah satu divisi di KMTETI yang berperan dalam penyebaran informasi di dalam lingkungan DTETI dalam bentuk media cetak maupun digital. Divisi Infokom juga berperan dalam mengembangkan minat dan bakat semua mahasiswa DTETI dalam bidang jurnalistik dan multimedia. Termasuk di dalamnya menampung aspirasi mahasiswa DTETI lewat media tulis, mengembangkan media sosial KMTETI, dan mengadakan pelatihan bidang multimedia untuk seluruh anggota KMTETI. Program kerja umum dari divisi Infokom di antara lain Snapshot, MeIDEA, dan TETI-on-the-wall.',
          paragraph4: 'Divisi Infokom terdiri dari 4 subdivisi, yaitu:',
          additionalPrograms: [
            'Subdivisi Media Sosial : Berperan dalam mengatur aliran persebaran informasi tentang KMTETI ataupun yang terkait dengan KMTETI melalui berbagai macam platform sosial media. Subdivisi ini bertugas dalam menyusun timeline dari konten-konten yang akan diunggah dan timeline dari pembuatan konten tersebut oleh subdivisi jurnalistik dan subdivisi multimedia, serta memantau informasi-informasi yang sedang berkembang di lingkar media sosial KMTETI. Subdivisi media sosial juga memiliki program kerjanya, yaitu Media Sosial KMTETI, Kalender KMTETI, Cakap-Cakap, Konten Interaktif, dan Website KMTETI.',
            'Subdivisi Jurnalistik : Berperan dalam mencari informasi di dalam dan di luar DTETI, serta menyebarkannya melalui media cetak maupun dalam bentuk buletin Elektropost. Subdivisi ini juga menampung segala aspirasi mahasiswa dalam media tulis yang nantinya akan dipajang di Papan KMTETI bersama berbagai snapshot DTETI. Berperan sebagai badan pers DTETI dengan mengeluarkan buletin cetak sebagai kanal informasi seputar DTETI untuk para wisudawan/wisudawati. Dalam penyebaran informasi yang lebih detail dan berskala besar, Subdivisi ini juga membuat sebuah majalah bernama Voltamagz.',
            'Subdivisi Desain Grafis : Subdivisi Desain Grafis berperan dalam pengembangan minat mahasiswa dalam bidang desain. Pengembangan minat dilakukan dengan diadakannya pelatihan desain dan layouting. Adapun program kerja khusus desain grafis, yaitu KMTETI Design Course, Peringatan Hari Besar Infografis, dan Informasi Menggelitik',
            'Subdivisi Videografi : Subdivisi ini menangani segala keperluan media di KMTETI dalam bentuk video seperti pembuatan video profil setiap kabinet, hari besar, dan masih banyak keperluan lainnya. Subdivisi Videografi juga sebagai media entertainment atau penghibur masyarakat DTETI dengan membuat produksi video dengan konten yang bervariasi di Channel Youtube dan Instagram KMTETI. Dalam pembuatan konten videonya, subdivisi ini bekerja sama dengan beberapa divisi lain di KMTETI. Beberapa program kerja khusus videografi di antaranya adalah Foto Kabinet, Video Profil KMTETI, Video Bulanan KMTETI, Aftermovie KMTETI.',
          ]
        };
      case 'Minat & Bakat':
        return {
          imgSrc: '/img/kepengurusan/Divisi/Mikat.png',
          leaders: [
            { title: "Ketua", name: "Mahsa Quereda Bahjah" },
            { title: "Wakil Ketua", name: "Wizha Shandy" },
            { title: "Sekretaris", name: "Salwa Nayla Adistri" },
            { title: "Bendahara I", name: "Gabriella Eileen Gultom" },
            { title: "Bendahara II", name: "Deona Gracia" },
            { title: "Ketua Subdivisi Olahraga", name: "Muhammad Hilmi Dzaki Wismadi" },
            { title: "Ketua Subdivisi Seni", name: "Septian Eka Rahmadi" },
            { title: "Ketua Subdivisi SUTET", name: "Hafidh Husna" }
          ],
          paragraph1: 'Divisi Mikat atau Minat dan Bakat merupakan divisi yang dibentuk sebagai wadah penyaluran serta pengembangan minat dan bakat mahasiswa/i DTETI FT UGM. Untuk menjalankan program-program kerja, kepengurusan dalam divisi ini, meliputi ketua, wakil ketua, sekretaris, bendahara, dan ketua untuk ketiga subdivisi yang ada.',
          paragraph2: 'Terdapat tiga subdivisi pada Divisi Minat dan Bakat, yaitu Subdivisi Olahraga, Subdivisi Seni, dan Subdivisi SUTET. Pertama, Subdivisi Olahraga dibentuk dengan tujuan mewadahi penyaluran serta pengembangan minat dan bakat mahasiswa di bidang olahraga. Subdivisi ini bertugas dalam mengurus kegiatan-kegiatan olahraga, baik di dalam lingkup DTETI FT UGM, maupun di luar, seperti pada ajang Teknisiade yang merupakan perhelatan olahraga di lingkungan Fakultas Teknik UGM. Kedua, Subdivisi Seni berfokus pada penyaluran serta pengembangan minat dan bakat mahasiswa/i DTETI FT UGM dalam bidang seni. Ketiga, Subdivisi SUTET bertanggung jawab dalam mengkoordinasikan suporter DTETI atau lebih dikenal dengan nama SUTET untuk mendukung mahasiswa representasi dari DTETI FT UGM.',
          paragraph3: 'Dalam rangka mendukung penyaluran serta pengembangan minat dan bakat mahasiswa DTETI FT UGM, Divisi Mikat menyelenggarakan beragam program kerja, sebagai berikut:',
          additionalProgramsbullets: [
            'PORNITETI,',
            'Latihan Rutin,',
            'Pentas Enforian,',
            'EIMS,',
            'KMTETI goes to Teknisiade,',
            'KMTETI goes to Wisuda,',
            'Specific Skill Development,',
            'Infografis,',
            'Check Sound Supporteran, dan',
            'Olahraga bareng',

          ]
        };
      case 'Sosial Masyarakat':
        return {
          imgSrc: '/img/kepengurusan/Divisi/Sosmas.png',
          leaders: [
            { title: "Ketua", name: "Polar Osaka" },
            { title: "Wakil", name: "Angelia Grace Cahyani" }
          ],
          paragraph1: 'Divisi Sosial Masyarakat (Sosmas) di Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi Universitas Gadjah Mada (KMTETI UGM) adalah salah satu divisi terbaru yang memiliki peran penting dalam pengabdian kepada masyarakat. Dipimpin oleh Polar Osaka sebagai ketua dan Angelia Grace Cahyani sebagai wakil, divisi ini terbagi menjadi dua subdivisi utama: Desa Binaan dan Bantuan Sosial. Subdivisi Desa Binaan fokus pada pemeliharaan inventaris KMTETI di Desa Tanjungharjo, Kulon Progo, serta pembinaan desa baru melalui inovasi teknologi dan kewirausahaan. Kegiatan ini bertujuan untuk membantu warga desa menerapkan ilmu yang diperoleh selama kuliah dan mengaplikasikannya dalam kehidupan sehari-hari, sejalan dengan prinsip Tridharma Perguruan Tinggi.',
          paragraph2: 'Subdivisi Bantuan Sosial bertujuan untuk menumbuhkan rasa kepedulian dan solidaritas terhadap lingkungan sosial. Kegiatan seperti KMTETI Mengabdi, KMTETI Berbagi, Jumat Berbagi, Amplop Amal, dan Forum Sosmas Teknik dirancang untuk memberikan bantuan langsung kepada mereka yang membutuhkan. Misalnya, KMTETI Mengabdi melibatkan kunjungan ke panti asuhan dengan berbagai aktivitas edukatif dan pembagian sembako, sementara KMTETI Berbagi memberikan paket sembako kepada karyawan DTETI non-dinas untuk memperingati Hari Raya Idulfitri. Dengan berbagai program ini, Divisi Sosmas memainkan peran penting dalam menghubungkan KMTETI dengan masyarakat luas, memupuk jiwa sosial di kalangan anggotanya, dan mengaplikasikan ilmu teknik dalam konteks nyata.'
        };
      case 'Workshop':
        return {
          imgSrc: '/img/kepengurusan/Divisi/Workshop.png',
          leaders: [
            { title: "Ketua", name: "Alexander Johan Pramudito" },
            { title: "Wakil Ketua", name: "Stasya Adelia" },
            { title: "Sekretaris I", name: "Desi Dewantri Simamora" },
            { title: "Sekretaris II", name: "Farida Yeni Asih" },
            { title: "Bendahara I", name: "Isti Salsabila" },
            { title: "Bendahara II", name: "Nisa Faizatul Azkiya" }

          ],
          paragraph1: 'Divisi Workshop berfungsi sebagai sarana pengembangan softskill untuk para anggotanya melalui program kerja dan seluruh kegiatan di dalamnya. Namun, peran utama Divisi Workshop adalah sebagai wadah untuk mendukung, mengembangkan, dan meningkatkan kualitas anggota KMTETI FT UGM dalam menerapkan ilmu-ilmu (hardskill), pengembangan aplikasi, dan berbagai penelitian di Departemen Teknik Elektro dan Teknologi Informasi FT UGM. Diharapkan fungsi tersebut dapat bermanfaat bagi kepentingan internal KMTETI, dan dalam pengembangannya menjangkau eksternal KMTETI secara luas.',
          paragraph2: 'Divisi Workshop menyediakan berbagai pelatihan untuk mahasiswa, seperti Proteus untuk simulasi rangkaian elektronik, MATLAB untuk praktikum dan proyek, serta PLC, Arduino, Web Development, Data Science, ETAP, dan Rust. Selain itu, kami juga mengadakan berbagai kompetisi menarik, seperti Technocorner yang mencakup seminar nasional, lomba line follower, transporter, serta berbagai kompetisi robotik seperti SumoBot dan SoccerBot. Ada juga Comrade untuk Competitive Programming, Capture the Flag yang berfokus pada keamanan sistem, Data Science Competition untuk menganalisis data, dan Web Development Competition untuk menguji kemampuan dalam pengembangan website. Selain itu, kami mendukung mahasiswa DTETI dengan informasi dan pembinaan terkait pendidikan melalui program EL NINO, serta membantu mempersiapkan mahasiswa untuk berbagai perlombaan dan kompetisi di bidang Teknik Elektro dan Teknologi Informasi.'
        };
    }
  };

  const content = getContent(selectedItem);

  return (
    <main className="lg:px-[17.396vw] px-[7.778vw] py-[14.778vw] lg:py-[12.292vw] flex flex-col items-center justify-center bg-white">
      <div className='flex flex-row mb-[3.75vw]' 
            data-aos="fade-up"
            data-aos-duration={aosDuration}
            data-aos-delay={getDelay({turn: 1})}>
        <div className="flex lg:flex-row flex-col flex-grow">
          <h1 className="text-black lg:text-[2.344vw] text-[5.556vw] font-montserrat font-medium lg:font-redditsanssemibold self-start lg:self-center lg:mb-0 w-[50vw] lg:w-fit lg:leading-none">Divisi&nbsp;</h1>
          <h1 className="text-black lg:text-[2.344vw] text-[5.556vw] font-montserrat font-medium lg:font-redditsanssemibold self-start lg:self-center w-[50vw] lg:w-fit lg:leading-none">KMTETI FT UGM</h1>
        </div>
        <div className='relative w-fit flex flex-col lg:gap-y-[0.903vw] gap-y-[1.806vw] lg:ml-[1vw] self-center z-[9999]'>
          <div
            className='w-fit lg:w-[16vw] px-[4vw] lg:px-[0.5vw] bg-white lg:rounded-[0.2vw] rounded-[0.5vw] flex justify-center items-center lg:gap-x-[0.5vw] gap-x-[1vw] pointer-events-auto cursor-pointer drop-shadow-xl self-end border-[0.1vw] border-black'
            onClick={toggleDropdown}
          >
            <h4 className='font-dosis font-semibold lg:text-[1.5vw] text-[2.778vw] text-black flex-grow'>{selectedItem}</h4>
            <IoMdArrowDropdown
              color='#000000'
              className={`w-[3.889vw] lg:w-[1.667vw] h-fit transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
          </div>
          <div
            ref={dropdownRef}
            className='absolute top-full left-0 w-full flex flex-col lg:gap-y-[0.903vw] gap-y-[1.806vw] overflow-hidden transition-all duration-300 ease-in-out drop-shadow-xl bg-white z-10'
            style={{ height: '0px' }}
          >
            {items
              .filter(item => item !== selectedItem)
              .map(item => (
                <div
                  key={item}
                  className='px-[1vw] bg-white flex justify-center items-center lg:gap-x-[0.5vw] gap-x-[1vw] pointer-events-auto cursor-pointer text-center'
                  onClick={() => handleItemClick(item)}
                >
                  <h4 className='font-dosis font-semibold lg:text-[1.5vw] text-[2.778vw] text-black'>{item}</h4>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-start lg:gap-y-[2vw] gap-y-[6vw]'
>
        <img className=" w-full h-full" src={content.imgSrc} alt={selectedItem} />
        <div className='flex flex-col justify-start items-start lg:gap-y-[2vw] gap-y-[6vw]' 
            data-aos="fade-up"
            data-aos-duration={aosDuration}
            data-aos-delay={getDelay({turn: 2})}>
          <ul className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal self-start">
                  {content.leaders?.map((leader, index) => (
                  <li key={index}>
                      <span className="font-archivosemibold">{leader.title}:</span> {leader.name}
                  </li>
                  ))}
              </ul>
              { content.paragraph1?.length > 0 && (
              <p className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal items-start">
                  {content.paragraph1 || ''}
              </p>
          )
          }
          { content.paragraph2?.length > 0 && (
              <p className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal items-start">
                  {content.paragraph2 || ''}
              </p>
          )
          }
          { content.paragraph3?.length > 0 && (
              <p className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal items-start">
                  {content.paragraph3 || ''}
              </p>
          )
          }
          { content.paragraph4?.length > 0 && (
              <p className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal items-start">
                  {content.paragraph4 || ''}
              </p>
          )
          }
          <div>
              {content.additionalPrograms && content.additionalPrograms?.length > 0 && (
                  <ul className=" lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal list-decimal self-start">
                      {content.additionalPrograms?.map((program, index) => (
                      <li key={index}>{program}</li>
                      ))}
                  </ul>
                  )}
          </div>
          <div>
              {content.additionalProgramsbullets && content.additionalProgramsbullets?.length > 0 && (
                  <ul className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify leading-normal list-disc self-start">
                      {content.additionalProgramsbullets?.map((program, index) => (
                      <li key={index}>{program}</li>
                      ))}
                  </ul>
              )}
          </div>
        </div>
      </div>
    </main>
  )
}
