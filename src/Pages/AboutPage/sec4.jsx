import React from "react";
import { Component } from "react";
import image from '/Assets/images/AboutPage/4.png'
import './about.css';
import { Padding } from "@mui/icons-material";
class Sec4 extends Component {
    state = {  } 
    render() { 
        return (
            <section className="sec2 padc bg1 mission">
                    <div className="left-about " >
                       <div>
                       <div className="title missionTitle"  style={{marginBottom:'10px'}}>
                        Our <span>Mession</span>
                        </div>
                        <div className="desc">
                            <p>
                            Dedicated to your brand's success, we delve deep into your objectives from the onset, crafting a roadmap to not just meet but exceed them. Our commitment is to elevate our clients to their best selves, supported by a team of experts passionate about realizing this transformation.   </p>
                        </div>
                       </div>
                       <div>
                       <div className="title" style={{marginTop: '20px',marginBottom:'10px'}}>
                        Our <span>Vissoin</span>
                        </div>
                        <div className="desc">
                            <p>
                            We envision a community thriving alongside its businesses, fostering an environment rich in creativity and innovation. Whether igniting the spark or fueling the fire of community growth, we are thrilled to embark on this journey with you, contributing to a future where every business shines brightly, powered by innovation and inspiration.</p>
                        </div>
                       </div>

                    </div>
                    <div className="right">
                        <div className="imagepana">
                        <img src={image} alt="" />
                        </div>
                        
                    </div>
            </section>
        );
    }
}
 
export default Sec4;
