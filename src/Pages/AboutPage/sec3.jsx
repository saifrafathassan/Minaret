import React from "react";
import { Component } from "react";
import image from '/Assets/images/AboutPage/bro.png'
import './about.css';
class Sec3 extends Component {
    state = {  } 
    render() { 
        return (
            <section className="padc bg2 sec-reverse">
                    <div className="left-about">
                        <div className="imagepana">
                        <img src={image} alt="" />
                        </div>
                        
                    </div>

                    <div className="right" >
                        <div className="title" style={{marginBottom:'10px'}}>
                        Our <p className="mcolor">Message</p> 
                        </div>
                        <div className="desc">
                            <p>
                            Beyond merely serving as a marketing agency, we position ourselves as architects in the digital frontier, guiding brands through the complexities with strategic finesse and innovative thinking. 'Minaret' isn't just our name; it's our commitment to raising your brand's profile and ensuring its message resonates across the digital expanse                            </p>
                        </div>

                    </div>
            </section>
        );
    }
}
 
export default Sec3;
