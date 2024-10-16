import React, { Component } from "react";
import { motion } from "framer-motion"; 
import image from '/Assets/images/Game/1.png';
import image1 from '/Assets/images/Game/2.png';
import image2 from '/Assets/images/Game/3.png';
import image3 from '/Assets/images/Game/4.png';
import image4 from '/Assets/images/Game/5.png';
import image5 from '/Assets/images/Game/6.png';
import image6 from '/Assets/images/Game/7.png';
import image7 from '/Assets/images/Game/8.png';
import image8 from '/Assets/images/Game/9.png';

import { FaHeart } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { IoMdStar } from "react-icons/io";

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
    const isSmallScreen = window.innerWidth < 640; 
  
    const areas = isSmallScreen
      ? [
        null,
        null,
        { xMin: rect.width * 0.5, xMax: rect.width * 0.6 + 50, yMin: rect.height * 0.6, yMax: rect.height * 0.7 + 50 }, // small screen
        { xMin: rect.width * 0.4, xMax: rect.width * 0.5 + 50, yMin: rect.height * 0.6, yMax: rect.height * 0.8 + 50 }, 
        { xMin: rect.width * 0.5, xMax: rect.width * 0.6 + 50, yMin: rect.height * 0.7, yMax: rect.height * 0.8 + 50 }, 
        { xMin: rect.width * 0.4, xMax: rect.width * 0.5 + 50, yMin: rect.height * 0.7, yMax: rect.height * 0.8 + 50 }, 
        { xMin: rect.width * 0.4, xMax: rect.width * 0.6 + 50, yMin: rect.height * 0.7, yMax: rect.height * 0/8 + 50 }, 
        { xMin: rect.width * 0.2, xMax: rect.width * 0.3 + 50, yMin: rect.height * 0.7, yMax: rect.height * 0.8 + 50 },
        null,
      ]
      : [
          null,
          null,
          { xMin: rect.width * 0.6, xMax: rect.width * 0.7 + 50, yMin: rect.height * 0.6, yMax: rect.height * 0.7 + 50 }, // large screen
          { xMin: rect.width * 0.4, xMax: rect.width * 0.5 + 50, yMin: rect.height * 0.6, yMax: rect.height * 0.7 + 50 }, 
          { xMin: rect.width * 0.6, xMax: rect.width * 0.7 + 50, yMin: rect.height * 0.6, yMax: rect.height * 0.8 + 50 }, 
          { xMin: rect.width * 0.5, xMax: rect.width * 0.5 + 50, yMin: rect.height * 0.8, yMax: rect.height * 0.9 + 50 }, 
          { xMin: rect.width * 0.4, xMax: rect.width * 0.6 + 50, yMin: rect.height * 1, yMax: rect.height * 1.1 + 50 }, 
          { xMin: rect.width * 0.3, xMax: rect.width * 0.5 + 50, yMin: rect.height * 0.8, yMax: rect.height * 0.9 + 50 }, 
          null,
        ];
  
    return areas[imageIndex];
  };
  

  render() {
    const { currentImageIndex, score, chances, showInstructions, gameOver, showCongratulations, wins } = this.state;
    const currentArea = this.getCorrectArea(currentImageIndex, { width: window.innerWidth, height: window.innerHeight });

    return (
<section className="bg-[#451C44] pt-20 md:h-[850px] w-full flex flex-col justify-center items-center relative">
  <h1 className="pt-20 pb-10 text-[35px] font-bold text-center text-[#F36E37]"><span className="text-[#FBC6AC]">Welcome</span> to our game</h1>

  <div className="text-white text-2xl mb-0 flex items-center justify-center gap-2">
    Your Score: {score} <IoMdStar className="text-yellow-300 mb-1" />
  </div>

  <div className="flex sm:flex-row flex-col justify-center sm:justify-between items-center text-white text-xl mb-20 lg:gap-10">
    <div className="flex items-center gap-2">
      Chances: {chances} <FaHeart className="text-red-500" />
    </div>
    <div className="flex items-center gap-2">
      Wins: {wins} <GiTrophyCup className="text-orange-400" size={25} />
    </div>
  </div>



        {gameOver ? (
          <div className="text-white text-4xl font-bold h-screen">Game Over</div>
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
            {currentImageIndex === 1 && (
            <div className="absolute bottom-1 text-white text-sm sm:text-lg bg-black bg-opacity-50 p-1 sm:p-2 rounded-lg">
                remember these places because you will need them.
            </div>
          )}
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
          <div className="absolute text-[10px] text-center bottom-0 lg:bottom-1 text-white lg:text-lg bg-black bg-opacity-50 lg:p-2 rounded-lg">
            Welcome to the game! Click the image to proceed. You have 3 chances to get it right!
          </div>
        )}

        {showCongratulations && (
          <div className="absolute bottom-0 sm:bottom-10 lg:top-50 text-white lg:text-3xl bg-black bg-opacity-70 p-2 lg:p-10 text-center rounded-lg flex flex-col items-center">
            <div>Congratulations! You've completed the game!</div>
            <button 
              onClick={this.resetGame} 
              className="lg:my-4 bg-green-500 text-white lg:p-3 rounded hover:bg-green-600 transition-colors duration-300 w-[200px] lg:w-full"
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
