import React, { useEffect, useRef } from "react";
import './About.css';
import image from '/Assets/images/about.png';
import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';

const About = ({t}) => {
    const aboutRightRef = useRef(null);
    const aboutleftref=useRef(null);
    const imageref= useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {


                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if(entry.target.classList[0]==='About-left'){
                            entry.target.classList.add('animate-down')
                        }   
                        if(entry.target.classList[0]==='about-img'){
                            entry.target.classList.add('rotate')
                        }  
                        if(entry.target.classList[0]==='About-right'){
                            entry.target.classList.add('animate-up-down')
                        } 
                        

                    } else {
                        entry.target.classList.remove("animate-up-down");
                        entry.target.classList.remove( "animate-down");
                        entry.target.classList.remove( "rotate");
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (aboutRightRef.current) {
            observer.observe(aboutRightRef.current);
            observer.observe(aboutleftref.current);
            observer.observe(imageref.current)
            
        }
        return () => {
        };
    }, []);

    return (
        <div className="padc about_container sm:py-[40px] md:py-[100px]">
            <div className="About-left" ref={aboutleftref} >
                <p className="p1">
                {t("Choose The Minaret")}
                </p>
                <p className="p1">
                    {t("We're not just")}
                </p>
                <div className="p1">
                    <button className="button"><Link to='/About'>{t("Learn More")}</Link></button>
                </div>
            </div>

            <div className="About-right" ref={aboutRightRef}>
                <div className="about-img  animate-rotate hover:animate-spin" ref={imageref}>
                    <img src={image} alt="" />
                </div>
                <div className="text">
                    <span className="why pt-4">{t("WHY")}</span>
                    {/* <br /> */}
                    <span>{t("CHOOSE")}</span>
                    <span>{t("US")}</span>
                </div>
            </div>
        </div>
    );
};

export default withTranslation()(About);
