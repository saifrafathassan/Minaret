import React from "react";

import { Component } from "react";
import img4 from '/Assets/images/career/4.png';
class Why extends Component {
    state = {  } 
    render() { 
        return (
            <div className="why-container padc bg2">
                    <div className="title">
                    Why <p className="mcolor" >Work With Us?</p>
                    </div>

                    <div className="why-content" >
                        <div className="why-contents-left">
                            <img src={img4} alt="" />
                        </div>
                        <div className="why-contents-right">
                                <div className="title">
                                Benefits and Perks:
                                </div>
                                <div className="benfts-list desc">
                                    <ul>
                                        <li>Competitive salaries and performance bonuses to reward your hard work and dedication.</li>
                                        <li>Comprehensive health insurance, including dental and vision, ensuring    you and your loved ones are well taken care of.</li>
                                        <li>Flexible working hours and remote work opportunities, because we understand the importance of work-life balance.</li>
                                        <li>Personal development allowances for courses, conferences, and training, empowering you to reach your full potential.</li>
                                        <li>Team retreats and social events that not only help us unwind but also strengthen our bonds.</li>
                                    </ul>
                                </div>
                        </div>
                    </div>
            </div>
        );
    }
}
 
export default Why;