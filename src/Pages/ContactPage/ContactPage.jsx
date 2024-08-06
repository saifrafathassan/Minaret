import React from "react";
import { Component } from "react";
import Header from "../../Components/Header/Header";
import Sec1 from "./Sec1";
import Sec2 from "./Sec2";
import './contact.css';
import Sec3 from "./Sec3";
import Sec4 from "./Sec4";
class ContactPage extends Component {
    state = {  } 
    render() { 
        return (
            <section className="cont-page">
                <Header Cap= 'Conatct Us'/>
                <Sec1/>
                <Sec2/>
                <Sec3/>
                <Sec4/>
            </section>
        );
    }
}
 
export default ContactPage;