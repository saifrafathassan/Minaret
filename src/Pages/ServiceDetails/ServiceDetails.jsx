import React from "react";
import { useParams } from "react-router-dom";
import servicesData from '../../utils/data/service.json';
import './servicedetails.css';
import Header from "../../Components/Header/Header";


const findServiceById = (data, id) => {

    for (const category of data.services_info) {

        for (const subCategory of category.service_sup_category) {

            const foundService = subCategory.services.find(service => service.service_id === id);
            if (foundService) {
                return foundService;
            }
        }
    }
    return null; // Return null if no service is found
};


const ServiceDetailsPage = () => {
    const { id } = useParams(); // Extracts the service id from the URL
    const serviceId = parseInt(id.replace(':', ''), 10); // Converts the id to a number
    // Find the service by id
    let selectedService = findServiceById(servicesData, serviceId);
    if (!selectedService) {
        return <div>Service not found</div>;
    }

    return (
        <div className="service-details-container">
            <Header />
            <div className="padc bg1 service-detail"  >
                
                <div className="service-left">
                
                <div className="service-logo">
                <img src={selectedService.service_logo} alt="" />

                </div>
                <div className="title">
                    {selectedService.service_name}
                </div>
                <div className="desc">
                    {selectedService.service_decs}
                </div>
                </div>
                <div className="service-right">
                    <form className="contact-form">
                        <input type="text" className="input" name="name" placeholder="What Is Your Name?" required />
                        <input type="text" className="input" name="company" placeholder="Your Company Name?" required />
                        <input type="email" className="input" name="email" placeholder="Your Email?" required />
                        <input type="text" className="input" name="service" placeholder="Choose Which Service You Want" required />
                        <textarea className="input" name="project-brief" placeholder="Project Brief" rows="5" required></textarea>

                        <button className="contact-btn mcolor bg3" type="submit">Book Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default ServiceDetailsPage;

/* <h1>{selectedService.service_name}</h1>
            <img src={selectedService.service_logo} alt={selectedService.service_name} />
            <p>{selectedService.service_decs}</p>*/