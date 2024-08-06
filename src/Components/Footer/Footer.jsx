import React from "react";
import { Component } from "react";
import './Footer.css';
import logo from '/Assets/images/logo.png';
import { Link } from 'react-router-dom';

class Footer extends Component {
    state = {}
    render() {
        return (
            <section className="Footer padc">
                <div className="footer-content" >
                    <div className="col1">
                        <img src={logo} alt="" />
                        <p>
                        Navigate through our site with ease. Connect with us on social media, 
or get in touch directly. Your journey to digital excellence starts with 
a single step.
                        </p>
                    </div>

                    <div className="col2">
                        <div className="f-title"><span>Our pages</span></div>
                        <ul>
                            <li><Link to='/'> Home</Link> </li>
                            <li><Link to='/About'> About</Link>  </li>
                            <li><Link to='/Services'> Services</Link>  </li>
                            <li><Link to='/Blog'> Blog</Link> </li>
                            <li><Link to='/Portfolio'> Portfolio</Link> </li>
                            <li><Link to='/Career'> Career</Link> </li>
                            <li><Link to='/Contact us'> Contact us</Link> </li>
                        </ul>

                    </div>

                    <div className="col3">
                    <div className="f-title"><span>Contact Info</span></div>
                        <p>
                        Call us :+201151131131
                        </p>
                        <p>
                        Our mail : Info@theminaretagency.com
                        </p>
                    </div>
                </div>
                <div className="copy">
                    <hr/>
                    <span>The MINARET Marketing Agency -@2024 copy right</span>
                </div>
            </section>

        );
    }
}

export default Footer;