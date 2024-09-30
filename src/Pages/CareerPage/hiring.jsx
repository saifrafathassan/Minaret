import React from "react";
import { withTranslation } from 'react-i18next';
import { Component } from "react";
import img5 from '/Assets/images/career/5.png';
import img6 from '/Assets/images/career/6.png';
import FAQAccordion from "../ContactPage/FAQAccordion";
class Hiring extends Component {
    constructor(props) {
        super(props);
        this.rightRef = React.createRef();
        
        this.state = { isVisible: false };
    }
    
    componentDidMount() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.setState({ isVisible: true });
                        observer.disconnect();
                    }
                    else{
                        this.setState({ isVisible: false });
                    }
                });
            },
            { threshold: 0.1 } // Adjust the threshold as needed
        );
    
        if (this.rightRef.current) {
            observer.observe(this.rightRef.current);
        }
    }
    render() { 
        const { t } = this.props;
        return (
            <div className="Hiring-container padc bg1">
                <div className="title">
                {t("Our")} <span>{t("Hiring Process")}</span>
                </div>
               

                <div className="hiring-content" >
               
                    <div className="hiring-content-left">
                        <div className="title">{t("Our hiring process")}</div>
                        <div className="benfts-list desc">
                                    <ul>
                                        <li>{t("Submitting")}</li>
                                        <li>{t("Initial")}</li>
                                        <li>{t("Interview")}</li>
                                        <li>{t("Task")}</li>
                                        <li>{t("Offer")}</li>
                                    </ul>
                        </div>
                        <div className="Apply-button bg2">
                            <span>{t("Apply")}</span>
                        </div>

                    </div>
                    <div className="hiring-content-right">
                        <img src={img6} alt=""  ref={this.rightRef}  className= {` ${this.state.isVisible ? ' animate-up ' : ''}`} />
                        <img src={img5} alt="" />
                        
                    </div>
                </div>

                <FAQAccordion/>
            </div>
        );
    }
}

export default withTranslation()(Hiring);