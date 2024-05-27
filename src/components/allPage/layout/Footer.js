/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative flex flex-col">
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
                    <div className="flex gap-x-[11.094vw]">
                        <div className="flex gap-x-[1.979vw]">
                            <a className="w-[4.115vw] h-fit" href="https://www.instagram.com/kmteti">
                                <img className="w-[4.115vw] h-fit" src="/img/allPage/Footer/IG.png" alt="" />
                            </a>
                            <a className="w-[4.763vw] h-fit" href="https://line.me/R/ti/p/@uai8629v">
                                <img className="w-[4.763vw] h-fit" src="/img/allPage/Footer/Line.png" alt="" />
                            </a>
                            <a className="w-[4.115vw] h-fit" href="https://www.linkedin.com/company/kmteti-ft-ugm/mycompany/">
                                <img className="w-[4.115vw] h-fit" src="/img/allPage/Footer/Linkedin.png" alt="" />
                            </a>
                            <a className="w-[4.948vw] h-fit" href="https://www.youtube.com/@kmteti">
                                <img className="w-[4.948vw]" src="/img/allPage/Footer/Youtube.png" alt="" />
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
        </footer>
    )
}