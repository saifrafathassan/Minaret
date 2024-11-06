import React from "react";
import Slider from 'react-slick';
import Typewriter from 'react-typewriter-effect';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 

import { withTranslation } from 'react-i18next';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from './CustomArrows';
import './Parteners.css';
import im1 from '/Assets/images/partnrs/1.png';
import im2 from '/Assets/images/partnrs/2.png';
import im3 from '/Assets/images/partnrs/3.png';
import im4 from '/Assets/images/partnrs/4.png';
import im5 from '/Assets/images/partnrs/5.png';
import i18n from 'i18next';

const Parteners = ({t}) => {
    const [ref, inView] = useInView({ threshold: 0.1 }); 
    const currentLanguage = i18n.language.split('-')[0];
    const [showText, setShowText] = React.useState(false);
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                },
            }
        ],
    };

    const logos = [im1, im2, im3, im4, im5];

    React.useEffect(() => {
        setShowText(false); 

        const timer = setTimeout(() => {
            setShowText(true);
            console.log("Timer completed, setShowText to true.");
        }, 1500); 

        return () => clearTimeout(timer);
    }, [currentLanguage]); 

    return (
        <div className="partenr padc sm:py-[40px] md:py-[100px]">
            <motion.div
                dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
                ref={ref} 
                initial={{ x: -100, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }} 
                transition={{ duration: 0.6 }}
                className="flex ps-2 gap-2 title md:text-[50px]"
            >
        {t("Our")}<span>
            {showText && (
                <Typewriter
                    cursorColor="transparent"
                    multiText={[
                        t("Trusted Partners"),
                        t("Reliable Partners"),
                        t("Strong Relationships")
                    ]}
                    typeSpeed={100}
                    multiTextLoop={true}
                />
            )}
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

export default withTranslation()(Parteners);
