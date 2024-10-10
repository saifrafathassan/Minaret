import { Component } from "react";
import React from "react";
import { withTranslation } from 'react-i18next';
import { FaStar } from "react-icons/fa";
import './Clients.css';
import data from '../../../utils/data/data.json';
import { HiArrowSmallDown } from "react-icons/hi2";
import { HiArrowSmUp } from "react-icons/hi";
import i18n from 'i18next';

class ClientRev extends Component {
    state = {
        currentIndex: 1
    };

    nextSlide = () => {
        const { currentIndex } = this.state;
        const Testimonials = data['Testimonials'];
        this.setState({
            currentIndex: (currentIndex + 1) % Testimonials.length
        });
    };

    prevSlide = () => {
        const { currentIndex } = this.state;
        const Testimonials = data['Testimonials'];
        this.setState({
            currentIndex: (currentIndex - 1 + Testimonials.length) % Testimonials.length
        });
    };

    render() {
        const { currentIndex } = this.state;
        const Testimonials = data['Testimonials'];
        const { t } = this.props;
        const currentLanguage = i18n.language.split('-')[0];
        return (
            <section className="Clients-container padc m:py-[20px] lg:py-[100px]">
                <div className="left">
                    <div className="slides h-[600px]">
                        {
                            Testimonials.map((testimon, index) => {
                                const position = (index - currentIndex + Testimonials.length) % Testimonials.length;
                                let className = 'card-test';
                                if (position === 0) className += ' active';
                                if (position === 1 || position === Testimonials.length - 1) className += ' adjacent';
                                return (
                                    <div
                                        key={index}
                                        className={className}
                                        style={{
                                            opacity: position === 0 ? 1 : 0.5,
                                            top:position===2 ? '40%': (position===1 ? '0%':(position===0 ?'20%':'20%')),
                                           
                                           
                                        }}
                                    >
                                        <img src={testimon.image} alt="" />
                                        <div className="content">
                                            <div className="Name">
                                                <span>{testimon.customer_Name}</span>
                                            </div>
                                            <p>{testimon.comment}</p>
                                            <div className="content-bottom">
                                                <div className="stars"><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                                <div className="date">{testimon.date}</div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="arrows">
                        <button onClick={this.prevSlide} className="arrow-up">↑</button>
                        <button onClick={this.nextSlide} className="arrow-down"><HiArrowSmallDown/></button>
                    </div>
                </div>

                <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="right">
                    <div className="title text-[50px]">
                        {t("Client")} <p className="mcolor">{t("Testimonials")}</p>
                    </div>
                    <div className="desc lg:w-[450px]">
                        {t("Hear from")}
                    </div>
                </div>
            </section>
        );
    }
}


export default withTranslation()(ClientRev);