import '../Calculator.css';
import { useState } from 'react';
import { FaCaretSquareRight } from "react-icons/fa";

const Ssocialmangment = ({ setTotalPrice }) => {
  const [numPlatforms, setNumPlatforms] = useState(''); 
  const [numPosts, setNumPosts] = useState('');

  const platformPrice = 25; 
  const postPrice = 10; 

  const handleCalculate = () => {
    let total = 0;
    const platforms = parseInt(numPlatforms) || 0; 
    const posts = parseInt(numPosts) || 0;

    total += platforms * platformPrice;
    total += posts * postPrice;

    setTotalPrice(total);
  };

  return (
    <div className='calculator lg:ml-2'>
      <input
        className='select py-2 mb-4 lg:mb-0'
        placeholder='Enter number of platforms'
        type="number"
        value={numPlatforms}
        onChange={(e) => setNumPlatforms(e.target.value === "" ? "" : parseInt(e.target.value))}
      /> 

      <input
        className='select py-2 mb-4 lg:mb-0'
        placeholder='Enter number of posts'
        type="number"
        value={numPosts}
        onChange={(e) => setNumPosts(e.target.value === "" ? "" : parseInt(e.target.value))}
      />

      <button className='calculat-btn gap-2 mb-4 lg:mb-0' onClick={handleCalculate}>
        Calculate <FaCaretSquareRight className='rounded-full' size={20}/>
      </button>
    </div>
  );
};

export default Ssocialmangment;
