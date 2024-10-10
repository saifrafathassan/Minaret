import React from 'react';
import { Component } from 'react';
import Header from '../../Components/Header/Header';
import PortSection from './portfolioSection';
import './portfolio.css'
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';

class PortofolioPage extends Component {
    state = {  } 
    render() { 
        const currentLanguage = i18n.language.split('-')[0];
        const { t } = this.props;
        return (
            <section dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className=''>
             <Header Cap= {t('Portfolio')}/>   
             <PortSection/>
            </section>
        );
    }
}
 
export default withTranslation()(PortofolioPage);