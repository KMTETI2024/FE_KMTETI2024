/* eslint-disable @next/next/no-img-element */
export default function Intro_Beranda() {
    return (
        <div className="w-full h-screen flex flex-row justify-center items-center bg-white">
        <div className="relative w-full h-screen flex flex-col justify-center items-center">
          <img src="/img/home/Rectangle.png" className="z-[0] absolute object-cover h-screen w-screen" alt="" />
          <div className="bg-black w-full absolute h-screen opacity-70"></div>
          <div className="z-[9]">
            <iframe className="z-[9999] w-[50.729vw] h-[28.542vw]" src="https://www.youtube.com/embed/PGAydha01RI?si=8uSzuCJU27CGtcdX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <h2 className="z-[9] text-[3.646vw] font-redditsanssemibold text-white mt-[2vw]">Tagline Kita Sekarang</h2>
          <hr className="z-[9] w-[46.12vw] h-[0.2vw] bg-white"></hr>
          <h3 className="z-[9] text-[1.823vw] font-redditsanslight text-white">Gala Nawasena KMTETI FT UGM 2024</h3>
        </div>
      </div>
    )
}