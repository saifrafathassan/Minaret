import React, { useRef ,useEffect} from 'react';
import image from '/Assets/images/contact/1.png'
import './contact.css';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';


const Contact =({t})=>{

        const cont_ref=useRef(null);
        useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
    
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animate-right-left')
    
                        } else {
                            entry.target.classList.remove("animate-right-left");
                           
                        }
                    });
                },
                { threshold: 0.1 }
            );
    
            if (cont_ref.current) {
               
                observer.observe(cont_ref.current)
                
            }
            
            return () => {
                if (cont_ref.current) {
                    observer.unobserve(cont_ref.current);
                }
            };
        }, []);

        return (
            <section className=' bg1' >
                {/* ref={cont_ref} */}
                <div className='Contact-Container h-[600px]' >

                <div className='left-contact animate-expandContract padc sm:px-4 lg:px-[80px]' >
                <div className='title-contact text-[40px] uppercase  '> 
                    <p >{t('Ready')}</p>
                </div>
                <div className='width-40 tc text-[20px] py-6'>
                <p>{t('Contact')}</p>
                </div>
                <div className=' btn'>
            <Link to="/Contact us">  <span > {t('Contact us')} </span></Link>    
                </div>
                </div>


                <div className='right animate-slideIn'>
                    <img src={image} alt="" />

                </div>
                </div>
            </section>

        );
    }


export default withTranslation()(Contact);