/* eslint-disable @next/next/no-img-element */
export default function Isi_Pengurus() {
    return(
        <section className="z-[10] flex flex-row space-x-[4.323vw] pt-[6.771vw] pb-[6.771vw]">
            <a href="" className="relative w-[26.146vw] h-[34.323vw] rounded-[2.188vw] group ">
                <img className="absolute object-cover rounded-[2.188vw] group-hover:grayscale group-hover:blur-[0.1vw]" src="/img/kepengurusan/PH.png" alt="" />
                <h1 className="text-white absolute font-redditsanssemibold text-[4.323vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center opacity-0 group-hover:opacity-100 transition">Pengurus Harian</h1>
            </a>
            <a href="" className="relative w-[26.146vw] h-[34.323vw] rounded-[2.188vw] group">
                <img className="absolute object-cover rounded-[2.188vw] group-hover:grayscale group-hover:blur-[0.1vw]" src="/img/kepengurusan/PO.png" alt="" />
                <h1 className="text-white absolute font-redditsanssemibold text-[4.323vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center opacity-0 group-hover:opacity-100 transition">Biro</h1>
                </a>
            <a href="" className="relative w-[26.146vw] h-[34.323vw] rounded-[2.188vw] group">
                <img className="absolute object-cover rounded-[2.188vw] group-hover:grayscale group-hover:blur-[0.1vw]" src="/img/kepengurusan/Divisi.png" alt="" />
                <h1 className="text-white absolute font-redditsanssemibold text-[4.323vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center opacity-0 group-hover:opacity-100 transition">Divisi</h1>
            </a>
        </section>
    )
}