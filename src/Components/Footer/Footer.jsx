import React from "react";
import { Component } from "react";
import './Footer.css';
import logo from '/Assets/images/logo.png';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';

class Footer extends Component {
    state = {}
    render() {
        const { t } = this.props;
        const currentLanguage = i18n.language.split('-')[0];
        return (
            <section dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="Footer padc">
                <div className="footer-content" >
                    <div className="col1">
                        
                        <img src={logo} alt="" />
                        <p>
                        {t("Navigate through")}
                        </p>
                    </div>

                    <div className="col2">
                        <div className="f-title"><span>{t("Our pages")}</span></div>
                        <ul>
                            <li><Link onClick={() => window.scrollTo(0,0)} to='/'> {t("Home")}</Link> </li>
                            <li><Link onClick={() => window.scrollTo(0,0)} to='/About'> {t("About")}</Link>  </li>
                            <li><Link onClick={() => window.scrollTo(0,0)} to='/Services'> {t("Services")}</Link>  </li>
                            <li><Link onClick={() => window.scrollTo(0,0)} to='/Blog'> {t("Blog")}</Link> </li>
                            <li><Link onClick={() => window.scrollTo(0,0)} to='/Portfolio'> {t("Portfolio")}</Link> </li>
                            <li><Link onClick={() => window.scrollTo(0,0)} to='/Career'> {t("Career")}</Link> </li>
                            <li><Link onClick={() => window.scrollTo(0,0)} to='/Contact us'> {t("Contact us")}</Link> </li>
                        </ul>

                    </div>

                    <div className="col3">
                    <div className="f-title"><span>{t("Contact Info")}</span></div>
                        <p>
                        {t("Management")} : +201151131131
                        </p>
                        <p>
                        {t("Sales")} : +96899208915
                        </p>
                        <p>
                        {t("Our mail")} : Info@theminaretagency.com
                        </p>
                    </div>
                </div>
                <div className="copy">
                    <hr/>
                    <span>{t("Footer")}</span>
                </div>
            </section>

        );
    }
}

export default withTranslation()(Footer);