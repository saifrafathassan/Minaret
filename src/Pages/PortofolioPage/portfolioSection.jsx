import React  from 'react';
import { Component } from 'react';
import img1 from '/Assets/images/Portfolio/12.png';
import img2 from '/Assets/images/Portfolio/22.png';
import img3 from '/Assets/images/Portfolio/32.png';
import img4 from '/Assets/images/Portfolio/4.png';
import img5 from '/Assets/images/Portfolio/5.png';
import img6 from '/Assets/images/Portfolio/6.png';

class PortSection extends Component {
    state = {  } 
    render() { 
        const portfolio=[img1,img4,img5,img3,img2,img6]
        return (
            <section className='padc bg1' >
                <div className='port-grid'>
                    {
                        portfolio.map((img,index)=>(
                            <div key={index} className='image-portfolio'>
                                    <img src={img} alt="" />
                            </div>
                        ))
                    }
                </div>

            </section>

        );
    }
}
 
export default PortSection;