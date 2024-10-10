import React from "react";
import { Component } from "react";
import image from '/Assets/images/contact/2.png'
import { withTranslation } from 'react-i18next';

class Sec1 extends Component {
    state = {  } 
    render() { 
        const { t } = this.props;
        return (
                <section className="padc bg1 Sec">
                    <div className="sec-left">
                        <div className="title">
                            <p>{t("Get")} <span>{t("in Touch")}</span></p>
                        </div>
                        <div className="sup-title frthcolor ">
                        {t("Embark")}
                        </div>

                        <div className="desc">
                            <p>{t("Ready to elevate")}</p>
                        </div>
                    </div>
                    <div className="right ">
                        <img src={image} alt="" />
                    </div>

                </section>
        );
    }
}
 
export default withTranslation()(Sec1);