import React from 'react';
import { Component } from 'react';
import Header from '../../Components/Header/Header';
import PortSection from './portfolioSection';
import './portfolio.css'
class PortofolioPage extends Component {
    state = {  } 
    render() { 
        return (
            <section className=''>
             <Header Cap= 'Portfolio'/>   
             <PortSection/>
            </section>
        );
    }
}
 
export default PortofolioPage;