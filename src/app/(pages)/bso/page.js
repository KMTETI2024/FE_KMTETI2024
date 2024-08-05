/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';

const Card = ({ title, imgSrc, link }) => (
    <div className="flex flex-col">
        <h2 className="text-black font-redditsanssemibold text-[2.083vw] mb-[1.719vw] drop-shadow-xl">{title}</h2> 
        <img className="rounded-[0.521vw] drop-shadow-xl w-[37.396vw] h-fit" src={imgSrc} alt="" />
        <a href={link} className="mt-[1.719vw] self-end text-black font-redditsansitalic text-[1.042vw] drop-shadow-xl">Selengkapnya {">"}{">"}</a>
    </div>
);

Card.propTypes = {
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default function BSO() {
    const cards = [
        { title: 'Beacon', imgSrc: '/img/bso/Beacon.png', link: '#' },
        { title: 'Magatrika', imgSrc: '/img/bso/Magatrika.png', link: '#' },
        { title: 'MPM', imgSrc: '/img/bso/MPM.png', link: '#' },
        { title: 'Night Login', imgSrc: '/img/bso/Night Login.png', link: '#' },
        { title: 'SKI', imgSrc: '/img/bso/SKI.png', link: '#' },
        { title: 'SKK', imgSrc: '/img/bso/SKK.png', link: '#' },
    ];

    return (
        <section>
            <section className="relative flex-col items-center justify-center bg-white lg:flex hidden">
                <div className="grid grid-cols-2 gap-x-[12.708vw] gap-y-[6.198vw] py-[5.729vw]">
                    {cards.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
            </section>
            <section className="h-[350vw] w-full flex-col flex lg:flex-row justify-center items-center bg-white lg:hidden">
                <img src="/img/home/circle-tr.svg" alt="" className="absolute top-[-20vw] right-0 lg:hidden w-[52.386vw]" />
                <div className="z-30 flex flex-col gap-y-[6vw]">
                    <div className="flex flex-col">
                        <h2 className="font-montserrat font-medium text-black text-[5.556vw] text-center self-start">Beacon</h2>
                        <div className="relative flex flex-col">
                            <div className='relative rounded-[2vw]'>
                                <div className='w-full h-full z-[10] bg-[#09B1E8] bg-opacity-15 absolute rounded-[2vw]'></div>
                                <img className="w-[93.333vw] grayscale blur-[0.2vw] rounded-[2vw]" src="/img/bso/Beacon.png" alt="" />
                            </div>
                        <Link href="/bso/Beacon" className="bg-[#23292B] rounded-full w-fit flex self-end absolute bottom-[-2.5vw] z-[20]">
                            <h2 className="font-montserrat font-medium text-[3.333vw] text-white px-[4vw]  ">Selengkapnya</h2>
                            <div className="bg-[#066EB5] rounded-full justify-center items-center flex w-full h-full">
                            <FaAngleRight color="#FFFFFF" className="w-[5vw] h-[5vw]" />
                            </div>
                        </Link>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-montserrat font-medium text-black text-[5.556vw] text-center self-start">MPM</h2>
                        <div className="relative flex flex-col">
                            <div className='relative rounded-[2vw]'>
                                <div className='w-full h-full z-[10] bg-[#09B1E8] bg-opacity-15 absolute rounded-[2vw]'></div>
                                <img className="w-[93.333vw] grayscale blur-[0.2vw] rounded-[2vw]" src="/img/bso/MPM.png" alt="" />
                            </div>
                        <Link href="/bso/MPM" className="bg-[#23292B] rounded-full w-fit flex self-end absolute bottom-[-2.5vw] z-[20]">
                            <h2 className="font-montserrat font-medium text-[3.333vw] text-white px-[4vw]  ">Selengkapnya</h2>
                            <div className="bg-[#066EB5] rounded-full justify-center items-center flex w-full h-full">
                            <FaAngleRight color="#FFFFFF" className="w-[5vw] h-[5vw]" />
                            </div>
                        </Link>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-montserrat font-medium text-black text-[5.556vw] text-center self-start">Magatrika</h2>
                        <div className="relative flex flex-col">
                            <div className='relative rounded-[2vw]'>
                                <div className='w-full h-full z-[10] bg-[#09B1E8] bg-opacity-15 absolute rounded-[2vw]'></div>
                                <img className="w-[93.333vw] grayscale blur-[0.2vw] rounded-[2vw]" src="/img/bso/Magatrika.png" alt="" />
                            </div>
                        <Link href="/bso/Magatrika" className="bg-[#23292B] rounded-full w-fit flex self-end absolute bottom-[-2.5vw] z-[20]">
                            <h2 className="font-montserrat font-medium text-[3.333vw] text-white px-[4vw]  ">Selengkapnya</h2>
                            <div className="bg-[#066EB5] rounded-full justify-center items-center flex w-full h-full">
                            <FaAngleRight color="#FFFFFF" className="w-[5vw] h-[5vw]" />
                            </div>
                        </Link>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-montserrat font-medium text-black text-[5.556vw] text-center self-start">Night Login</h2>
                        <div className="relative flex flex-col">
                            <div className='relative rounded-[2vw]'>
                                <div className='w-full h-full z-[10] bg-[#09B1E8] bg-opacity-15 absolute rounded-[2vw]'></div>
                                <img className="w-[93.333vw] grayscale blur-[0.2vw] rounded-[2vw]" src="/img/bso/Night Login.png" alt="" />
                            </div>
                        <Link href="/bso/NightLogin" className="bg-[#23292B] rounded-full w-fit flex self-end absolute bottom-[-2.5vw] z-[20]">
                            <h2 className="font-montserrat font-medium text-[3.333vw] text-white px-[4vw]  ">Selengkapnya</h2>
                            <div className="bg-[#066EB5] rounded-full justify-center items-center flex w-full h-full">
                            <FaAngleRight color="#FFFFFF" className="w-[5vw] h-[5vw]" />
                            </div>
                        </Link>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-montserrat font-medium text-black text-[5.556vw] text-center self-start">SKI</h2>
                        <div className="relative flex flex-col">
                            <div className='relative rounded-[2vw]'>
                                <div className='w-full h-full z-[10] bg-[#09B1E8] bg-opacity-15 absolute rounded-[2vw]'></div>
                                <img className="w-[93.333vw] grayscale blur-[0.2vw] rounded-[2vw]" src="/img/bso/SKI.png" alt="" />
                            </div>
                        <Link href="/bso/SKI" className="bg-[#23292B] rounded-full w-fit flex self-end absolute bottom-[-2.5vw] z-[20]">
                            <h2 className="font-montserrat font-medium text-[3.333vw] text-white px-[4vw]  ">Selengkapnya</h2>
                            <div className="bg-[#066EB5] rounded-full justify-center items-center flex w-full h-full">
                            <FaAngleRight color="#FFFFFF" className="w-[5vw] h-[5vw]" />
                            </div>
                        </Link>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-montserrat font-medium text-black text-[5.556vw] text-center self-start">SKK</h2>
                        <div className="relative flex flex-col">
                            <div className='relative rounded-[2vw]'>
                                <div className='w-full h-full z-[10] bg-[#09B1E8] bg-opacity-15 absolute rounded-[2vw]'></div>
                                <img className="w-[93.333vw] grayscale blur-[0.2vw] rounded-[2vw]" src="/img/bso/SKK.png" alt="" />
                            </div>
                        <Link href="/bso/SKK" className="bg-[#23292B] rounded-full w-fit flex self-end absolute bottom-[-2.5vw] z-[20]">
                            <h2 className="font-montserrat font-medium text-[3.333vw] text-white px-[4vw]  ">Selengkapnya</h2>
                            <div className="bg-[#066EB5] rounded-full justify-center items-center flex w-full h-full">
                            <FaAngleRight color="#FFFFFF" className="w-[5vw] h-[5vw]" />
                            </div>
                        </Link>
                        </div>
                    </div>
                </div>
                <img className="bottom-[-160.5vw] left-0 absolute w-full z-0 lg:hidden" src="/img/home/circle-bc.svg" alt="" />
            </section>
        </section>
    );
}
