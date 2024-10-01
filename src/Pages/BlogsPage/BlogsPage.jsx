import React from "react";
import { Component } from "react";
import Header from "../../Components/Header/Header";
import Blogs from "./Blogs";
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';
import './blogs.css'

class BlogsPage extends Component {
    state = {  } 
    render() { 
        const { t } = this.props;
        const currentLanguage = i18n.language.split('-')[0];
        return (
            <section dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className=" ">
                
                <Header Cap={t('Read Our Latest Blogs')}/>
                <Blogs/>
            </section>

        );
    }
}

export default withTranslation()(BlogsPage);