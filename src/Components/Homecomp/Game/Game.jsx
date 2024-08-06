import React from "react";
import { Component } from "react";
import image from '/Assets/images/Game/game.jpg'
class Game extends Component {
    state = {  } 
    render() { 
        return (
            <section>
                <img src={image} />
            </section>

        );
    }
}
 
export default Game;