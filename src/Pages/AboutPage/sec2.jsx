import React from "react";
import { Component } from "react";
import image from '/Assets/images/AboutPage/pana.png'
import './about.css';
class Sec2 extends Component {  constructor(props) {
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
        { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (this.rightRef.current) {
        observer.observe(this.rightRef.current);
    }
    
}
    render() { 
        return (
            <section className="sec2 padc bg2" >
                    <div className= {`left-about  pt-20 ${this.state.isVisible ? 'animate-apear' : ''}`} 
                ref={this.rightRef} >
                        <div className="title">
                        Our <p className="mcolor">Story</p> 
                        </div>
                        <div className="desc">
                            <p>
                            At Minaret Marketing Agency, we carefully chose our name and logo to encapsulate our mission and vision. The name "Minaret" was selected for its connotations of height and the ability to amplify voices, symbolizing our dedication to elevating brands and broadcasting their messages to reach broader audiences. This is complemented by our logo, which incorporates the iconic image of a lighthouse. This emblem represents our commitment to acting as a guiding light for brands, illuminating the way through the complex digital landscape with clarity and precision.
                            </p>
                        </div>

                    </div>
                    <div className={`right  pt-20 ${this.state.isVisible ? 'animate-apear-2' : ''}`} 
                ref={this.rightRef} >
                        <div className="imagepana">
                        <img src={image} alt="" />
                        </div>
                        
                    </div>
            </section>
        );
    }
}
 
export default Sec2;
