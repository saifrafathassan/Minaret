import React, { Component } from "react";
import './protfolio.css'
import image1 from '/Assets/images/Portfolio/1.png';
import image2 from '/Assets/images/Portfolio/2.png';
import image3 from '/Assets/images/Portfolio/3.png';
import Btn from "./../../btn/btn";
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';


class Portfolio extends Component {
    state = {}
    render() {
        const images=[image1,image2,image3]
        const { t } = this.props;
        const currentLanguage = i18n.language.split('-')[0];
        return (
            <section className=" portfolio-cont padc sm:py-[40px] md:py-[100px]sm:py-[40px] md:py-[100px]" >
                <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="title text-[50px]">
                {currentLanguage === 'en' ? ( <> {t("Our")} <span>{t("Portfolio")} </span> </> ) : ( <span> {t("Portfolio")} </span> )}  
                </div>

                <div className="Portf_images" >
                {images.map((image, index) => (
                            <div key={index} className="logo-containr">
                                <img src={image} alt={`Partner ${index + 1}`} />
                            </div>
                        ))}
                </div>

                <Btn Caption={t("Read More")} link={'/portfolio' }/>

            </section>
        );
    }
}

export default withTranslation()(Portfolio);