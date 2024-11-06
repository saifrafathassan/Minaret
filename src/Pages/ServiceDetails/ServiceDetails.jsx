import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './servicedetails.css';
import Header from "../../Components/Header/Header";
import { withTranslation } from 'react-i18next';
import api from "../../../APi";


const ServiceDetailsPage = ({ t, i18n }) => {
    const { id } = useParams();
    const serviceId = parseInt(id.replace(':', ''), 10);

    const [serviceData, setServiceData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState("+1"); // Default country code
    const [brief, setBrief] = useState("");

    useEffect(() => {
        api.get(`services/${serviceId}/`)
            .then(response => {
                setServiceData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [serviceId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const orderData = {
            service_orderd: serviceId,
            customer_email: email,
            brief: brief,
            phone: `${countryCode}${phone}`, // Concatenate country code with phone number
            customer_company_name: company
        };

        api.post("orders/", orderData)
            .then(response => {
                alert(t("Order placed successfully!"));
                setName("");
                setCompany("");
                setEmail("");
                setPhone("");
                setCountryCode("+1"); // Reset to default
                setBrief("");
            })
            .catch(error => {
                alert(t("Error placing order: ") + error.message);
            });
    };

    if (loading) {
        return <div>{t("Loading...")}</div>;
    }

    if (error) {
        return <div>{t("Error:")} {error}</div>;
    }

    if (!serviceData) {
        return <div>{t("Service not found")}</div>;
    }

    const isArabic = i18n.language === 'ar';

    return (
        <div className="service-details-container">
            <Header />
            <div className="padc bg1 service-detail">
                <div className="service-left">
                    <div className="service-logo">
                        <img src={serviceData.service_icon} alt={isArabic ? serviceData.name_ar : serviceData.name} />
                    </div>
                    <div className="title">
                        {isArabic ? serviceData.name_ar : serviceData.name}
                    </div>
                    <div className="desc">
                        {isArabic ? serviceData.service_desc_ar : serviceData.service_desc}
                    </div>
                </div>
                <div className="service-right">
                    <form className="contact-form" onSubmit={handleSubmit} dir={isArabic ? 'rtl' : 'ltr'}>
                        <input 
                            type="text" 
                            className="input" 
                            name="name" 
                            placeholder={t("What Is Your Name?")} 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                        <input 
                            type="text" 
                            className="input" 
                            name="company" 
                            placeholder={t("Your Company Name?")} 
                            value={company} 
                            onChange={(e) => setCompany(e.target.value)} 
                            required 
                        />
                        <input 
                            type="email" 
                            className="input" 
                            name="email" 
                            placeholder={t("Your Email?")} 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />

                        <div className="phone-input-container">
                            <select 
                                className="input country-code" 
                                value={countryCode} 
                                onChange={(e) => setCountryCode(e.target.value)}
                                required
                            >
                                <option value="+1">+1 (USA)</option>
                                <option value="+44">+44 (UK)</option>
                                <option value="+971">+971 (UAE)</option>
                                <option value="+20">+20 (Egypt)</option>
                                <option value="+61">+968 (Oman)</option>
                                {/* Add more country codes as needed */}
                            </select>
                            <input 
                                type="tel" 
                                className="input phone-number" 
                                name="phone" 
                                placeholder={t("Your Phone Number")} 
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)} 
                                required 
                            />
                        </div>

                        <input 
                            type="text" 
                            className="input" 
                            name="service" 
                            placeholder={t("Choose Which Service You Want")} 
                            value={serviceData.name}
                            readOnly 
                        />
                        <textarea 
                            className="input" 
                            name="project-brief" 
                            placeholder={t("Project Brief")} 
                            value={brief} 
                            onChange={(e) => setBrief(e.target.value)} 
                            rows="5" 
                            required
                        ></textarea>
                        <button className="contact-btn mcolor bg3" type="submit">{t("Book Now")}</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default withTranslation()(ServiceDetailsPage);