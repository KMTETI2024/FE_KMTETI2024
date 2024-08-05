"use client";

/* eslint-disable @next/next/no-img-element */
import { IoMdArrowDropdown } from 'react-icons/io';
import { useEffect, useRef, useState } from 'react';

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
          paragraph1: 'Divisi Advokasi Kesejahteraan Mahasiswa (Adkesma) merupakan divisi yang membantu meningkatkan kesejahteraan mahasiswa yang menangani berbagai hal baik akademik maupun non-akademik dengan cepat tanggap, serta membantu permasalahan internal di lingkup DTETI FT UGM. Kami memiliki 3 Subdivisi yaitu Subdiv Advokasi Umum, Subdiv Advokasi Akademis, dan Subdiv Media Adkesma.',
          paragraph2: 'Subdiv Advokasi Umum bertanggung jawab pada semua kegiatan dan aspirasi yang berkaitan tentang kebutuhan non-akademik, Subdiv Advokasi Akademis bertanggung jawab dalam semua kegiatan dan aspirasi yang berkatian dengan kebutuhan akademik, dan Subdiv Media Adkesma bertanggung jawab pada pengelolaan media sosial Adkesma dan penyebarluasan informasi dari departemen.'
        };
      case 'Elektropreneur':
        return {
          imgSrc: '/img/kepengurusan/Divisi/EP.png',
          paragraph1: 'Divisi Electropreneur merupakan divisi di KMTETI yang memberi tempat bagi mahasiswa/i DTETI yang ingin memiliki skill menjadi seorang entrepreneur. Dalam divisi ini, jiwa entrepreneur kita akan dilatih dan dikembangkan supaya menjadi entrepreneur yang siap bersaing. Divisi Electropreneur memiliki jargon: Sukses Muda!! Do it Duit Do it!',
          paragraph2: ''
        };
      case 'Humas':
        return {
          imgSrc: '/img/kepengurusan/Divisi/Humas.png',
          paragraph1: 'Divisi Hubungan Masyarakat (Humas) KMTETI merupakan interkoneksi KMTETI dengan pihak luar. Baik dengan pihak internal DTETI, alumni mahasiswa DTETI, sosial masyarakat, dan pihak eksternal lainnya. Divisi ini  akan menjalin kerjasama sehingga akan tercipta hubungan baik yang saling membangun untuk kebermanfaatan bersama. Divisi Humas  juga memberikan stimulus kepedulian dan kepekaan sosial di dalam jiwa mahasiswa DTETI. Divisi ini memiliki “image asik dan bertanggung jawab” sehingga selain menjalankan program-program kerjanya, divisi ini juga menjalankan beberapa kegiatan sebagai sarana refreshing dari rutinitas.',
          paragraph2: ''
        };
      case 'Infokom':
        return {
          imgSrc: '/img/kepengurusan/Divisi/Infokom.png',
          paragraph1: 'Divisi Infokom berperan dalam penyebaran informasi di dalam lingkungan DTETI dalam bentuk media cetak dan digital Divisi Infokom juga mengembangkan minat semua mahasiswa DTETI dalam bidang jurnalistik dan multimedia. Termasuk di dalamnya menampung aspirasi mahasiswa DTETI lewat media tulis, pengembangan jejaring sosial KMTETI, dan pelatihan bidang multimedia untuk seluruh anggota KMTETI.',
          paragraph2: ''
        };
      case 'Minat & Bakat':
        return {
          imgSrc: '/img/kepengurusan/Divisi/Mikat.png',
          paragraph1: 'Divisi mikat adalah wadah bagi para mahasiswa Departemen Teknik Elektro dan Teknologi Informasi untuk menuangkan minat dan bakatnya. Divisi Mikat ini terbagi menjadi 4 subdivisi untuk dapat mewadahi seluruh minat dan bakat mahasiswa DTETI , subdivisi tersebut diantaranya adalah Subdivisi Olahraga , Subdivisi Seni , Subdivisi Electroventura , dan Subdivisi SUTET.',
          paragraph2: ''
        };
      case 'Sosial Masyarakat':
        return {
          imgSrc: '/img/kepengurusan/Divisi/Sosmas.png',
          paragraph1: 'Divisi Sosial Masyarakat (Sosmas) merupakan divisi yang bertanggung jawab dalam kegiatan di bidang sosial kemasyarakatan DTETI UGM. Divisi ini bertujuan untuk membentuk citra DTETI UGM yang peduli antar sesama. Divisi Sosmas juga mengedepankan pengembangan stimulus kepedulian serta kepekaan sosial di dalam jiwa mahasiswa DTETI untuk menumbuhkan sifat kepedulian di lingkungan masyarakat.',
          paragraph2: ''
        };
      case 'Workshop':
        return {
          imgSrc: '/img/kepengurusan/Divisi/Workshop.png',
          paragraph1: 'Divisi Workshop berfungsi sebagai sarana pengembangan softskill untuk para anggotanya melalui program kerja dan seluruh kegiatan di dalamnya. Namun, peran utama Divisi Workshop adalah sebagai wadah untuk mendukung, mengembangkan, dan meningkatkan kualitas anggota KMTETI FT UGM dalam menerapkan ilmu-ilmu (hardskill), pengembangan aplikasi, dan berbagai penelitian di Departemen Teknik Elektro dan Teknologi Informasi FT UGM. Diharapkan fungsi tersebut dapat bermanfaat bagi kepentingan internal KMTETI, dan dalam pengembangannya menjangkau eksternal KMTETI secara luas.',
          paragraph2: ''
        };
      default:
        return {
          imgSrc: '/img/kepengurusan/BPO/default.png',
          paragraph1: 'Pilih divisi untuk melihat konten.',
          paragraph2: ''
        };
    }
  };

  const content = getContent(selectedItem);

  return (
    <main className="lg:px-[17.396vw] px-[7.778vw] py-[14.778vw] lg:py-[12.292vw] flex flex-col items-center justify-center bg-white">
      <div className='flex flex-row mb-[3.75vw]'>
        <div className="flex lg:flex-row flex-col flex-grow">
          <h1 className="text-black lg:text-[2.344vw] text-[5.556vw] font-montserrat font-medium lg:font-redditsanssemibold self-start lg:self-center lg:mb-0 w-[50vw] lg:w-fit lg:leading-none">Divisi &nbsp;</h1>
          <h1 className="text-black lg:text-[2.344vw] text-[5.556vw] font-montserrat font-medium lg:font-redditsanssemibold self-start lg:self-center w-[50vw] lg:w-fit lg:leading-none">KMTETI FT UGM</h1>
        </div>
        <div className='relative w-fit flex flex-col lg:gap-y-[0.903vw] gap-y-[1.806vw] lg:ml-[1vw] self-center'>
          <div
            className='w-fit px-[4vw] lg:px-[0.5vw] bg-white lg:rounded-[0.2vw] rounded-[0.5vw] flex justify-center items-center lg:gap-x-[0.5vw] gap-x-[1vw] pointer-events-auto cursor-pointer drop-shadow-xl self-end border-[0.1vw] border-black'
            onClick={toggleDropdown}
          >
            <h4 className='font-dosis font-semibold lg:text-[0.938vw] text-[2.778vw] text-black'>{selectedItem}</h4>
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
                  <h4 className='font-dosis font-semibold lg:text-[0.938vw] text-[2.778vw] text-black'>{item}</h4>
                </div>
              ))}
          </div>
        </div>
      </div>
      <img className="mb-[2.604vw] w-full h-full" src={content.imgSrc} alt={selectedItem} />
      <p className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal lg:leading-[1.6vw] mb-[1.75vw]">
        {content.paragraph1}
      </p>
      <p className="lg:font-archivo font-archivolight text-[3.333vw] lg:text-[1.302vw] text-[#1E1E1E] text-justify whitespace-pre-line leading-normal lg:leading-[1.6vw]">
        {content.paragraph2}
      </p>
    </main>
  )
}
