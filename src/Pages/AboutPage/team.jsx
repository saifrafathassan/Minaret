import React from "react";
import { Component } from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { FiPhone } from "react-icons/fi";
import ceo from '/Assets/images/AboutPage/team/1.png'
import soft from '/Assets/images/AboutPage/team/2.png'
class Team extends Component {
    state = {}
    render() {
        return (
            <section className="padc Team-section bg1">
                <div className="header">
                    <div className="title">
                        <p >Meet <span style={{color:'#8A1848'}}> the Team</span></p>
                    </div>
                    <div className="desc">
                        <p>The Architects Behind Your Brand's Ascension</p>
                    </div>
                </div>

                <div className="team desc">
                    <div className="member">
                        <div className="mem-image">
                            <img src={ceo} alt="" />
                        </div>
                        <div className="mem-data">
                            <div className="Name">
                                <p> Ahmed El Khatib </p>
                            </div>
                            <div className="job">
                            CEO
                            </div>
                            <hr/>
                            <div className="summary" >
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                            </div>
                            <div className="social">
                                <div className="icon"> <TiSocialLinkedin size={20} /></div>
                                <div className="icon"> <TiSocialFacebook size={20}/></div>
                                <div className="icon"> <FiPhone size={20}/></div>
                            </div>
                            <div className="social2">
                                <div className="icon"> <TiSocialLinkedin size={10} /></div>
                                <div className="icon"> <TiSocialFacebook size={10}/></div>
                                <div className="icon"> <FiPhone size={10}/></div>
                            </div>
                        </div>
                    </div>

                    <div className="member ">
                        <div className="mem-image">
                            <img src={soft} alt="" />
                        </div>
                        <div className="mem-data ">
                            <div className="Name ">
                                <p> Mohamed Ali </p>
                            </div>
                            <div className="job">
                            Software Manager
                            </div>
                            <hr/>
                            <div className="summary" >
                                <p>As a Software Manager at Minerate Agency, lead a team of developers in creating and implementing software solutions to optimize marketing strategies, and ensure top-tier quality and performance in all projects. </p>
                            </div>
                            <div className="social">
                                <div className="icon"> <TiSocialLinkedin size={20} /></div>
                                <div className="icon"> <TiSocialFacebook size={20}/></div>
                                <div className="icon"> <FiPhone size={20}/></div>

                            </div>
                            <div className="social2">
                                <div className="icon"> <TiSocialLinkedin size={10} /></div>
                                <div className="icon"> <TiSocialFacebook size={10}/></div>
                                <div className="icon"> <FiPhone size={10}/></div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        );
    }
}

export default Team;