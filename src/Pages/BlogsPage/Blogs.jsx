import React from 'react';
import { Component } from 'react';
import data from '../../utils/data/data.json'
import arow from '/Assets/Gifs/0.gif';
import './blogs.css'
import { withTranslation } from 'react-i18next';

class Blogs extends Component {
    state = {  } 
    render() { 
        const bolgs=data['bolgspage']
        const { t } = this.props;
        return (
            <section className='padc bg1'>

<div className="blog-card-container-page">
                        {bolgs.map((blog, index) => (
                            <div key={index} className="blog-page">
                                <img src={blog.image} alt={`Blog ${index + 1}`}  />
                                <div className="bolg-title-page "> {blog.title} </div>
                                <div className="blog-content-page" >{blog.content}</div>
                                <div className='read-more '>
                                    <div className='t'> <p>{t("Read More")}</p></div>
                                    <div className='m'> <img src={arow} alt="" /></div>
                                    
                                </div>
                            </div>
                        ))}
                    
                </div>
            </section>
        );
    }
}

export default withTranslation()(Blogs);