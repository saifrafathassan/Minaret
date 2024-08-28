import React from "react";
import { Component } from "react";
import './Services.css';
import arow from '/Assets/Gifs/0.gif';

import data from '../../../utils/data/data.json';


class Service extends Component {
    state = {
        hoveredServiceIndex: null
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
        const services = data['services'];
        const serviceCat = data['service_cat'];
        const { hoveredServiceIndex } = this.state;

        return (
            <div className="Service_container padc sm:py-[40px] md:py-[100px]">
                <div className="service-grid">
                    <div className="first">
                        <div className="title text-[50px]">
                            Our <span>Services</span>
                        </div>
                        <div className="desc">
                            Explore our comprehensive services designed to elevate your brand and Craft your digital legacy,
                            brick by brick. Our services guide you from brand identity to peak visibility.
                        </div>
                        <div className="view-more pt-4">
                            <div className="v-cont"><span>view more</span></div>
                            <div className="back">
                                <img src={arow} alt="->" />
                            </div>
                        </div>
                    </div>
   
                 
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="card"
                            onMouseEnter={() => this.handleMouseEnter(index)}
                            onMouseLeave={this.handleMouseLeave}
                           
                        >
                            {hoveredServiceIndex === index ? (
                                <>
                                    <div className="card-header">
                                    {index + 1 < 10 ? `0${index + 1}` : index + 1} <span>{service.service_categories[0]}</span>
                                    </div>
                                    <div className="card-content">
                                        <ul>
                                            {serviceCat.find(cat => cat.cat_name === service.service_categories[0])?.sup_cats.map((supCat, supCatIndex) => (
                                                <li key={supCatIndex}>{supCat}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="card-header">
                                        {index + 1 < 10 ? `0${index + 1}` : index + 1} <span>{service.service_name}</span>
                                    </div>
                                    <div className="card-content">
                                        <ul>
                                            {service.service_categories.map((category, catIndex) => (
                                                <li className="pb-[7px]" key={catIndex}>{category}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="card-bottom">
                                        <div className="btm1st">
                                            <img src={arow} alt="->" />
                                        </div>
                                        <p>Read More</p>
                                        <div className="btm3d">
                                            <img src={service.service_icon} alt="" />
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
 
export default Service;