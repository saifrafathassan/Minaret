import React from "react";
import { withTranslation } from 'react-i18next';
import { Component } from "react";
import img4 from '/Assets/images/career/4.png';
class Why extends Component {
    state = {  } 
    render() { 
        const { t } = this.props;
        return (
            <div className="why-container padc bg2">
                    <div className="title">
                    {t("Why")} <p className="mcolor" >{t("Work With Us?")}</p>
                    </div>

                    <div className="why-content" >
                        <div className="why-contents-left">
                            <img src={img4} alt="" />
                        </div>
                        <div className="why-contents-right">
                                <div className="title">
                                {t("Benefits and Perks:")}
                                </div>
                                <div className="benfts-list desc">
                                    <ul>
                                        <li>{t("Competitive")}</li>
                                        <li>{t("Comprehensive")}</li>
                                        <li>{t("Flexible")}</li>
                                        <li>{t("Personal")}</li>
                                        <li>{t("Team")}</li>
                                    </ul>
                                </div>
                        </div>
                    </div>
            </div>
        );
    }
}
 
export default withTranslation()(Why);