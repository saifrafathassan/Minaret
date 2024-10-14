import React from "react";
import { Component } from "react";
import image from '/Assets/images/contact/3.png'
import { withTranslation } from 'react-i18next';

class Sec2 extends Component {
    state = {}
    render() {
        const { t } = this.props;
        return (
            <section className="padc bg2  Sec2">
                <div className="uper">
                <div className="title flex gap-1">
                {t("Fill this")}  <p className="thrcolor" >{t("form to join us")} </p>
                            
                        </div>
                        <div className="sup-title  text-3xl">
                        {t("Embark")}
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

                            <button className="contact-btn mcolor bg3" type="submit">{t("Submit")}</button>
                        </form>

                    </div>
                    <div className="sec2-right  ">
                    <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.2387504161566!2d58.154921400000006!3d23.595768999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8de318b749ed61%3A0xbb710adf6e9260d6!2sThe%20Minaret%20Agency!5e0!3m2!1sen!2seg!4v1728914450778!5m2!1sen!2seg"
                          
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

export default withTranslation()(Sec2);
