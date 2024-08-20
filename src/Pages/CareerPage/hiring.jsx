import React from "react";

import { Component } from "react";
import img5 from '/Assets/images/career/5.png';
import img6 from '/Assets/images/career/6.png';
import FAQAccordion from "../ContactPage/FAQAccordion";
class Hiring extends Component {
    constructor(props) {
        super(props);
        this.rightRef = React.createRef();
        
        this.state = { isVisible: false };
    }
    
    componentDidMount() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.setState({ isVisible: true });
                        observer.disconnect();
                    }
                    else{
                        this.setState({ isVisible: false });
                    }
                });
            },
            { threshold: 0.1 } // Adjust the threshold as needed
        );
    
        if (this.rightRef.current) {
            observer.observe(this.rightRef.current);
        }
    }
    render() { 
        return (
            <div className="Hiring-container padc bg1">
                <div className="title">
                Our <span>Hiring Process</span>
                </div>
               

                <div className="hiring-content" >
               
                    <div className="hiring-content-left">
                        <div className="title">Our hiring process is transparent and straightforward:</div>
                        <div className="benfts-list desc">
                                    <ul>
                                        <li>Submitting Your Application: Share your story and skills with us through our online application.</li>
                                        <li>Initial Review and Screening: We carefully review each application to find potential matches.</li>
                                        <li>Interview(s): Engage in in-depth discussions with HR and potential team members.</li>
                                        <li>Task or Project: For some roles, demonstrate your skills through a practical task.</li>
                                        <li>Offer and Onboarding: Welcome to the team! We'll guide you through every step of joining our agency.</li>
                                    </ul>
                        </div>
                        <div className="Apply-button bg2">
                            <span>Apply</span>
                        </div>

                    </div>
                    <div className="hiring-content-right">
                        <img src={img6} alt=""  ref={this.rightRef}  className= {` ${this.state.isVisible ? ' animate-up ' : ''}`} />
                        <img src={img5} alt="" />
                        
                    </div>
                </div>

                <FAQAccordion/>
            </div>
        );
    }
}
 
export default Hiring;