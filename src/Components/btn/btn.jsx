import React from "react";
import { Component } from "react";
import arow from '/Assets/Gifs/0.gif';
import { Link } from "react-router-dom";
import './btn.css'
class Btn extends Component {
    state = {  } 
    render() { 
        return (
             <div className="the-button cursor-pointer">
                 

                    <div className="caption">
                    <Link onClick={() => window.scrollTo(0, 0)} to={this.props.link}>
                    <span> { this.props.Caption}</span>
                   
                    </Link>
                    </div>
                    <div className="arow" >
                            <img src={arow} alt="" />
                    </div>
                </div>
        );
    }
}
 
export default Btn;
 <div className="the-button">
                    <div className="caption">
                    <span> Read More </span>
                    </div>
                    <div className="arow" >
                            <img src={arow} alt="" />
                    </div>


                </div>