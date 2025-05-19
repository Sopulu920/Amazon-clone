"use client"
import Image from 'next/image';
import banner1 from '../../asset/image/banner/banner1.png';
import banner2 from '../../asset/image/banner/banner2.png';
import banner3 from '../../asset/image/banner/banner3.png';
import banner4 from '../../asset/image/banner/banner4.png';
import { useEffect, useState } from 'react';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const banners = [banner1, banner2, banner3, banner4];

export default function Banner() {
    const [slide, setSlide] = useState(0);

    //auto change
    useEffect(() => {
        const change = () => {
            setSlide((prevSlide) => (prevSlide + 1) % banners.length);
        };
        const intervalId = setInterval(change, 5000);
        return () => clearInterval(intervalId);
    }, []);

    // manual change
    const next = () => {
        setSlide((prevSlide) => (prevSlide + 1) % banners.length);
    };

    const prev = () => {
        setSlide((prevSlide) => (prevSlide - 1 + banners.length) % banners.length);
    };

    return (
        <>
            <div>
                <div className='banner'>
                    <Image
                        src={banners[slide]}
                        alt={`Banner ${slide + 1}`}
                        className='bannerImg'
                    />
                </div>
                <div className='banner2'>
                    <button onClick={prev}> <FontAwesomeIcon icon={faLessThan} /> </button>
                    <button onClick={next}> <FontAwesomeIcon icon={faGreaterThan} /> </button>
                </div>
            </div>
        </>
    );
}
