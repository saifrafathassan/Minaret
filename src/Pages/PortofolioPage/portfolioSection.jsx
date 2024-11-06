import React  from 'react';
import { Component } from 'react';
import api from '../../../APi';


class PortSection extends Component {
    state = { 
        portfolio: [] // Initialize state to hold portfolio items
    }; 

    componentDidMount() {
        // Fetch portfolio data from the API
        api.get('/portfolio/') // Use the global api instance to fetch data
            .then(response => {
                // Set the fetched data to the state
                this.setState({ portfolio: response.data });
            })
            .catch(error => {
                console.error("There was an error fetching the portfolio data!", error);
            });
    }

    render() { 
        return (
            <section className='padc bg1'>
                <div className='port-grid'>
                    {
                        this.state.portfolio.map((item) => (
                            <div key={item.id} className='image-portfolio'>
                                <img src={item.image} alt={item.name} /> {/* Use the image URL from API */}
                            </div>
                        ))
                    }
                </div>
            </section>
        );
    }
}
 
export default PortSection;