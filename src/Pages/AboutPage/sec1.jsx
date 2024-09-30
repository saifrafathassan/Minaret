import React from "react";
import { withTranslation } from 'react-i18next';
import { Component } from "react";
import image from '/Assets/images/AboutPage/1.png';
import './about.css';
import image2 from '/Assets/images/AboutPage/vec.png';

class Sec1 extends Component {  
    constructor(props) {
    super(props);
    this.rightRef = React.createRef();
    this.eclips=React.createRef();
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
    
    if (this.eclips.current) {
        observer.observe(this.eclips.current);
    }
}

render() { 
    const { t } = this.props;
    return (
        <div className="sec1 padc bg1" style={{paddingBottom: '150px'}}>
            <div className= {`left-about ${this.state.isVisible ? 'animate-apear' : ''}`} 
                ref={this.rightRef}>
                <div className="left-header secolor">
                    <p>{t("Discover the Minaret Magic")}</p>
                </div>
                <div className="pragrf">
                    <p className="frthcolor">
                        {t("Envision a towering")}
                    </p>
                </div>
                <div className="pragrf">
                    <p className="frthcolor">
                        {t("We are committed")}
                    </p>
                </div>
            </div>
            <div 
                className='right rightImg'
            >
                <img src={image} alt="" />
            </div>
            <div className= {`Vector ${this.state.isVisible ? 'animate-flash' : ''}`} 
                ref={this.rightRef}>
                <img src={image2} alt="" />
            </div>
            <div className= {`eclips ${this.state.isVisible ? ' animate-flash ' : ''}`} 
                ref={this.eclips}>
            
                <p className="mcolor">
                    {t("How do we")}<span className="frthcolor">{t("Let us show you the way.")} </span>
                </p>
            </div>
        </div>
    );
}
}
export default withTranslation()(Sec1);
