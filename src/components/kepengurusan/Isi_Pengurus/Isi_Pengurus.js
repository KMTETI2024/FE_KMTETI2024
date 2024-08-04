/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { FaAngleRight } from "react-icons/fa";

export default function Isi_Pengurus() {
    return(
        <section className="">
            <section className="z-[10] lg:flex flex-row space-x-[4.323vw] pt-[6.771vw] pb-[6.771vw] hidden">
                <Link href="" className="relative w-[26.146vw] h-[34.323vw] rounded-[2.188vw] group ">
                    <img className="absolute w-[26.146vw] h-[34.323vw] object-cover rounded-[2.188vw] group-hover:grayscale group-hover:blur-[0.1vw]" src="/img/kepengurusan/PH.png" alt="" />
                    <h1 className="text-white absolute font-redditsanssemibold text-[4.323vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center opacity-0 group-hover:opacity-100 transition">Pengurus Harian</h1>
                </Link>
                <Link href="" className="relative w-[26.146vw] h-[34.323vw] rounded-[2.188vw] group">
                    <img className="absolute w-[26.146vw] h-[34.323vw] object-cover rounded-[2.188vw] group-hover:grayscale group-hover:blur-[0.1vw]" src="/img/kepengurusan/PO.png" alt="" />
                    <h1 className="text-white absolute font-redditsanssemibold text-[4.323vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center opacity-0 group-hover:opacity-100 transition">Biro</h1>
                    </Link>
                <Link href="" className="relative w-[26.146vw] h-[34.323vw] rounded-[2.188vw] group">
                    <img className="absolute w-[26.146vw] h-[34.323vw] object-cover rounded-[2.188vw] group-hover:grayscale group-hover:blur-[0.1vw]" src="/img/kepengurusan/Divisi.png" alt="" />
                    <h1 className="text-white absolute font-redditsanssemibold text-[4.323vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center opacity-0 group-hover:opacity-100 transition">Divisi</h1>
                </Link>
            </section>
            <section className="h-[200vw] w-full flex-col flex lg:flex-row justify-center items-center bg-white lg:hidden">
                <img src="/img/home/circle-tr.svg" alt="" className="absolute top-[-20vw] right-0 lg:hidden w-[52.386vw]" />
                <div className="z-30 flex flex-col gap-y-[6vw]">
                    <div className="flex flex-col">
                        <h2 className="font-montserrat font-medium text-black text-[5.556vw] text-center self-start">Pengurus Harian</h2>
                        <div className="relative flex flex-col">
                        <img className="w-[93.333vw]" src="/img/kepengurusan/PH-mobile.png" alt="" />
                        <Link href="/" className="bg-[#23292B] rounded-full w-fit flex self-end absolute bottom-[-2.5vw]">
                            <h2 className="font-montserrat font-medium text-[3.333vw] text-white px-[4vw]  ">Selengkapnya</h2>
                            <div className="bg-[#066EB5] rounded-full justify-center items-center flex w-full h-full">
                            <FaAngleRight color="#FFFFFF" className="w-[5vw] h-[5vw]" />
                            </div>
                        </Link>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-montserrat font-medium text-black text-[5.556vw] text-center self-start">Divisi KMTETI</h2>
                        <div className="relative flex flex-col">
                        <img className="w-[93.333vw]" src="/img/kepengurusan/Divisi-mobile.png" alt="" />
                        <Link href="/" className="bg-[#23292B] rounded-full w-fit flex self-end absolute bottom-[-2.5vw]">
                            <h2 className="font-montserrat font-medium text-[3.333vw] text-white px-[4vw]  ">Selengkapnya</h2>
                            <div className="bg-[#066EB5] rounded-full justify-center items-center flex w-full h-full">
                            <FaAngleRight color="#FFFFFF" className="w-[5vw] h-[5vw]" />
                            </div>
                        </Link>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-montserrat font-medium text-black text-[5.556vw] text-center self-start">Biro KMTETI</h2>
                        <div className="relative flex flex-col">
                        <img className="w-[93.333vw]" src="/img/kepengurusan/Biro-mobile.png" alt="" />
                        <Link href="/" className="bg-[#23292B] rounded-full w-fit flex self-end absolute bottom-[-2.5vw]">
                            <h2 className="font-montserrat font-medium text-[3.333vw] text-white px-[4vw]  ">Selengkapnya</h2>
                            <div className="bg-[#066EB5] rounded-full justify-center items-center flex w-full h-full">
                            <FaAngleRight color="#FFFFFF" className="w-[5vw] h-[5vw]" />
                            </div>
                        </Link>
                        </div>
                    </div>
                </div>
                <img className="bottom-[-13.5vw] left-0 absolute w-full z-0 lg:hidden" src="/img/home/circle-bc.svg" alt="" />
            </section>
        </section>
    )
}