import { Component } from "react";
import React from "react";

import { FaStar } from "react-icons/fa";
import './Clients.css';
import data from '../../../utils/data/data.json';
import { HiArrowSmallDown } from "react-icons/hi2";
import { HiArrowSmUp } from "react-icons/hi";

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

        return (
            <section className="Clients-container padc">
                <div className="left">
                    <div className="slides">
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

                <div className="right">
                    <div className="title">
                        Client <p className="mcolor">Testimonials</p>
                    </div>
                    <div className="desc">
                        Hear from our satisfied clients who've journeyed with us to success.
                        Your trust is our greatest achievement.
                    </div>
                </div>
            </section>
        );
    }
}


export default ClientRev;