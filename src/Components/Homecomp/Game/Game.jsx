import React, { Component } from "react";
import { motion } from "framer-motion"; 
import image from '/Assets/images/Game/Property1.jpg';
import image1 from '/Assets/images/Game/Property 1=Variant2.jpg';
import image2 from '/Assets/images/Game/Property 1=Variant3.jpg';
import image3 from '/Assets/images/Game/Property 1=Variant4.jpg';
import image4 from '/Assets/images/Game/Property-1=Variant5.jpg';
import image5 from '/Assets/images/Game/Property-1=Variant6.jpg';
import image6 from '/Assets/images/Game/Property-1=Variant7.jpg';
import image7 from '/Assets/images/Game/Property-1=Variant8.jpg';
import image8 from '/Assets/images/Game/Property-1=Variant9.jpg';

class Game extends Component {
state = { 
    currentImageIndex: 0 
};

images = [
    image,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8
];


handleNextImage = () => {
    this.setState((prevState) => ({
    currentImageIndex: (prevState.currentImageIndex + 1) % this.images.length 
    }));
};

render() {
    const { currentImageIndex } = this.state;

    return (
    <section className="bg-[#451C44] md:h-[800px] w-full flex justify-center items-center">

        <motion.img 
        key={currentImageIndex} 
        src={this.images[currentImageIndex]} 
        className="w-full h-full object-fill cursor-pointer" 
        onClick={this.handleNextImage} 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ width: '100%', height: '100%' }} 
        />
    </section>
    );
}
}

export default Game;
