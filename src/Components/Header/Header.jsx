import React from "react";
import { Component } from "react";
import './Header.css';
class Header extends Component {
    state = {  } 
    render() { 
        return (
            <section className="Header-container padc">
                <div className="Caption" >
                    <p>{this.props.Cap} </p>
                </div>

            </section>
        );
    }
}
 
export default Header;