import React from "react";
import { Component } from "react";
import img1 from '/Assets/images/career/1.png';
import img2 from '/Assets/images/career/2.png';
import img3 from '/Assets/images/career/3.png';
class Culutre extends Component {
    state = {  } 
    render() { 
        return (
           <div className="padc bg1 cultre-container">
                <div className="title" >
                    Our <span>Culutre</span>
                </div>

                <div className="life">
                    <div className="title">
                    Life at The Agency
                    </div>
                    <div className="contents-1 " >
                        <div className="contents-left" >
                            <span>1</span>
                            <p className="desc  ">
                                
                            Life here is about more than just work. It's about fostering a community 
                            where creativity blooms, ideas flourish, and growth is a constant. 
                            From team brainstorming sessions to professional development workshops,
                             we strive to make every day an opportunity for learning and innovation. 
                             Our open, dynamic work environment 
                            is designed to encourage collaboration and the sharing of new ideas.
                            </p>
                        </div>
                        <div className="contents-right">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </div>

            <div className="vision">

            <div className="title">
            Vision and Values
                    </div>
                    <div className="contents-1 " >
                    <div className="contents-right">
                            <img src={img2} alt="" />
                        </div>

                        <div className="contents-left" >
                            <span >2</span>
                            <p className="desc  ">
                                
                            At The Minaret Marketing Agency,
                             we're driven by a vision to set new benchmarks in the digital marketing world.
                              Our core values revolve around collaboration, innovation, and continuous learning. 
                              We believe that together, we can transform ideas into impactful 
                              strategies that drive success for our clients and our team.
                            </p>
                        </div>
                        
                    </div>

            </div>

            <div className="diversity">
            <div className="title">
            Diversity and Inclusion Statement
                    </div>
                    <div className="contents-1 " >
                        <div className="contents-left" >
                            <span>3</span>
                            <p className="desc  ">
                                
                            Diversity is our strength, and inclusion is our commitment. 
                            At The Minaret Marketing Agency, we're dedicated to building a workplace where everyone 
                            feels valued and included, regardless of their background, identity, or beliefs.
                             We celebrate the unique perspectives and experiences our team members bring to the table, 
                            as they enrich our culture and enhance the innovative solutions we provide to our clients.
                            </p>
                        </div>
                        <div className="contents-right">
                            <img src={img3} alt="" />
                        </div>
                    </div>


            </div>

           </div>

        );
    }
}
 
export default Culutre;