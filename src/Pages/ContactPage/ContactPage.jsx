import React from "react";
import { Component } from "react";
import Header from "../../Components/Header/Header";
import Sec1 from "./Sec1";
import Sec2 from "./Sec2";
import './contact.css';
import Sec3 from "./Sec3";
import Sec4 from "./Sec4";
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';

class ContactPage extends Component {
    state = {  } 
    render() { 
        const currentLanguage = i18n.language.split('-')[0];
        const { t } = this.props;
        return (
            <section dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="cont-page">
                <Header Cap={t('Conatct Us')}/>
                <Sec1/>
                <Sec2/>
                <Sec3/>
                <Sec4/>
            </section>
        );
    }
}

export default withTranslation()(ContactPage);