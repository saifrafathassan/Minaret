import React from "react";
import { Component } from "react";
import image from '/Assets/images/AboutPage/pana.png'
import './about.css';
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';

class Sec2 extends Component {  constructor(props) {
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
        { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (this.rightRef.current) {
        observer.observe(this.rightRef.current);
    }
    
}
    render() { 
        const { t } = this.props;
        const currentLanguage = i18n.language.split('-')[0];
        return (
            <section className="sec2 padc bg2" >
                    <div className= {`left-about  ${this.state.isVisible ? 'animate-apear' : ''}`} 
                ref={this.rightRef} >
                        <div className="title" style={{marginBottom:'10px'}}>
                        {/* {t("Our")} <p className="mcolor">{t("Story")}</p>  */}
                        {currentLanguage === 'en' ? ( <> {t("Our")} <p className="mcolor">{t("Story")} </p> </> ) : ( <p className="mcolor"> {t("OurStory")} </p> )}  
                        </div>
                        <div className="desc">
                            <p>
                            {t("At Minaret Marketing")}
                            </p>
                        </div>

                    </div>
                    <div className={`right  ${this.state.isVisible ? 'animate-apear-2' : ''}`} 
                ref={this.rightRef} >
                        <div className="imagepana">
                        <img src={image} alt="" />
                        </div>
                        
                    </div>
            </section>
        );
    }
}
 
export default withTranslation()(Sec2);
