import Link from "next/link"

/* eslint-disable @next/next/no-img-element */
export default function Navbar() {
    return(
        <nav class="bg-white h-[5.051.9vw] w-full sticky top-0 z-50">
        <div class="w-full flex flex-wrap items-center justify-between mx-auto p-4">
            <Link className="flex justify-center items-center" href="">
                <img className="ml-[4.688vw]" src="\img\allPage\Navbar\kmteti.png" alt="" />
                <h1 className="font-redditsanssemibold text-[2.083vw] text-black ml-[1.198vw]">KMTETI FT UGM</h1>
            </Link>
            <div>
                <Link className="p-[1.9vw] font-redditsans text-black drop-shadow-2xl hover:text-white hover:bg-black transition-all duration-200 ease-in-out" href="/">Home</Link>
                <Link className="p-[1.9vw] font-redditsans text-black drop-shadow-2xl hover:text-white hover:bg-black transition-all duration-200 ease-in-out" href="/kepengurusan">Kepengurusan</Link>
                <Link className="p-[1.9vw] font-redditsans text-black drop-shadow-2xl hover:text-white hover:bg-black transition-all duration-200 ease-in-out" href="/bso">BSO</Link>
                <Link className="p-[1.9vw] font-redditsans text-black drop-shadow-2xl hover:text-white hover:bg-black transition-all duration-200 ease-in-out" href="/artikel">Article</Link>
                <Link className="p-[1.9vw] font-redditsans text-black drop-shadow-2xl hover:text-white hover:bg-black transition-all duration-200 ease-in-out" href="/teti_champion">TETI Champion</Link>
                <Link className="p-[1.9vw] font-redditsans text-black drop-shadow-2xl hover:text-white hover:bg-black transition-all duration-200 ease-in-out" href="/kesekretariatan">Kesekretariatan</Link>
            </div>
        </div>
        </nav>
    )
}