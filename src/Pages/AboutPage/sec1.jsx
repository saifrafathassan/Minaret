import React from "react";

import { Component } from "react";
import image from '/Assets/images/AboutPage/1.png';
import './about.css';
import image2 from '/Assets/images/AboutPage/vec.png';
class Sec1 extends Component {  constructor(props) {
    super(props);
    this.rightRef = React.createRef();
    this.eclips=React.createRef();
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
    
    if (this.eclips.current) {
        observer.observe(this.eclips.current);
    }
}

render() { 
    return (
        <div className="sec1 padc bg1">
            <div className= {`left-about ${this.state.isVisible ? 'animate-apear' : ''}`} 
                ref={this.rightRef}>
                <div className="left-header secolor">
                    <p>Discover the Minaret Magic</p>
                </div>
                <div className="pragrf">
                    <p className="frthcolor">
                        Envision a towering minaret piercing the skyline, a beacon visible from miles away, its call resonating uniquely through the air. This powerful imagery captures the essence of our approach at Minaret Marketing Agency.
                    </p>
                </div>
                <div className="pragrf">
                    <p className="frthcolor">
                        We are committed to elevating your brand to unprecedented heights making it not just seen, but deeply experienced; not just heard, but profoundly remembered. Our unique blend of creativity and data-driven strategies ensures that your brand's presence is impactful and enduring.
                    </p>
                </div>
            </div>
            <div 
                className='right'
            >
                <img src={image} alt="" />
            </div>
            <div className= {`Vector ${this.state.isVisible ? 'animate-flash' : ''}`} 
                ref={this.rightRef}>
                <img src={image2} alt="" />
            </div>
            <div className= {`eclips ${this.state.isVisible ? ' animate-flash ' : ''}`} 
                ref={this.eclips}>
            
                <p className="mcolor">
                    How do we transform this vision into reality for your brand? <span className="frthcolor"> Let us show you the way.</span>
                </p>
            </div>
        </div>
    );
}
}
export default Sec1;
