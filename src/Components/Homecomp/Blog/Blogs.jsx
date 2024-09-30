import React from "react";
import { Component } from "react";
import './Blog.css'
import Btn from "./../../btn/btn";
import arow from '/Assets/Gifs/0.gif';
import data from '../../../utils/data/data.json';
import { withTranslation } from 'react-i18next';

class Blogs extends Component {
    state = {  } 
    render() { 
        const bolgs=data['bolgs']
        const { t } = this.props;
        return (
            <section className="padc bolg-container m:py-[40px] lg:py-[100px]" >
                <div className="title text-[50px]" >
                   {t("Latest From")} <span>{t("The Blog")}</span>
                </div>

                <div className="desc sm:w-100 lg:width-50 pt-[20px] pb-[30px]">
                {t("Stay")}
                </div>

                <div className="blog-card-container">
                        {bolgs.map((blog, index) => (
                            <div key={index} className="blog sm:mb-[10px] lg:mb-0" >
                                <img className="bg-img" src={blog.image} alt={`Blog ${index + 1}`}  />
                                <div className="bolg-title "> {blog.title} </div>
                                <div className="blog-content" >{blog.content}</div>
                                <div className='read-more '>
                                    <div className='th'> <p>{t("Read More")}</p></div>
                                    <div className='mh'> <img src={arow} alt="" /></div>
                                <div className="blog-content py-[15px]" >{blog.content}</div>
                                    <div className='read-more'>
                                        {t("Read More")}
                                    <img className="pl-[10px]" src={arow} alt="" />
                                    </div>
                            </div>
                            </div>
                        ))}
                        </div>
                    
               
                  
                   <Btn Caption={"Read More"} link={'/Blog'}/>
                  

                      
            </section>

        );
    }
}
 
export default withTranslation()(Blogs);