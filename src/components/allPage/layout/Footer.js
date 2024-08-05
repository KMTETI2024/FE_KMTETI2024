/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative flex flex-col">
            <div className="hidden lg:flex relative flex-col">
                <div className="absolute -top-[5vw] z-[20] bg-gradient-to-b from-transparent to-[#e6e6e6] w-full h-[5vw]"></div>
                <div className="w-full h-[19.427vw] bg-[#F9F9F9] py-[3.75vw] flex justify-center items-center ">
                    <img className="w-[10.677vw]" src="/img/allPage/Footer/kmteti.png" alt="" />
                    <div>
                        <h1 className="font-redditsanssemibold text-[4.01vw] leading-none text-black">KMTETI</h1>
                        <h2 className="font-redditsans text-[2.083vw] text-black">FT UGM</h2>
                    </div>
                    <div className="ml-[7.396vw] flex flex-col">
                        <div className="flex mb-[1.771vw] gap-x-[26.1vw]">
                            <h2 className="font-redditsansbold text-[2.135vw] text-black">Reach Us</h2>
                            <h2 className="font-redditsansbold text-[2.135vw] text-black">Navigate</h2>
                        </div>
                        <hr className="z-[9] w-[61.406vw] border-[0.2vw] border-black mb-[2.448vw]"></hr>
                        <div className="flex gap-x-[11.694vw] place-items-center">
                            <div className="flex gap-x-[1.979vw] items-center">
                                <a className="w-[4.115vw] h-fit" href="https://www.instagram.com/kmteti">
                                    <img className="w-[4.115vw] h-fit" src="/img/allPage/Footer/IG.png" alt="" />
                                </a>
                                <a className="w-[4.115vw] h-fit" href="https://line.me/R/ti/p/@uai8629v">
                                    <img className="w-[4.763vw] h-fit" src="/img/allPage/Footer/Line.png" alt="" />
                                </a>
                                <a className="w-[4.115vw] h-fit" href="https://www.linkedin.com/company/kmteti-ft-ugm/mycompany/">
                                    <img className="w-[4.115vw] h-fit" src="/img/allPage/Footer/Linkedin.png" alt="" />
                                </a>
                                <a className="w-[4.948vw] h-fit" href="https://www.youtube.com/@kmteti">
                                    <img className="w-[4.948vw] self-center" src="/img/allPage/Footer/Youtube.png" alt="" />
                                </a>
                            </div>
                            <div className="leading-none grid grid-rows-3 grid-flow-col gap-y-[1vw] gap-x-[7.708vw]">
                                <Link className="w-fit text-[1.302vw] font-redditsans text-black transition-all duration-200 ease-in-out" href="/">Home</Link>
                                <Link className="w-fit text-[1.302vw] font-redditsans text-black transition-all duration-200 ease-in-out" href="/kepengurusan">Kepengurusan</Link>
                                <Link className="w-fit text-[1.302vw] font-redditsans text-black transition-all duration-200 ease-in-out" href="/bso">BSO</Link>
                                <Link className="w-fit text-[1.302vw] font-redditsans text-black transition-all duration-200 ease-in-out" href="/artikel">Article</Link>
                                <Link className="w-fit text-[1.302vw] font-redditsans text-black transition-all duration-200 ease-in-out" href="/teti_champion">TETI Champion</Link>
                                <Link className="w-fit text-[1.302vw] font-redditsans text-black transition-all duration-200 ease-in-out" href="/kesekretariatan">Kesekretariatan</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#066EB5] h-[1.51vw] w-full"></div>    

            </div>
            <div>
                <div className="flex lg:hidden flex-col ">
                    <div className="flex items-center justify-center flex-col rounded-t-[2.778vw] drop-shadow-xl">
                        <Link className="w-full h-[19.444vw] font-redditsanssemibold text-center text-black text-[3.889vw] border-b-[0.278vw] border-[#1B1B1B] border-opacity-10 self-center flex items-center justify-center" href="/"><p className=" items-center justify-center">Home</p></Link>
                        <Link className="w-full h-[19.444vw] font-redditsanssemibold text-center text-black text-[3.889vw] border-b-[0.278vw] border-[#1B1B1B] border-opacity-10 self-center flex items-center justify-center" href="/kepengurusan"><p className=" items-center justify-center">Kepengurusan</p></Link>
                        <Link className="w-full h-[19.444vw] font-redditsanssemibold text-center text-black text-[3.889vw] border-b-[0.278vw] border-[#1B1B1B] border-opacity-10 self-center flex items-center justify-center" href="/bso"><p className=" items-center justify-center">BSO</p></Link>
                        <Link className="w-full h-[19.444vw] font-redditsanssemibold text-center text-black text-[3.889vw] border-b-[0.278vw] border-[#1B1B1B] border-opacity-10 self-center flex items-center justify-center" href="/teti_champion"><p className=" items-center justify-center">TETI Champion</p></Link>
                        <Link className="w-full h-[19.444vw] font-redditsanssemibold text-center text-black text-[3.889vw] border-b-[0.278vw] border-[#1B1B1B] border-opacity-10 self-center flex items-center justify-center" href="/artikel"><p className=" items-center justify-center">Artikel</p></Link>
                        <Link className="w-full h-[19.444vw] font-redditsanssemibold text-center text-black text-[3.889vw] border-b-[0.278vw] border-[#1B1B1B] border-opacity-10 self-center flex items-center justify-center" href="/kesekretariatan"><p className=" items-center justify-center">Kesekretariatan Online</p></Link>
                    </div>
                    <div className="flex flex-row h-[31.389vw] bg-[#051224] justify-center items-center gap-x-[3.611vw]">
                        <div className="flex flex-row justify-center items-center gap-x-[2vw]">
                            <img className="w-[12.722vw]" src="/img/allPage/Footer/kmteti.png" alt="" />
                            <h2 className="text-[1.944vw] font-montserrat font-normal text-white w-[35.278vw]">Komplek Fakultas Teknik UGM, Jl. Grafika No.2, Yogyakarta, Sendowo, Sinduadi, Kec. Mlati, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55281</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-[3.611vw] place-items-center">
                                <a className="w-[8.056vw] h-fit invert" href="https://www.linkedin.com/company/kmteti-ft-ugm/mycompany/">
                                    <img className="w-[8.056vw] h-fit" src="/img/allPage/Footer/Linkedin.png" alt="" />
                                </a>
                                <a className="w-[8.056vw] h-fit" href="https://www.instagram.com/kmteti">
                                    <img className="w-[8.056vw] h-fit invert object-center" src="/img/allPage/Footer/IG.png" alt="" />
                                </a>
                                <a className="w-[8.056vw] h-fit invert" href="https://www.youtube.com/@kmteti">
                                    <img className="w-[8.056vw]" src="/img/allPage/Footer/Youtube.png" alt="" />
                                </a>
                                <a className="w-[8.056vw] h-fit" href="https://line.me/R/ti/p/@uai8629v">
                                    <img className="w-[8.056vw] h-fit invert" src="/img/allPage/Footer/Line.png" alt="" />
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}