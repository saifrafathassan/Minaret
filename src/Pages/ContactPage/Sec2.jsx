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
                Fill this  <p className="thrcolor" > form to join us</p>
                            
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
                    <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.4327639249877!2d30.7552204!3d28.1028404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145b2551f1aedb95%3A0x2e2167212752034e!2sThe%20Minaret%20Agency!5e0!3m2!1sen!2seg!4v1724089847954!5m2!1sen!2seg"
                          
                            style={{
                                border: 0,
                                width: '100%',
                                height: '100%',
                                borderRadius: '10px',  // Example of rounded corners
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' // Example of shadow
                            }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

            </section>
        );
    }
}

export default Sec2;