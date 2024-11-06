
import React from "react";
import { Component } from "react";
import './Services.css';
import arow from '/Assets/Gifs/0.gif';
import { withTranslation } from 'react-i18next';

import api from "../../../../APi";
import i18n from 'i18next';

class Service2 extends Component {
    state = {
        hoveredServiceIndex: null,
        data:[]
    };
    

    componentDidMount() {
        this.fetchservice();
    }

    fetchservice = async () => {
        try {
            const response = await api.get('/service');
            this.setState({ data: response.data, loading: false });
        } catch (error) {
            this.setState({ error: error.message, loading: false });
        }
    };
    handleClick = () => {
        this.props.history.push('/Services');
    };
    
    handleMouseEnter = (index) => {
        this.setState({ hoveredServiceIndex: index });
    };

    handleMouseLeave = () => {
        this.setState({ hoveredServiceIndex: null });
    };

    render() {
        const serviceCategories = this.state.data;

        const { hoveredServiceIndex } = this.state;
        const { t } = this.props;
        const currentLanguage = i18n.language.split('-')[0];

        return ( <div className="Service_container padc sm:py-[40px] md:py-[100px]">
            <div className="service-grid">
                <div className="first">
                    <div className="title text-[50px]">
                        {currentLanguage === 'en' ? (
                            <>
                                {t("Our")} <span>{t("Services")}</span>
                            </>
                        ) : (
                            <span>{t("Services")}</span>
                        )}  
                    </div>
                    <div className="desc">
                        {t("Explore our comprehensive")} 
                    </div>
                    <div className="view-more pt-4">
                            <a  href="https://wa.me/96899208915" className="view-more-link" target="_blank" rel="noopener noreferrer">
                                <div className="v-cont">
                                    <span>{t("view more")}</span>
                                </div>
                                <div className="back">
                                    <img src={arow} alt="->" />
                                </div>
                            </a>
                    </div>
                </div>

                {serviceCategories.map((category, index) => (
                    <div
                        key={category.id}
                        className="card"
                        onMouseEnter={() => this.handleMouseEnter(index)}
                        onMouseLeave={this.handleMouseLeave}
                    >
                        {hoveredServiceIndex === index ? (
                            <>
                                <div className="card-header">
                                    {index + 1 < 10 ? `0${index + 1}` : index + 1} 
                                    <span>{currentLanguage === 'ar' ? category.sub_categories[0].name_ar : category.sub_categories[0].name}</span>
                                </div>
                                <div className="card-content">
                                    <ul>
                                        {category.sub_categories[0].services.map((service, serviceIndex) => (
                                            <li key={service.id}>
                                                {currentLanguage === 'ar' ? service.name_ar : service.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="card-header">
                                    {index + 1 < 10 ? `0${index + 1}` : index + 1} 
                                    <span>{currentLanguage === 'ar' ? category.name_ar : category.name}</span>
                                </div>
                                <div className="card-content">
                                    <ul>
                                        {category.sub_categories.map((subcategory) => (
                                            <li key={subcategory.id} className="pb-[7px]">
                                                {currentLanguage === 'ar' ? subcategory.name_ar : subcategory.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="card-bottom">
                                    <div className="btm1st">
                                        <img src={arow} alt="->" />
                                    </div>
                                    <p>{t("Read More")} </p>
                                    <div className="btm3d">
                                        <img src={category.icon} alt="" />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
        );
    }
}

export default withTranslation()(Service2);