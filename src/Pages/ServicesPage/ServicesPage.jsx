import React from 'react';
import { Component } from 'react';
import Header from '../../Components/Header/Header';
import './spage.css';
import Categories from './categories';
import services from '../../utils/data/service.json';



const addIdsToServices = (data) => {
    if (Array.isArray(data.services_info)) {
        let currentId = 1;
        data.services_info.forEach(category => {
            if (Array.isArray(category.service_sup_category)) {
                category.service_sup_category.forEach(subCategory => {
                    if (Array.isArray(subCategory.services)) {
                        subCategory.services.forEach(service => {
                            if (!service.service_id) {
                                service.service_id = currentId++;
                            }
                        });
                    }
                });
            }
        });
    } else {
        console.error('services_info is not an array:', data.services_info);
    }
    return data;
};


class ServicesPage extends Component {
    state = {services_:services} 
    constructor() {
        super();
 
        this.state = {
            services_:addIdsToServices(services),
        };
    }
    
    render() { 
      
        const services_info=this.state.services_['services_info']
        
     
        
        return (
            <section className='Services-Page '>
                <Header Cap='Explore Our Services'/>
                <div className='services-hole-Contianer padc bg1'>
                    {
                        services_info.map((service,index)=>(
                            <div className='service-section' key={index}>
                            <div className='title' key={index}>
                                {service.service_categorie}
                            </div>
                            <div className='sup-title'>
                            <Categories Service_Cat={service.service_sup_category} key={index} />
                            </div>

                            </div>
                        ))
                    }


                </div>
            </section>

        );
    }
}
 
export default ServicesPage;