import React from "react";
import { Component } from "react";
import img1 from '/Assets/images/career/1.png';
import img2 from '/Assets/images/career/2.png';
import img3 from '/Assets/images/career/3.png';
import { withTranslation } from 'react-i18next';

class Culutre extends Component {
    state = {} 
    render() { 
        const { t } = this.props;
        return (
           <div className="padc bg1 cultre-container">
                <div className="title" >
                    {t("Our")} <span>{t("Culutre")}</span>
                </div>

                <div className="life">
                    <div className="title">
                    {t("Life at The Agency")}
                    </div>
                    <div className="contents-1 " >
                        <div className="contents-left" >
                            <span>1</span>
                            <p className="desc  ">
                                {t("Life")}

                            </p>
                        </div>
                        <div className="contents-right">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </div>

            <div className="vision">

            <div className="title">
            {t("Vision and Values")}
                    </div>
                    <div className="contents-1 " >
                    <div className="contents-right">
                            <img src={img2} alt="" />
                        </div>

                        <div className="contents-left" >
                            <span >2</span>
                            <p className="desc  ">
                                {t("At The Minaret Marketing Agency")}

                            </p>
                        </div>
                        
                    </div>

            </div>

            <div className="diversity">
            <div className="title">
            {t("Diversity and Inclusion Statement")}
                    </div>
                    <div className="contents-1 " >
                        <div className="contents-left" >
                            <span>3</span>
                            <p className="desc  ">
                                {t("Diversity is our strength")}

                            </p>
                        </div>
                        <div className="contents-right">
                            <img src={img3} alt="" />
                        </div>
                    </div>
            </div>
           </div>
        );
    }
}

export default withTranslation()(Culutre);