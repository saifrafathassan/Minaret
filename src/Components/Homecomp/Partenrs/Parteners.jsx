import React, { Component } from "react";
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from './CustomArrows';

import './Parteners.css';
import im1 from '/Assets/images/partnrs/1.png'
import im2 from '/Assets/images/partnrs/2.png'
import im3 from '/Assets/images/partnrs/3.png'
import im4 from '/Assets/images/partnrs/4.png'
import im5 from '/Assets/images/partnrs/5.png'
class Parteners extends Component {
    state = {}


    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 2000,
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
        
        const logos = [im1, im2, im3, im4, im5]
        return (

            <div className="partenr padc" >

                <div className="title">
                Our    <span> Trusted Parteners</span>     
                </div>
                <div className="silder ">
                    <Slider {...settings}>
                        {logos.map((logo, index) => (
                            <div key={index} className="logo-containr">
                                <img src={logo} alt={`Partner  ${index + 1}`} className="logo" />
                            </div>
                        ))}
                    </Slider>

                </div>

            </div>


        );
    }
}

export default Parteners;