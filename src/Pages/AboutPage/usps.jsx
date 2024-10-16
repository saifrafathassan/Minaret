import React, { Component } from "react";
import Slider from 'react-slick';
import pin from '/Assets/Gifs/pin.gif';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';

class Usps extends Component {
    render() {
        const { t } = this.props; 
        const currentLanguage = i18n.language.split('-')[0];
        const usps = [
            { 'title': t("title1"), 'desc': t("desc1") },
            { 'title': t("title2"), 'desc': t("desc2") },
            { 'title': t("title3"), 'desc': t("desc3") }
        ];

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
            <section className="padc usps bg2 pb-10">
                <div className="title">
                    USPs
                </div>
                <div  className="slideru">
                    <Slider {...settings} >
                        {usps.map((usp, index) => (
                            <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} key={index} className="singel-usp-containr">
                                <div className="usp-title">
                                    <span className="mcolor">{usp.title}</span>
                                </div>
                                <div className="usp-desc">
                                    {usp.desc}
                                </div>
                                <img className={currentLanguage === 'ar' ? 'limg' : 'rimg'} src={pin} alt="" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        );
    }
}

export default withTranslation()(Usps);
