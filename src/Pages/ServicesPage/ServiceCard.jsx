import React from "react";
import { Component } from "react";
import './spage.css';
import { Link } from "react-router-dom";
import Btn from "../../Components/btn/btn";
class ServiceCard extends Component {
    state = {  } 
    render() { 
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
                          
                           
                            <Link key={index} to={`/Service/${service.service_id}`}>
                            <Btn   Caption={'Book Now'} />
                            </Link>
                          

                        </div>
                    )
                )
                }
            </section>

        );
    }
}
 
export default ServiceCard;