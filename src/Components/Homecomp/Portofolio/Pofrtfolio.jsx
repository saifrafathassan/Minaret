import React, { Component } from "react";
import './protfolio.css'
import api from "../../../../APi";
import Btn from "./../../btn/btn";
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';


class Portfolio extends Component {
    state = {
        images: [] // Initialize state to store images fetched from the API
    };

    componentDidMount() {
        // Fetch portfolio data from the API
        api.get('/portfolio/')
            .then(response => {
                // Update state with images from the API response
                this.setState({ images: response.data });
            })
            .catch(error => {
                console.error("Error fetching portfolio data:", error);
            });
    }

    render() {
        const { t } = this.props;
        const currentLanguage = i18n.language.split('-')[0];
        const images_for_the_home=this.state.images.slice(0,3);
        return (
            <section className="portfolio-cont padc sm:py-[40px] md:py-[100px]" >
                <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="title text-[50px]">
                    {currentLanguage === 'en' ? (
                        <> {t("Our")} <span>{t("Portfolio")} </span> </>
                    ) : (
                        <span> {t("Portfolio")} </span>
                    )}
                </div>

                <div className="Portf_images">
                    {images_for_the_home.map((item, index) => (
                        <div key={index} className="logo-containr">
                            <img src={item.image} alt={item.name} />
                        </div>
                    ))}
                </div>

                <Btn Caption={t("Read More")} link={'/portfolio'} />
            </section>
        );
    }
}

export default withTranslation()(Portfolio);


/*  <section className=" portfolio-cont padc sm:py-[40px] md:py-[100px]sm:py-[40px] md:py-[100px]" >
                <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="title text-[50px]">
                {currentLanguage === 'en' ? ( <> {t("Our")} <span>{t("Portfolio")} </span> </> ) : ( <span> {t("Portfolio")} </span> )}  
                </div>

                <div className="Portf_images" >
                {images.map((image, index) => (
                            <div key={index} className="logo-containr">
                                <img src={image} alt={Partner ${index + 1}} />
                            </div>
                        ))}
                </div>

                <Btn Caption={t("Read More")} link={'/portfolio' }/>

            </section>*/