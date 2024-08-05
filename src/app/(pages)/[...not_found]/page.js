import Link from 'next/link'
 
export default function NotFound() {
    return (
    <div className='h-screen px-[2vw] flex justify-center items-center flex-col gap-y-[3vw]'>
        <h1 className='font-montserrat font-extrabold text-black lg:text-[20vw] text-[25vw] leading-none'>OOPS!</h1>
        <p className='font-montserrat font-semibold text-black lg:text-[2vw] text-[3vw] text-center'>Maaf, halaman yang anda tuju tidak dapat ditemukan (error 404)</p>
        <Link href="/" className="z-[2] w-[28.889vw] lg:w-[11.667vw] h-[8.611vw] lg:h-[2.969vw] text-black font-montserrat font-semibold bg-white text-[2.333vw] lg:text-[1vw] text-center justify-center items-center flex rounded-[12.778vw] lg:rounded-[2.396vw] drop-shadow-2xl mt-[1vw]">
            <p>Kembali ke Beranda</p>
        </Link>
    </div>
    )
}