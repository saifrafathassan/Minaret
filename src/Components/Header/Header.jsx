import React from "react";
import { Component } from "react";
import './Header.css';
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';

class Header extends Component {
    state = {  } 
    render() { 
        const currentLanguage = i18n.language.split('-')[0];
        return (
            <section className="Header-container padc">
                <div  dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="Caption" >
                    <p>{this.props.Cap} </p>
                </div>

            </section>
        );
    }
}
 
export default withTranslation()(Header);