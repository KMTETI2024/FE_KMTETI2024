/* eslint-disable @next/next/no-img-element */
export default function Kesekretariatan() {
    return(
        <main className="relative flex flex-col items-center justify-center bg-white">
            <div className="relative w-screen h-screen flex flex-col justify-center items-center">
                <img src="/img/kesekretariatan/bg.png" className="z-[1] absolute object-cover h-screen w-full opacity-10" alt="" />
                <div className="z-[2] bg-[#123C59] w-full absolute h-screen opacity-20"></div>
                    <div className="flex flex-row justify-center items-center gap-x-[9vw]">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className=" font-redditsanssemibold text-[3.125vw] z-[2] text-black drop-shadow-2xl text-center w-[35vw]">Alur Peminjaman Alat dan Ruang DTETI</h1>
                            <a href="" className="z-[2] w-[11.667vw] h-[2.969vw] text-black font-redditsanslight bg-white text-[1.25vw] text-center justify-center items-center flex rounded-[2.396vw] drop-shadow-2xl mt-[1vw]">
                                <p>Lihat</p>
                            </a>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="font-redditsanssemibold text-[3.125vw] z-[2] text-black drop-shadow-2xl text-center w-[40vw]">Template&nbsp;
                                <span className=" font-redditsanssemibolditalic">
                                    {'(LPJ, SPJ, dan Keperluan Surat lainnya)'}
                                </span></h1>      
                            <a href="" className="z-[2] w-[11.667vw] h-[2.969vw] text-black font-redditsanslight bg-white text-[1.25vw] text-center justify-center items-center flex rounded-[2.396vw] drop-shadow-2xl mt-[1vw]">
                                <p>Lihat</p>
                            </a>
                        </div>
                    </div>
            </div>
        </main>
    )
}