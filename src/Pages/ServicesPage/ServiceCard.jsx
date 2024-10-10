import React from "react";
import { Component } from "react";
import './spage.css';
import { Link } from "react-router-dom";
import Btn from "../../Components/btn/btn";
import { withTranslation } from 'react-i18next';

class ServiceCard extends Component {
    state = {  } 
    render() { 
        const { t } = this.props;
        return (
            <section className="card-section">
                {
                    this.props.Services.map((service,index)=>
                    (
                        <div className="spagecard  " key={index} >
                            
                            <div className="crad-logo">
                            <img src={service.service_logo} alt="" />    
                            </div>
                            <div className="title s2">
                                {service.service_name}
                            </div>
                            <div className="desc text-sm ">
                                {service.service_decs}
                            </div>
                          
                           
                       
                            <Btn   Caption={t('Book Now')} link={`/Service/${service.service_id}`}/>
                        
                          

                        </div>
                    )
                )
                }
            </section>

        );
    }
}
 
export default withTranslation()(ServiceCard);