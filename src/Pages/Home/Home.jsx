import React from "react";
import { Component } from "react";
import About from './../../Components/Homecomp/About/About';
import Hero from './../../Components/Homecomp/Hero/Hero';
import Service from './../../Components/Homecomp/Services/Service';
// import Parteners from './../../Components/Homecomp/Partenrs/Parteners';
import Portfolio from './../../Components/Homecomp/Portofolio/Pofrtfolio';
import ClientRev from './../../Components/Homecomp/ClientsReview/ClientRev';
import Blogs from './../../Components/Homecomp/Blog/Blogs';
import Game from './../../Components/Homecomp/Game/Game'
import Contact from "../../Components/Homecomp/Contact/Contactus";
import Calculator from "../../Components/Homecomp/Calculator/Calculator";

import './home.css';
import Partenrs2 from "../../Components/Homecomp/Partenrs/Partenrs2";

class Home extends Component {
    state = {}
    render() {
        return (
            <div className="Home">
                <Hero />
                <About />
                <Service />
                <Calculator/>
                <Partenrs2 />
                <Portfolio />
                <ClientRev />
                <Blogs />
                <Game/>
                <Contact/>
            </div>
        );
    }
}

export default Home;