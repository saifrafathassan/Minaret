import React from "react";
import { Component } from "react";
import Header from "../../Components/Header/Header";
import './Career.css'
import Culutre from "./Culture";
import Why from "./whyWork";
import Hiring from "./hiring";
class CareerPage extends Component {
    state = {  } 
    render() { 
        return (
            <section>
                    <Header Cap='Join Our Journey of innovation and success '/>
                    <Culutre/>
                    <Why/>
                    <Hiring/>
            </section>
        );
    }
}
 
export default CareerPage;
