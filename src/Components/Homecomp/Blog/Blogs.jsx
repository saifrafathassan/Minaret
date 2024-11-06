import React from "react";
import { Component } from "react";
import './Blog.css'
import Btn from "./../../btn/btn";
import arow from '/Assets/Gifs/0.gif';
import data from '../../../utils/data/data.json';
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';
import api from "../../../../APi";

class Blogs extends Component {
    state = {
        blogs: [],
        loading: true,
        error: null,
    };

    componentDidMount() {
        this.fetchBlogs();
    }

    fetchBlogs = async () => {
        try {
            const response = await api.get('/blogs');
            this.setState({ blogs: response.data, loading: false });
        } catch (error) {
            this.setState({ error: error.message, loading: false });
        }
    };

    render() {
        const { blogs, loading, error } = this.state;
        const { t, i18n } = this.props;
        const currentLanguage = i18n.language.split('-')[0];
        const blogsToShow = blogs.slice(0, 3);

        if (loading) return <p>{t('Loading...')}</p>;
        if (error) return <p>{t('Error fetching blogs')}: {error}</p>;

        if (!Array.isArray(blogs)) return <p>{t('No blogs available')}</p>;

        return (
            <section className="padc bolg-container m:py-[40px] lg:py-[100px]">
                <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="title text-[50px]">
                    {t("Latest From")} <span>{t("The Blog")}</span>
                </div>
                <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="desc sm:w-100 lg:width-50 pt-[20px] pb-[30px]">
                    {t("Stay")}
                </div>
                <div className="blog-card-container">
                    {blogsToShow.map((blog, index) => (
                        <div key={index} className="blog sm:mb-[10px] lg:mb-0">
                            <img className="bg-img" src={blog.blog_image} alt={`Blog ${index + 1}`} />
                            <div  dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="bolg-title">{currentLanguage === 'ar' ? blog.head_ar : blog.head}</div>
                            <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="blog-content">{currentLanguage === 'ar' ? blog.blog_desc_ar : blog.blog_desc}</div>
                            <div className='read-more'>
                                {t("Read More")}
                                <img className="pl-[10px]" src={arow} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
                <Btn Caption={t("Read More")} link={'/Blog'} />
            </section>
        );
    }
}

export default withTranslation()(Blogs);