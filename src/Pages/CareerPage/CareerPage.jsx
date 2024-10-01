import React from "react";
import { Component } from "react";
import Header from "../../Components/Header/Header";
import './Career.css'
import Culutre from "./Culture";
import Why from "./whyWork";
import Hiring from "./hiring";
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';

class CareerPage extends Component {
    state = {  } 
    render() { 
        const currentLanguage = i18n.language.split('-')[0];
        const { t } = this.props;
        return (
            <section dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}>
                    <Header Cap={t("Join Our Journey of innovation and success")}/>
                    <Culutre/>
                    <Why/>
                    <Hiring/>
            </section>
        );
    }
}
 
export default withTranslation()(CareerPage);
