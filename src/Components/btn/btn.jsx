import React from "react";
import { Component } from "react";
import arow from '/Assets/Gifs/0.gif';
import { Link } from "react-router-dom";
import './btn.css'
import { withTranslation } from 'react-i18next';

class Btn extends Component {
    state = {  } 
    render() { 
        const { t } = this.props;
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
 
export default withTranslation()(Btn);
 <div className="the-button">
                    <div className="caption">
                    <span> Read More </span>
                    </div>
                    <div className="arow" >
                            <img src={arow} alt="" />
                    </div>


                </div>