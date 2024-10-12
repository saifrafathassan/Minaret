import React from "react";
import { withTranslation } from 'react-i18next';
import { Component } from "react";
import img4 from '/Assets/images/career/4.png';
import { motion } from 'framer-motion';

class Why extends Component {
    state = {  } 
    render() { 
        const { t } = this.props;

        const imageVariants = {
            hidden: { opacity: 0, x: 0 },
            visible: { opacity: 1, x: 0 }, 
        };

        const listVariants = {
            hidden: { opacity: 0, y: 20 },
            visible: (i) => ({
                opacity: 1,
                y: 0,
                transition: { delay: i * 0.4 }, 
            }),
        };

        return (
            <div className="why-container padc bg2">
                <div className="title">
                    {t("Why")} <p className="mcolor">{t("Work With Us?")}</p>
                </div>

                <div className="why-content">
                    <div className="why-contents-left">
                        <motion.img 
                            src={img4} 
                            alt="" 
                            initial="hidden" 
                            whileInView="visible"
                            variants={imageVariants}
                            transition={{ duration: 2 }}
                            viewport={{ once: true, amount: 0.5 }}
                        />
                    </div>

                    <div className="why-contents-right">
                        <div className="title">
                            {t("Benefits and Perks:")}
                        </div>

                        <div className="benfts-list desc">
                            <ul>
                                {["Competitive", "Comprehensive", "Flexible", "Personal", "Team"].map((benefit, index) => (
                                    <motion.li
                                        key={index}
                                        custom={index} 
                                        initial="hidden"
                                        whileInView="visible"
                                        variants={listVariants}
                                        viewport={{ once: true, amount: 1 }}
                                    >
                                        {t(benefit)}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Why);
