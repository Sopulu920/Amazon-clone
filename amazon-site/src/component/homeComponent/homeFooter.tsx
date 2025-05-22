"use client"
import Image from 'next/image';
import care12 from "../../asset/image/care/care12.jpg"
import care13 from "../../asset/image/care/care13.jpg"
import care14 from "../../asset/image/care/care14.jpg"
import care15 from "../../asset/image/care/care15.jpg"
import care16 from "../../asset/image/care/care16.jpg"
import care17 from "../../asset/image/care/care17.jpg"
import care18 from "../../asset/image/care/care18.jpg"
import fas3 from "../../asset/image/fashion/fas3.jpg"
import fas4 from "../../asset/image/fashion/fas4.jpg"
import fas5 from "../../asset/image/fashion/fas5.jpg"
import fas6 from "../../asset/image/fashion/fas6.jpg"
import fas7 from "../../asset/image/fashion/fas7.jpg"
import fas31 from "../../asset/image/fashion/fas31.jpg"
import fas32 from "../../asset/image/fashion/fas32.jpg"
import fas33 from "../../asset/image/fashion/fas33.jpg"
import fas34 from "../../asset/image/fashion/fas34.jpg"
import { useEffect, useState } from 'react';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const banners = [
    [care12, care13, care14, care15],
    [care16, care17, care18, fas3],
    [fas4, fas5, fas6, fas7],
    [fas31, fas32, fas33, fas34]
];

export default function HomeFooter() {
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
                <div className='banner4'>
                    {banners[slide].map((imageSrc, index) => (
                        <Image
                            key={index}
                            src={imageSrc}
                            alt={`Banner ${slide + 1} Image ${index + 1}`}
                            className='bannerImg3'
                        />
                    ))}
                </div>
                <div className='banner3'>
                    <button onClick={prev}> <FontAwesomeIcon icon={faLessThan} /> </button>
                    <button onClick={next}> <FontAwesomeIcon icon={faGreaterThan} /> </button>
                </div>
            </div>

            <div className="rec">
                <div className='see'>
                    See personalized recommendations
                </div>
                <div className='sign'>
                    sign in
                </div>
                <div className='new'>
                    <span>New customer? </span>
                    <span><a href="">Start here.</a></span>
                </div>
            </div>
            <div className="space">

            </div>
        </>
    );
}
