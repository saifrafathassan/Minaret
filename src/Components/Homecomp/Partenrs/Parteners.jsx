import React from "react";
import Slider from 'react-slick';
import Typewriter from 'react-typewriter-effect';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from './CustomArrows';
import './Parteners.css';
import im1 from '/Assets/images/partnrs/1.png';
import im2 from '/Assets/images/partnrs/2.png';
import im3 from '/Assets/images/partnrs/3.png';
import im4 from '/Assets/images/partnrs/4.png';
import im5 from '/Assets/images/partnrs/5.png';

const Parteners = () => {
    const [ref, inView] = useInView({ threshold: 0.1 }); 

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    const logos = [im1, im2, im3, im4, im5];

    return (
        <div className="partenr padc sm:py-[40px] md:py-[100px]">
            <motion.div
                ref={ref} 
                initial={{ x: -100, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }} 
                transition={{ duration: 0.6 }}
                className="flex gap-2 title md:text-[50px]"
            >
                Our<span style={{ whiteSpace: 'nowrap' }}>
                    <Typewriter
                        startDelay={500}
                        cursorColor="transparent"
                        multiText={[
                            ' Trusted Partners',
                            ' Reliable Partners',
                            ' Strong Relationships',
                        ]}
                        multiTextDelay={2500}
                        typeSpeed={100}
                        deleteSpeed={10}
                        multiTextLoop={true}
                    />
                </span>
            </motion.div>

            <motion.div
                ref={ref} 
                initial={{ x: -100, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="silder"
            >
                <Slider {...settings}>
                    {logos.map((logo, index) => (
                        <div key={index} className="logo-containr">
                            <img src={logo} alt={`Partner ${index + 1}`} className="logo" />
                        </div>
                    ))}
                </Slider>
            </motion.div>
        </div>
    );
}

export default Parteners;
