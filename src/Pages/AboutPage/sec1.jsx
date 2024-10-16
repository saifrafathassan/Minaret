import React from "react";
import { withTranslation } from 'react-i18next';
import { motion } from "framer-motion"; 
import { Component } from "react";
import image from '/Assets/images/AboutPage/1.png';
import './about.css';
import image2 from '/Assets/images/AboutPage/vec.png';
import i18n from 'i18next';

class Sec1 extends Component {
    constructor(props) {
        super(props);
        this.rightRef = React.createRef();
        this.eclips = React.createRef();
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
                });
            },
            { threshold: 0.1 } 
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
        const currentLanguage = i18n.language.split('-')[0];

        const textVariants = {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
        };

        return (
            <div className="sec1 padc bg1" style={{ paddingBottom: '150px' }}>
                <motion.div
                    className={`left-about ${this.state.isVisible ? 'animate-apear' : ''}`}
                    ref={this.rightRef}
                    initial="hidden"
                    animate={this.state.isVisible ? "visible" : "hidden"}
                    variants={textVariants}
                    transition={{ duration: 0.5 }}
                >
                    <div className="left-header secolor">
                        <p>{t("Discover the Minaret Magic")}</p>
                    </div>
                    <motion.div
                        className="pragrf"
                        initial="hidden"
                        animate={this.state.isVisible ? "visible" : "hidden"}
                        variants={textVariants}
                        transition={{ duration: 0.5, delay: 0.2 }} 
                    >
                        <p className="frthcolor">
                            {t("Envision a towering")} 
                        </p>
                    </motion.div>
                    <motion.div
                        className="pragrf"
                        initial="hidden"
                        animate={this.state.isVisible ? "visible" : "hidden"}
                        variants={textVariants}
                        transition={{ duration: 0.5, delay: 0.4 }} 
                    >
                        <p className="frthcolor">
                            {t("We are committed")} 
                        </p>
                    </motion.div>
                </motion.div>
                <div className='right rightImg'>
                    <img src={image} alt="" />
                </div>
                <motion.div
                    className={`${currentLanguage === 'ar' ? 'Vector1' : 'Vector'} ${this.state.isVisible ? 'animate-flash' : ''}`}
                    ref={this.rightRef}
                    initial="hidden"
                    animate={this.state.isVisible ? "visible" : "hidden"}
                    variants={textVariants}
                    transition={{ duration: 0.5, delay: 0.6 }} 
                >
                    <img style={{ transform: window.innerWidth < 640 ? 'scaleX(1)' : (currentLanguage === 'ar' ? 'scaleX(-1)' : 'scaleX(1)'), }} src={image2} alt="" />
                </motion.div>
                <motion.div
                    className={`${currentLanguage === 'ar' ? 'eclips1' : 'eclips'} ${this.state.isVisible ? ' animate-flash ' : ''}`}
                    ref={this.eclips}
                    initial="hidden"
                    animate={this.state.isVisible ? "visible" : "hidden"}
                    variants={textVariants}
                    transition={{ duration: 0.5, delay: 0.8 }} 
                >
                    <p className="mcolor">
                        {t("How do we")}<span className="frthcolor">{t("Let us show you the way.")} </span>
                    </p>
                </motion.div>
            </div>
        );
    }
}

export default withTranslation()(Sec1);
