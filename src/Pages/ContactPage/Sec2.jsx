import React from "react";
import { Component } from "react";
import image from '/Assets/images/contact/3.png'

class Sec2 extends Component {
    state = {}
    render() {
        return (
            <section className="padc bg2  Sec2">
                <div className="uper">
                <div className="title flex gap-1">
                            Let's Start <p className="thrcolor" > a Conversation</p>
                        </div>
                        <div className="sup-title  text-3xl">
                        Embark on Your Brand's Success Journey with Us
                        </div>
                </div>

                <div className="lower">
                    <div className="sec2-left">
                        <form className="contact-form">

                            <input type="text" className="input" name="name" placeholder="What Is Your Name?" required />
                            <input type="text" className="input" name="company" placeholder="Your Company Name?" required />
                            <input type="email" className="input" name="email" placeholder="Your Email?" required />
                            <input type="text" className="input" name="service" placeholder="Choose Which Service You Want" required />
                            <textarea className="input" name="project-brief" placeholder="Project Brief" rows="5" required></textarea>

                            <button className="contact-btn mcolor bg3" type="submit">Submit</button>
                        </form>

                    </div>
                    <div className="sec2-right  ">
                        <img src={image} alt="" />
                    </div>
                </div>

            </section>
        );
    }
}

export default Sec2;