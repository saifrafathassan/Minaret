    
import React from "react";
import { useState,useEffect } from "react";
import { Component } from "react";
import image from '/Assets/images/contact/3.png'
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';
import axios from "axios";
import { Api } from "../../../Consts";

const Sec2 = ({ t, i18n, serviceId }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [serviceData, setServiceData] = useState(null);

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState("+1"); // Default country code
    const [brief, setBrief] = useState("");
    const [selectedServiceId, setSelectedServiceId] = useState(serviceId || "");
    const handleServiceChange = (e) => {
        setSelectedServiceId(e.target.value);
    };

    useEffect(() => {
        axios.get(`${Api}services/`)
            .then(response => {
                setServiceData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [serviceId]); // Ensure serviceId is defined

    const handleSubmit = (e) => {
        e.preventDefault();

        const orderData = {
            service_orderd: serviceId,
            customer_email: email,
            brief: brief,
            phone: `${countryCode}${phone}`, // Concatenate country code with phone number
            customer_company_name: company
        };

        axios.post(`${Api}/orders/`, orderData)
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

    const currentLanguage = i18n.language.split('-')[0];

  
    return (
        <section className="padc bg2 Sec2">
            <div className="uper">
                <div className="title flex gap-1">
                    {t("Fill this")}  <p className="thrcolor">{t("form to join us")}</p>
                </div>
                <div className="sup-title text-3xl">
                    {t("Embark")}
                </div>
            </div>

            <div className="lower">
                <div className="sec2-left">
                    <form className="contact-form" onSubmit={handleSubmit} dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}>
                        <input 
                            type="text" 
                            className="input" 
                            placeholder={t("What Is Your Name?")} 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                        <input 
                            type="text" 
                            className="input" 
                            placeholder={t("Your Company Name?")} 
                            value={company} 
                            onChange={(e) => setCompany(e.target.value)} 
                            required 
                        />
                        <input 
                            type="email" 
                            className="input" 
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
                            </select>
                            <input 
                                type="tel" 
                                className="input phone-number" 
                                placeholder={t("Your Phone Number")} 
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)} 
                                required 
                            />
                        </div>

                        <select
                            className="input" 
                            value={selectedServiceId}
                            onChange={handleServiceChange}
                            required
                        >
                            <option value="">{t("Choose Which Service You Want")}</option>
                            {serviceData.map((service) => (
                                <option key={service.id} value={service.id}>
                                    {currentLanguage === 'ar' && service.name_ar ? service.name_ar : service.name}
                                </option>
                            ))}
                        </select>
                        <textarea 
                            className="input" 
                            placeholder={t("Project Brief")} 
                            value={brief} 
                            onChange={(e) => setBrief(e.target.value)} 
                            rows="5" 
                            required
                        ></textarea>
                        <button className="contact-btn mcolor bg3" type="submit">{t("Book Now")}</button>
                    </form>
                </div>
               <div className="sec2-right  text-center">
                        <h1 className="text-xl mb-1">Egypt Office</h1>
                    <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.4327639249877!2d30.7552204!3d28.1028404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145b2551f1aedb95%3A0x2e2167212752034e!2sThe%20Minaret%20Agency!5e0!3m2!1sen!2seg!4v1724089847954!5m2!1sen!2seg"
            
                            style={{
                                border: 0,
                                width: '100%',
                                height: '100%',
                                borderRadius: '10px',  // Example of rounded corners
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' // Example of shadow
                            }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="sec2-right  text-center">
                    <h1 className="text-xl mb-1">Oman Office</h1>
                    <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.2387504161566!2d58.154921400000006!3d23.595768999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8de318b749ed61%3A0xbb710adf6e9260d6!2sThe%20Minaret%20Agency!5e0!3m2!1sen!2seg!4v1728914450778!5m2!1sen!2seg"
            
                            style={{
                                border: 0,
                                width: '100%',
                                height: '100%',
                                borderRadius: '10px',  // Example of rounded corners
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' // Example of shadow
                            }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
            </div>
        </section>
    );
}

export default withTranslation()(Sec2);
    
    

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.2387504161566!2d58.154921400000006!3d23.595768999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8de318b749ed61%3A0xbb710adf6e9260d6!2sThe%20Minaret%20Agency!5e0!3m2!1sen!2seg!4v1728914450778!5m2!1sen!2seg" 
    
    
    

    
    
    */}