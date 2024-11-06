import React from 'react';
import { Component } from 'react';
// import axios from 'axios';
import arow from '/Assets/Gifs/0.gif';
import './blogs.css'
import { withTranslation } from 'react-i18next';
import api from '../../../APi';

class Blogs extends Component {
    state = { 
        blogs: [],
        loading: true,
        error: null
    };

    componentDidMount() {
        this.fetchBlogs();
    }

    // Use the custom Axios instance
    fetchBlogs = async () => {
        try {
            const response = await api.get('/blogs'); // Use the API instance
            this.setState({ blogs: response.data, loading: false });
        } catch (error) {
            this.setState({ error: error.message, loading: false });
        }
    };

    render() { 
        const { blogs, loading, error } = this.state;
        const { t, i18n } = this.props;

        const isArabic = i18n.language === 'ar';

        if (loading) return <p>{t('Loading...')}</p>;
        if (error) return <p>{t('Error fetching blogs')}: {error}</p>;

        if (!Array.isArray(blogs)) return <p>{t('No blogs available')}</p>;

        return (
            <section className='padc bg1'>
                <div className="blog-card-container-page">
                    {blogs.map((blog, index) => (
                        <div key={index} className="blog-page">
                            <img src={blog.blog_image} alt={`Blog ${index + 1}`} />
                            <div className="bolg-title-page"> 
                                {isArabic ? blog.head_ar : blog.head} 
                            </div>
                            <div className="blog-content-page"> 
                                {isArabic ? blog.blog_desc_ar : blog.blog_desc} 
                            </div>
                            <div className='read-more'>
                                <div className='t'><p>{t("Read More")}</p></div>
                                <div className='m'><img src={arow} alt="" /></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default withTranslation()(Blogs);