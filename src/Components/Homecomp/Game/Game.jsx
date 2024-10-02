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
    currentImageIndex: 0, 
    score: 0,
    chances: 3,
    showInstructions: true,
    gameOver: false,
    showCongratulations: false,
    wins: 0,
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

  resetGame = () => {
    this.setState((prevState) => ({
      currentImageIndex: 0,
      score: 0,
      chances: 3,
      showInstructions: true,
      gameOver: false,
      showCongratulations: false,
      wins: prevState.wins + 1,
    }));
  };

  handleNextImage = () => {
    if (!this.state.gameOver && this.state.chances > 0) {
      const nextImageIndex = (this.state.currentImageIndex + 1) % this.images.length;
      if (nextImageIndex === 0) {
        this.setState({ showCongratulations: true });
      }
      this.setState((prevState) => ({
        currentImageIndex: nextImageIndex,
        score: prevState.score + 1,
        showInstructions: false,
      }));
    }
  };

  handleWrongClick = () => {
    this.setState((prevState) => {
      const newChances = prevState.chances - 1;
      if (newChances === 0) {
        this.setState({ chances: 0, gameOver: true });
        setTimeout(this.resetGame, 3000);
      } else {
        return { chances: newChances };
      }
    });
  };

  handleClick = (e) => {
    const { currentImageIndex, showInstructions } = this.state;

    if (showInstructions) {
      this.setState({ showInstructions: false });
      return;
    }

    if (currentImageIndex === 8) {
      this.handleNextImage();
      return;
    }

    if (currentImageIndex >= 2) {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const correctArea = this.getCorrectArea(currentImageIndex, rect);

      if (x >= correctArea.xMin && x <= correctArea.xMax && y >= correctArea.yMin && y <= correctArea.yMax) {
        this.handleNextImage();
      } else {
        this.handleWrongClick();
      }
    } else {
      this.handleNextImage();
    }
  };


  getCorrectArea = (imageIndex, rect) => {
    const areas = [
      null,
      null,
      { xMin: rect.width * 0.3, xMax: rect.width * 0.4 + 50, yMin: rect.height * 0.4, yMax: rect.height * 0.5 + 50 }, // image2
      { xMin: rect.width * 0.6, xMax: rect.width * 0.7 + 50, yMin: rect.height * 0.3, yMax: rect.height * 0.4 + 50 }, // image3
      { xMin: rect.width * 0.3, xMax: rect.width * 0.4 + 50, yMin: rect.height * 0.4, yMax: rect.height * 0.3 + 50 }, // image4
      { xMin: rect.width * 0.7, xMax: rect.width * 0.5 + 50, yMin: rect.height * 0.5, yMax: rect.height * 0.6 + 50 }, // image5
      { xMin: rect.width * 0.4, xMax: rect.width * 0.6 + 50, yMin: rect.height * 0.5, yMax: rect.height * 0.6 + 50 }, // image6
      { xMin: rect.width * 0.3, xMax: rect.width * 0.5 + 50, yMin: rect.height * 0.7, yMax: rect.height * 0.8 + 50 }, // image7
      null,
    ];

    return areas[imageIndex];
  };

  render() {
    const { currentImageIndex, score, chances, showInstructions, gameOver, showCongratulations, wins } = this.state;
    const currentArea = this.getCorrectArea(currentImageIndex, { width: window.innerWidth, height: window.innerHeight });

    return (
      <section className="bg-[#451C44] pt-20 md:h-[800px] w-full flex flex-col justify-center items-center relative">
        <div className="w-full py-20">
            <hr className="border-t border-gray-400" />
        </div>

                <div className="text-white text-2xl mb-32">Your Score: {score}</div>
                <div className="absolute mb-14 lg:top-32 lg:left-24 text-white text-xl">
                Chances: {chances}
                </div>
                <div className="absolute lg:top-32 lg:right-24 text-white text-xl">
                Wins: {wins}
                </div>

        {gameOver ? (
          <div className="text-white text-4xl font-bold">Game Over</div>
        ) : (
          <>
            <motion.img 
              key={currentImageIndex} 
              src={this.images[currentImageIndex]} 
              className="w-full h-full object-fill cursor-pointer" 
              onClick={this.handleClick} 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ width: '100%', height: '100%' }} 
            />
            {currentArea && currentImageIndex < 8 && (
              <div
                className="absolute opacity-50 cursor-pointer"
                style={{
                  left: `${currentArea.xMin}px`,
                  top: `${currentArea.yMin}px`,
                  width: `${currentArea.xMax - currentArea.xMin}px`,
                  height: `${currentArea.yMax - currentArea.yMin}px`,
                }}
                onClick={() => this.handleNextImage()} 
              />
            )}
          </>
        )}

        {showInstructions && (
          <div className="absolute bottom-1 text-white text-lg bg-black bg-opacity-50 p-4 rounded-lg">
            Welcome to the game! Click the image to proceed. You have 3 chances to get it right!
          </div>
        )}

        {showCongratulations && (
          <div className="absolute sm:bottom-20 lg:top-50 text-white text-3xl bg-black bg-opacity-70 p-5 lg:p-20 text-center rounded-lg flex flex-col items-center">
            <div>Congratulations! You've completed the game!</div>
            <button 
              onClick={this.resetGame} 
              className="my-4 bg-green-500 text-white lg:p-3 rounded hover:bg-green-600 transition-colors duration-300 w-[200px] lg:w-full"
            >
              Play Again
            </button>
          </div>
        )}
      </section>
    );
  }
}

export default Game;  
