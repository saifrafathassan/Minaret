import React from 'react';
import { Component } from 'react';
import Header from '../../Components/Header/Header';
import './spage.css';
import Categories from './categories';

import { withTranslation } from 'react-i18next';
import axios from 'axios'; // Import Axios
import { Api } from '../../../Consts';

class ServicesPage extends Component {
    state = {
        services_: null,  // Set initial state as null
        loading: true,    // Add loading state
        error: null       // Add error state
    }

    componentDidMount() {
        axios.get(Api + 'service')
            .then(response => {
                this.setState({
                    services_: response.data,
                    loading: false
                });
            })
            .catch(error => {
                this.setState({
                    error: error.message,
                    loading: false
                });
            });
    }

    render() {
        const { services_, loading, error } = this.state;
        const { t, i18n } = this.props;  // Destructure i18n to access the language

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        const services_info = services_;

        return (
            <section className='Services-Page'>
                <Header Cap={t('Explore Our Services')} />
                <div className='services-hole-Contianer padc bg1'>
                    {
                        services_info.map((service, index) => (
                            <div className='service-section' key={index}>
                                <div className='title'>
                                    {i18n.language === 'ar' ? service.name_ar : service.name} {/* Conditional rendering */}
                                </div>
                                <div className='sup-title'>
                                    <Categories Service_Cat={service.sub_categories} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        );
    }
}

export default withTranslation()(ServicesPage);