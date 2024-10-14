import React from "react";
import { Component } from "react";
import image from '/Assets/images/AboutPage/4.png'
import './about.css';
import { Padding } from "@mui/icons-material";
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';

class Sec4 extends Component {
    state = {  } 
    render() { 
        const { t } = this.props;
        const currentLanguage = i18n.language.split('-')[0];
        return (
            <section className="sec2 padc bg1 mission">
                    <div className="left-about " >
                       <div>
                       <div className="title missionTitle"  style={{marginBottom:'10px'}}>
                        {/* {t("Our")} <span>{t("Mession")}</span> */}
                        {currentLanguage === 'en' ? ( <> {t("Our")} <span>{t("Mession")} </span> </> ) : ( <span> {t("OurMession")} </span> )} 
                        </div>
                        <div className="desc">
                            <p>
                            {t("Dedicated")}</p>
                        </div>
                       </div>
                       <div>
                       <div className="title" style={{marginTop: '20px',marginBottom:'10px'}}>
                        {/* {t("Our")} <span>{t("Vissoin")}</span> */}
                        {currentLanguage === 'en' ? ( <> {t("Our")} <span>{t("Vissoin")} </span> </> ) : ( <span> {t("OurVissoin")} </span> )} 
                        </div>
                        <div className="desc">
                            <p>
                            {t("We envision")}</p>
                        </div>
                       </div>

                    </div>
                    <div className="right">
                        <div className="imagepana">
                        <img src={image} alt="" />
                        </div>
                        
                    </div>
            </section>
        );
    }
}
 
export default withTranslation()(Sec4);
