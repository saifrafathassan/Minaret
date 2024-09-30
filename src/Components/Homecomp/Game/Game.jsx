import React from "react";
import { Component } from "react";
import image from '/Assets/images/Game/game.jpg'
class Game extends Component {
    state = {  } 
    render() { 
        return (
        <section className="bg-[#451C44] md:h-[600px] w-full">
            <img className="max-w-full h-full object-contain" src={image} />
        </section>
        );
    }
}

export default Game;