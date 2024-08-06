import React from "react";
import { Component } from "react";
import Header from "../../Components/Header/Header";
import Blogs from "./Blogs";
import './blogs.css'
class BlogsPage extends Component {
    state = {  } 
    render() { 
        return (
            <section className=" ">
                
                <Header Cap='Read Our Latest Blogs'/>
                <Blogs/>
            </section>

        );
    }
}
 
export default BlogsPage;