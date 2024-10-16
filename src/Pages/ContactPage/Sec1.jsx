import React from "react";
import { Component } from "react";
import image from '/Assets/images/contact/2.png';
import { withTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

class Sec1 extends Component {
    state = { } 
    render() { 
        const { t } = this.props;

        const imageVariants = {
            hidden: { opacity: 0, x: 100 }, 
            visible: { opacity: 1, x: 0 },  
        };

        const textVariants = {
            hidden: { opacity: 0, y: -20 }, 
            visible: { opacity: 1, y: 0 },  
        };

        return (
            <section className="padc bg1 Sec">
                <div className="sec-left">
                    <div className="title">
                        <p>{t("Get")} <span>{t("in Touch")}</span></p>
                    </div>
                    <div className="sup-title frthcolor pb-3">
                        {t("Embark")}
                    </div>
                    
                    <motion.div 
                        className="desc"
                        initial="hidden"
                        whileInView="visible"
                        variants={textVariants}
                        transition={{ duration: 1 }} 
                        viewport={{ once: true, amount: 0.5 }} 
                    >
                        <p>{t("Ready to elevate")}</p> 
                    </motion.div>
                </div>
                
                <div className="right">
                    <motion.img 
                        src={image} 
                        alt="" 
                        initial="hidden"
                        whileInView="visible"
                        variants={imageVariants}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.5 }} 
                    />
                </div>
            </section>
        );
    }
}

export default withTranslation()(Sec1);
