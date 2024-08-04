/* eslint-disable @next/next/no-img-element */
"use client";
export default function Hero_Pengurus() {
    const handleClick = () => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        });
      };
    return(
        <section className="relative flex-col items-center justify-center h-screen w-full lg:flex hidden">
                <img src="/img/kepengurusan/bg.png" className="z-[1] absolute h-[120vh] w-full object-cover" alt="" />
                <h1 className=" font-redditsanssemibold text-[6.354vw] z-[2] text-black">Kepengurusan</h1>
                <h2 className="text-[2.292vw] w-[39.063vw] text-black font-redditsanslight text-center">Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi FT UGM 2024</h2>
                <img className="absolute z-[5] bottom-[3vw] w-[1.354vw] animate-movingPointer hover:cursor-pointer" src="/img/kepengurusan/arrow.png " alt="" onClick={() => handleClick()} />
        </section>
    )
}