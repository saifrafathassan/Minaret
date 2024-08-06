import React from "react";
import { Component } from "react";
import ServiceCard from "./ServiceCard";
class Categories extends Component {
    render() {
        return (
            <section>
                <div>
                    {
                        this.props.Service_Cat.map((sup_cat, index) => (
                            <div key={index} className="service-container">
                              <div className="sup-title-section desc">
                         <span> {index + 1}</span>   <p>   {sup_cat.sup_name}</p>
                              </div>
                                <ServiceCard key={index} Services={sup_cat.services}/>
                            </div>
                            
                        ))
                    }
                </div>
            </section>
        );
    }
}

export default Categories;