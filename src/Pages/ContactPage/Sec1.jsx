import React from "react";
import { Component } from "react";
import image from '/Assets/images/contact/2.png'

class Sec1 extends Component {
    state = {  } 
    render() { 
        return (
                <section className="padc bg1 Sec">
                    <div className="sec-left">
                        <div className="title">
                            <p>Get <span>in Touch</span></p>
                        </div>
                        <div className="sup-title frthcolor ">
                        Embark on Your Brand's Success Journey with Us
                        </div>

                        <div className="desc">
                            <p>Ready to elevate your digital presence and drive your brand towards unparalleled success? At The Minaret Marketing Agency, we're more than just a team; we're your strategic partners in navigating the vast digital landscape. Let's collaborate to turn your vision into reality. Contact us today, and together, we'll embark on a journey that transforms your brand's potential into performance</p>
                        </div>
                    </div>
                    <div className="right ">
                        <img src={image} alt="" />
                    </div>

                </section>
        );
    }
}
 
export default Sec1;