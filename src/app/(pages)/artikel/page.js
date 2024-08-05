import React from 'react'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'

function Artikel() {
  return (
    <div className='bg-[#D2E4A9]'>
        <div className='py-[12.448vw] px-[5.208vw] flex-row justify-center items-center gap-x-[3.49vw] lg:flex hidden'>
            <Link href="/artikel/press-release" className='w-[19.167vw] h-[26.51vw] relative group'>
                <img className='absolute z-[15] m-auto left-0 right-0 top-0 bottom-0' src="/img/artikel/line.png" alt="" />
                <div className='w-[19.167vw] h-[2.424vw] bg-[#066EB5] absolute z-[20] m-auto left-0 right-0 top-0 bottom-0 flex justify-center items-center -rotate-3 object-contain shadow-xl'>
                    <h2 className='font-redditsanssemibold text-[1.875vw] text-white'>
                        Press Release
                    </h2>
                </div>
                <div className='w-[19.167vw] h-full z-[10] bg-white bg-opacity-60 absolute rounded-[2vw]'></div>
                <img className='w-[19.167vw] rounded-[2.00vw]' src="/img/artikel/pr.png" alt="" />
            </Link>
            <Link href="/artikel/elektropos" className='w-[19.167vw] h-[26.51vw] relative group'>
                <img className='absolute z-[15] m-auto left-0 right-0 top-0 bottom-0' src="/img/artikel/line.png" alt="" />
                <div className='w-[19.167vw] h-[2.424vw] bg-[#066EB5] absolute z-[20] m-auto left-0 right-0 top-0 bottom-0 flex justify-center items-center -rotate-3 object-contain shadow-xl'>
                    <h2 className='font-redditsanssemibold text-[1.875vw] text-white'>
                        Elektropos
                    </h2>
                </div>
                <div className='w-[19.167vw] h-full z-[10] bg-white bg-opacity-60 absolute rounded-[2vw]'></div>
                <img className='w-[19.167vw] rounded-[2.00vw]' src="/img/artikel/elektropos.png" alt="" />
            </Link>
            <Link href="/artikel/voltamagz" className='w-[19.167vw] h-[26.51vw] relative group'>
                <img className='absolute z-[15] m-auto left-0 right-0 top-0 bottom-0' src="/img/artikel/line.png" alt="" />
                <div className='w-[19.167vw] h-[2.424vw] bg-[#066EB5] absolute z-[20] m-auto left-0 right-0 top-0 bottom-0 flex justify-center items-center -rotate-3 object-contain shadow-xl'>
                    <h2 className='font-redditsanssemibold text-[1.875vw] text-white'>
                        Voltamagz
                    </h2>
                </div>
                <div className='w-[19.167vw] h-full z-[10] bg-white bg-opacity-60 absolute rounded-[2vw]'></div>
                <img className='w-[19.167vw] rounded-[2.00vw]' src="/img/artikel/voltamagz.png" alt="" />
            </Link>
        </div>
        <div className='flex flex-col justify-center items-center py-[25.111vw] px-[6.667vw] gap-y-[12.5vw] lg:hidden'>
            <div className='h-[49.722vw] relative group'>
                <div className='absolute z-[20] flex flex-col justify-center items-center w-full h-[49.722vw]'>
                    <h1 className='font-redditsanssemibold text-white text-[8.056vw]'>Press Release</h1>
                    <Link href="/kepengurusan/press-release" className="bg-[#23292B] rounded-full w-fit flex">
                        <h2 className="font-montserrat font-medium text-[3.333vw] text-white px-[4vw]  ">Selengkapnya</h2>
                        <div className="bg-[#066EB5] rounded-full justify-center items-center flex w-full h-full">
                            <FaAngleRight color="#FFFFFF" className="w-[5vw] h-[5vw]" />
                        </div>
                    </Link>
                </div>
                <div className='z-[10] w-full bg-[#002138] bg-opacity-60 absolute h-full'></div>
                <img className='object-fill h-full' src="/img/artikel/pr-mobile.png" alt="" />
                
            </div>
            <div className='h-[49.722vw] relative group'>
                <div className='absolute z-[20] flex flex-col justify-center items-center w-full h-[49.722vw]'>
                    <h1 className='font-redditsanssemibold text-white text-[8.056vw]'>Elektropos</h1>
                    <Link href="/kepengurusan/elektropos" className="bg-[#23292B] rounded-full w-fit flex">
                        <h2 className="font-montserrat font-medium text-[3.333vw] text-white px-[4vw]  ">Selengkapnya</h2>
                        <div className="bg-[#066EB5] rounded-full justify-center items-center flex w-full h-full">
                            <FaAngleRight color="#FFFFFF" className="w-[5vw] h-[5vw]" />
                        </div>
                    </Link>
                </div>
                <div className='z-[10] w-full bg-[#002138] bg-opacity-60 absolute h-full'></div>
                <img className='object-fill h-full' src="/img/artikel/elektropos-mobile.png" alt="" />
                
            </div>
            <div className='h-[49.722vw] relative group'>
                <div className='absolute z-[20] flex flex-col justify-center items-center w-full h-[49.722vw]'>
                    <h1 className='font-redditsanssemibold text-white text-[8.056vw]'>Voltamagz</h1>
                    <Link href="/kepengurusan/voltamagz" className="bg-[#23292B] rounded-full w-fit flex">
                        <h2 className="font-montserrat font-medium text-[3.333vw] text-white px-[4vw]  ">Selengkapnya</h2>
                        <div className="bg-[#066EB5] rounded-full justify-center items-center flex w-full h-full">
                            <FaAngleRight color="#FFFFFF" className="w-[5vw] h-[5vw]" />
                        </div>
                    </Link>
                </div>
                <div className='z-[10] w-full bg-[#002138] bg-opacity-60 absolute h-full'></div>
                <img className='object-fill h-full' src="/img/artikel/voltamagz-mobile.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Artikel;