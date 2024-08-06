import React from 'react';
import { Component } from 'react';
import arow from '/Assets/Gifs/0.gif'

class Sec3 extends Component {
    state = {  } 
    render() { 
        const media=[{'title':'Our Doors Are Open','content':{"Address": "Apt 30, (C) Tower, University Towers, Taha Hussein St, El-Minya, Egypt Feel the pulse of digital creativity firsthand. Visit us!"},'icon':"/Assets/Gifs/cont1.gif"},
              {'title':'Direct Lines to Our Team','content':{'phone':'0198877655543','email':' Theminaretagency.com'},'icon':"/Assets/Gifs/cont2.gif"},
              {'title':'Join Our Community','content':{'Facebook':' The Minaret Agency','Instgram':' The Minaret Agency','Sanpchat':' The Minaret Agency'},'icon':"/Assets/Gifs/cont3.gif"}
        ]

        return (
            <section className='Sec3 bg1 padc'>
                <div className='title'>
                Contact Us <span> Directly</span>
                </div>
                <div className='cards'>
                {
                        media.map((card, index) => (
                            <div key={index} className="card">
                                <div className="card-header">
                                    {card.title}
                                </div>
                                <div className="card-content p-3">
                                    {
                                        Object.entries(card.content).map(([key, value], i) => (
                                            <p key={i}> <strong className='secolor'>{key}:</strong> {value} </p>
                                        ))
                                    }
                                </div>

                                <div className="card-bottom">
                             <div className="btm1st">
                                 <img src={arow} alt="->" />
                             </div>
                             <p>Read More</p>
                             <div className="btm3d">
                                 <img src={card.icon} alt="" />
                             </div>
                         </div>
                            </div>
                             

                            
                        ))
                    }

                </div>


            </section>
        );
    }
}
 
export default Sec3
