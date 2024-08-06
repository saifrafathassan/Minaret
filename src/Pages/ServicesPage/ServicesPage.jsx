import React from 'react';
import { Component } from 'react';
import Header from '../../Components/Header/Header';
import data from '../../utils/data/data.json'
import './spage.css';
import Categories from './categories';
import services from '../../utils/data/service.json'

class ServicesPage extends Component {
    state = { services:data['services'] } 
    render() { 
        const serv_info=services['services_info']
       
        return (
            <section className='Services-Page '>
                <Header Cap='Explore Our Services'/>
                <div className='services-hole-Contianer padc bg1'>
                    {
                        serv_info.map((service,index)=>(
                            <div className='service-section'>
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