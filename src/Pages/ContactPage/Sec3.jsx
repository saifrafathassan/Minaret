import React from 'react';
import { Component } from 'react';
import arow from '/Assets/Gifs/0.gif'
import { withTranslation } from 'react-i18next';

class Sec3 extends Component {
    state = {  } 
    render() { 
        const { t } = this.props;
        const media=[
            {'title': t("contacttitle1"),'content':{"Address": t("Address1")},'icon':"/Assets/Gifs/cont1.gif"},
            {'title': t("contacttitle2"),'content':{'phone':'+201151131131','email':'Info@theminaretagency.com'},'icon':"/Assets/Gifs/cont2.gif"},
            {'title': t("contacttitle3"),'content':{'Facebook':' The Minaret Agency','Instgram':' The Minaret Agency','Sanpchat':' The Minaret Agency'},'icon':"/Assets/Gifs/cont3.gif"}
        ]

        return (
            <section className='Sec3 bg1 padc'>
                <div className='title'>
                {t("Contact us")} <span> {t("Directly")}</span>
                </div>
                <div className='cards'>
                {
                        media.map((card, index) => (
                            <div key={index} className="card">
                                <div className="card-header">
                                    {card.title}
                                </div>
                                <div className="card-content p-3">
                                    {
                                        Object.entries(card.content).map(([key, value], i) => (
                                            <p key={i}> <strong className='secolor'>{key}:</strong> {value} </p>
                                        ))
                                    }
                                </div>

                                <div className="card-bottom">
                             <div className="btm1st">
                                 <img src={arow} alt="->" />
                             </div>
                             <p>{t("Read More")}</p>
                             <div className="btm3d">
                                 <img src={card.icon} alt="" />
                             </div>
                         </div>
                            </div>
                             

                            
                        ))
                    }

                </div>


            </section>
        );
    }
}

export default withTranslation()(Sec3);
