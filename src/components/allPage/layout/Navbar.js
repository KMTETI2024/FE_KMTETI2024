"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const visible = prevScrollPos > currentScrollPos;

            setPrevScrollPos(currentScrollPos);
            setVisible(visible);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos, visible]);

    return (
        <nav className={`flex-no-wrap fixed flex bg-white h-[5.0519vw] w-full top-[0vw] z-50 transition-transform duration-300 ${!visible ? '-translate-y-full' : 'translate-y-0'}`}>
            <div className="w-full flex flex-wrap items-center justify-between">
                <Link className="ml-[4.688vw] flex justify-center items-cente w-fit h-fullr" href="">
                    <img className=" w-[3.49vw] h-fit" src="/img/allPage/Navbar/kmteti.png" alt="" />
                    <h1 className="font-redditsanssemibold text-[2.083vw] text-black ml-[1.198vw]">KMTETI FT UGM</h1>
                </Link>
                <div className="w-fit flex mr-[4.74vw]">
                    <Link className="leading-none text-[0.99vw] p-[1.9vw] font-redditsans text-black drop-shadow-2xl hover:text-white hover:bg-black transition-all duration-200 ease-in-out" href="/">
                        <h1 className="text-[0.99vw]">Home</h1></Link>
                    <Link className="leading-none text-[0.99vw] p-[1.9vw] font-redditsans text-black drop-shadow-2xl hover:text-white hover:bg-black transition-all duration-200 ease-in-out" href="/kepengurusan"><h1 className="text-[0.99vw]">Kepengurusan</h1></Link>
                    <Link className="leading-none text-[0.99vw] p-[1.9vw] font-redditsans text-black drop-shadow-2xl hover:text-white hover:bg-black transition-all duration-200 ease-in-out" href="/bso"><h1 className="text-[0.99vw]">BSO</h1></Link>
                    <Link className="leading-none text-[0.99vw] p-[1.9vw] font-redditsans text-black drop-shadow-2xl hover:text-white hover:bg-black transition-all duration-200 ease-in-out" href="/artikel"><h1 className="text-[0.99vw]">Article</h1></Link>
                    <Link className="leading-none text-[0.99vw] p-[1.9vw] font-redditsans text-black drop-shadow-2xl hover:text-white hover:bg-black transition-all duration-200 ease-in-out" href="/teti_champion"><h1 className="text-[0.99vw]">TETI Champion</h1></Link>
                    <Link className="flex justify-center items-center leading-none text-[0.99vw] font-redditsans text-black drop-shadow-2xl hover:text-white hover:bg-black transition-all duration-200 ease-in-out" href="/kesekretariatan">
                        <div className=" flex justify-center items-center bg-black w-[13.854vw] h-[3.49vw] rounded-[4.063vw] text-white">
                            <h1>
                            Kesekretariatan
                            </h1>
                        </div></Link>
                </div>
            </div>
        </nav>
    );
}
