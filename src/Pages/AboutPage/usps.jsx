import React from "react";
import { Component } from "react";
import Slider from 'react-slick';
import pin from '/Assets/Gifs/pin.gif'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Usps extends Component {
    state = { usps:[{'title':'Bespoke Digital Strategy Design :' ,'desc':" We don’t believe in one-size-fits-all solutions. Each strategy is meticulously crafted to match your brand’s unique needs and goals, ensuring personalized attention and a tailored approach to success."},
        {'title':'Innovative Creativity Meets Data-Driven Decisions :' ,'desc':"Our creative endeavors are backed by solid data analysis and market insights. This blend of innovation and analytical precision means your brand benefits from strategies that are not only creative but effective."},
        {'title':'Cutting-Edge Digital Marketing Techniques:' ,'desc':"  Stay at the forefront of digital marketing with our commitment to the latest techniques and technologies. From AI-powered analytics to emerging social media platforms, we ensure your brand leverages the cutting edge to stay ahead."}
    ]  } 
   
    render() { 


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
        return (
            <section className="padc usps bg2">
                <div className="title">
                USPs
                </div>
                <div className="slideru ">
                <Slider {...settings}>
                        {this.state.usps.map((usp, index) => (
                            <div key={index} className="singel-usp-containr ">
                               <div className=" usp-title"> 
                               <span className="mcolor"> {usp.title}</span>
                               </div>
                               <div className="usp-desc">
                                    {usp.desc}
                               </div>
                               <img src={pin} alt="" />

                            </div>
                        ))}
                    </Slider>

                </div>

            </section>

        );
    }
}
 
export default Usps;