import { Component } from "react";
import React from "react";
import "./Hero.css"
import image from '/Assets/images/Contact us frame.png'

class Hero extends Component {
    state = {}
    render() {
        return (
            <div className="padc Hero_Container" >
                <div className="Hero-left" >
                    <span className="Hero-left-header sm:text-[30px] lg:text-[45px]"> Distinctly Visible, Uniquely Heard </span>

                    <p className="lg:text-[30px]">
                        Navigating Your Brand to New Heights<br/>
                        with  <span className="Company"> The Minaret Marketing Agency.</span> Your<br/>
                        journey to unparalleled digital presence begins here.
                    </p>
                </div>

                <div className="Hero-right" >
                    <div className="image flex sm:justify-center md:justify-end sm:pl-0 md:pl-[80px]">
                    <img src={image} alt=" " />
                    </div>
                </div>
            </div>

        );
    }
}

export default Hero;