import React from "react";
import { Component } from "react";
import Header from "../../Components/Header/Header";
import Blogs from "./Blogs";
import { withTranslation } from 'react-i18next';
import './blogs.css'

class BlogsPage extends Component {
    state = {  } 
    render() { 
        const { t } = this.props;
        return (
            <section className=" ">
                
                <Header Cap={t('Read Our Latest Blogs')}/>
                <Blogs/>
            </section>

        );
    }
}

export default withTranslation()(BlogsPage);