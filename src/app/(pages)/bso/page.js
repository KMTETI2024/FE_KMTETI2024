/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';

const Card = ({ title, imgSrc, link }) => (
    <div className="flex flex-col">
        <h2 className="text-black font-redditsanssemibold text-[2.083vw] mb-[1.719vw] drop-shadow-xl">{title}</h2> 
        <img className="rounded-[0.521vw] drop-shadow-xl" src={imgSrc} alt="" />
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
        <main className="relative flex flex-col items-center justify-center bg-white">
            <div className="grid grid-cols-2 gap-x-[12.708vw] gap-y-[6.198vw] py-[5.729vw]">
                {cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </main>
    );
}
