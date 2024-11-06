import { Component } from "react";
import React from "react";
import "./Hero.css"
import image from '/Assets/images/Contact us frame.png'
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';

class Hero extends Component {
    
    state = {}
    render() {
        const currentLanguage = i18n.language.split('-')[0];
        const { t } = this.props;
        return (
            <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="padc Hero_Container" >
                <div className="Hero-left" >
                    <span className="Hero-left-header sm:text-[30px] lg:text-[35px] ">{t("Distinctly Visible, Uniquely Heard")} </span>

                    <p className="lg:text-[25px]">
                        {t("Navigating Your Brand to New Heights")}<br/>
                        {t("with")}  <span className="Company"> {t("The Minaret Marketing Agency.")}</span><br/>
                        {t("journey to unparalleled digital presence begins here.")}
                    </p>
                </div>

                <div className="Hero-right" >
                    <div className="image flex sm:justify-center md:justify-end sm:pl-0 md:pl-[80px]">
                    <a href='https://wa.me/96899208915'> <img src={image} alt=" " /></a>
                    </div>
                </div>
            </div>

        );
    }
}

export default withTranslation()(Hero);