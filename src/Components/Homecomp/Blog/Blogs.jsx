import React from "react";
import { Component } from "react";
import './Blog.css'
import Btn from "./../../btn/btn";
import arow from '/Assets/Gifs/0.gif';
import data from '../../../utils/data/data.json';
import { Link } from "react-router-dom";

class Blogs extends Component {
    state = {  } 
    render() { 
        const bolgs=data['bolgs']

        return (
            <section className="padc bolg-container py-[100px]" >
                <div className="title text-[50px]" >
                   Latest From <span>The Blog</span>
                </div>

                <div className="desc width-50 pt-[20px] pb-[30px]">
                Stay updated with the latest insights in digital marketing.
                 Our blog is a treasure trove of knowledge and tips for your brand's journey.
                </div>

                <div className="blog-card-container">
                        {bolgs.map((blog, index) => (
                            <div key={index} className="blog">
                                <img className="bg-img" src={blog.image} alt={`Blog ${index + 1}`}  />
                                <div className="bolg-title "> {blog.title} </div>
                                <div className="blog-content py-[15px]" >{blog.content}</div>
                                <div className='read-more'>
                                     Read More
                                    <img className="pl-[10px]" src={arow} alt="" />
                                </div>
                            </div>
                        ))}
                    
                </div>
                  
                   <Btn Caption={"Read More"} link={'/Blog'}/>
                  

                      
            </section>

        );
    }
}
 
export default Blogs;