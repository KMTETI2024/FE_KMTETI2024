/* eslint-disable @next/next/no-img-element */
export default function Hero_Pengurus() {
    return(
        <section className="relative flex flex-col items-center justify-center h-screen w-full">
                <img src="/img/kepengurusan/bg.png" className="z-[1] absolute h-[120vh] w-full object-cover" alt="" />
                <h1 className=" font-redditsanssemibold text-[6.354vw] z-[2] text-black">Kepengurusan</h1>
                <h2 className="text-[2.292vw] w-[39.063vw] text-black font-redditsanslight text-center">Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi FT UGM 2024</h2>
                <img className="absolute bottom-[3vw]" src="/img/kepengurusan/arrow.png" alt="" />
        </section>
    )
}