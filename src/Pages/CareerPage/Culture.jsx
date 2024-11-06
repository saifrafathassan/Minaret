import React from "react";
import { Component } from "react";
import img1 from '/Assets/images/career/1.png';
import img2 from '/Assets/images/career/2.png';
import img3 from '/Assets/images/career/3.png';
import { withTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

class Culutre extends Component {
    state = {} 
    render() { 
        const { t } = this.props;

        const textVariants = {
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
        };

        const imageVariants = {
            hidden: { opacity: 0, x: 0 },
            visible: { opacity: 1, x: 0 },
        };

        return (
           <div className="padc bg1 cultre-container">
                <motion.div 
                    className="title" 
                    initial="hidden"
                    whileInView="visible"
                    variants={textVariants}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {t("Our")} <span>{t("Culutre")}</span>
                </motion.div>

                <div className="life">
                    <motion.div 
                        className="title"
                        initial="hidden"
                        whileInView="visible"
                        variants={textVariants}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {t("Life at The Agency")}
                    </motion.div>

                    <div className="contents-1">
                        <motion.div 
                            className="contents-left"
                            initial="hidden"
                            whileInView="visible"
                            variants={textVariants}
                            transition={{ duration: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <span>1</span>
                            <p className="desc">
                                {t("Life")}
                            </p>
                        </motion.div>

                        <motion.div 
                            className="contents-right"
                            initial="hidden"
                            whileInView="visible"
                            variants={imageVariants}
                            transition={{ duration: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <img src={img1} className="py-14" alt="" />
                        </motion.div>
                    </div>
                </div>

                <div className="vision">
                    <motion.div 
                        className="title"
                        initial="hidden"
                        whileInView="visible"
                        variants={textVariants}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {t("Vision and Values")}
                    </motion.div>

                    <div className="contents-1">
                        <motion.div 
                            className="contents-right"
                            initial="hidden"
                            whileInView="visible"
                            variants={imageVariants}
                            transition={{ duration: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <img src={img2} className="py-3" alt="" />
                        </motion.div>

                        <motion.div 
                            className="contents-left"
                            initial="hidden"
                            whileInView="visible"
                            variants={textVariants}
                            transition={{ duration: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <span>2</span>
                            <p className="desc">
                                {t("At The Minaret Marketing Agency")}
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="diversity">
                    <motion.div 
                        className="title"
                        initial="hidden"
                        whileInView="visible"
                        variants={textVariants}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {t("Diversity and Inclusion Statement")}
                    </motion.div>

                    <div className="contents-1">
                        <motion.div 
                            className="contents-left"
                            initial="hidden"
                            whileInView="visible"
                            variants={textVariants}
                            transition={{ duration: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <span>3</span>
                            <p className="desc">
                                {t("Diversity is our strength")}
                            </p>
                        </motion.div>

                        <motion.div 
                            className="contents-right"
                            initial="hidden"
                            whileInView="visible"
                            variants={imageVariants}
                            transition={{ duration: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <img src={img3} className="py-3" alt="" />
                        </motion.div>
                    </div>
                </div>
           </div>
        );
    }
}

export default withTranslation()(Culutre);
