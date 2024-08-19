import React from "react";
import { Component } from "react";
import Header from "../../Components/Header/Header";
import './about.css';
import Sec1 from "./sec1";
import Sec3 from "./sec3";
import Sec2 from "./sec2";
import Sec4 from "./sec4";
import Team from "./team";
import Usps from "./usps";
class AboutPage extends Component {
    state = {  } 
    render() { 
        return (
            <section className="About-page  ">
                <Header Cap='Learn About Our Agency '/>
                <Sec1/>
                <Sec2/>
                <Sec3/>
                <Sec4/>
                <Usps/>
                <Team/>
                

            </section>

        );
    }
}
 
export default AboutPage;
