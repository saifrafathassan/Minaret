import React, { useEffect, useRef } from "react";
import './About.css';
import image from '/Assets/images/about.png';
import { Link } from "react-router-dom";
const About = () => {
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
        <div className="padc about_container py-[150px]">
            <div className="About-left" ref={aboutleftref} >
                <p className="p1">
                    Choose The Minaret Marketing Agency for innovative strategies, a dedicated team, and a commitment to your brand's growth.
                </p>
                <p className="p1">
                    We're not just marketers; we're your partners in navigating the digital landscape.
                </p>
                <div className="p1">
                    <button className="button"><Link to='/About'>Learn More</Link></button>
                </div>
            </div>

            <div className="About-right" ref={aboutRightRef}>
                <div className="about-img  animate-rotate hover:animate-spin" ref={imageref}>
                    <img src={image} alt="" />
                </div>
                <div className="text">
                    <span className="why pt-4">WHY</span>
                    {/* <br /> */}
                    <span>CHOOSE</span>
                    <span>US</span>
                </div>
            </div>
        </div>
    );
};

export default About;
