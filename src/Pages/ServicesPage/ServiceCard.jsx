import React from "react";
import { Component } from "react";
import './spage.css';
import { Link } from "react-router-dom";
import Btn from "../../Components/btn/btn";
import { withTranslation } from 'react-i18next';




class ServiceCard extends Component {
    render() {
        const { t, i18n } = this.props;  // Destructure i18n to access the language

        return (
            <section className="card-section">
                {
                    this.props.Services.map((service, index) => (
                        <div className="spagecard" key={index}>
                            <div className="crad-logo">
                                <img src={service.service_icon} alt="" />
                            </div>
                            <div className="title s2">
                                {i18n.language === 'ar' ? service.name_ar : service.name} {/* Conditional rendering */}
                            </div>
                            <div className="desc text-sm">
                                {i18n.language === 'ar' ? service.service_desc_ar : service.service_desc} {/* Conditional rendering */}
                            </div>
                            <Btn Caption={t('Book Now')} link={`/Service/${service.id}`} />
                        </div>
                    ))
                }
            </section>
        );
    }
}

export default withTranslation()(ServiceCard);