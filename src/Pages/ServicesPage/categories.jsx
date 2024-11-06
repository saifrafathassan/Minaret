import React from "react";
import { Component } from "react";
import ServiceCard from "./ServiceCard";
import { withTranslation } from 'react-i18next';


class Categories extends Component {
    render() {
        const { i18n } = this.props; // Destructure i18n to access the language

        return (
            <section>
                <div>
                    {
                        this.props.Service_Cat.map((sup_cat, index) => (
                            <div key={index} className="service-container">
                                <div className="sup-title-section desc">
                                    <span>{index + 1}</span>
                                    <p>{i18n.language === 'ar' ? sup_cat.name_ar : sup_cat.name}</p>  {/* Conditional rendering */}
                                </div>
                                <ServiceCard key={index} Services={sup_cat.services} />
                            </div>
                        ))
                    }
                </div>
            </section>
        );
    }
}

export default withTranslation()(Categories);