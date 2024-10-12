import '../Calculator.css';
import { useState } from 'react';
import { FaCaretSquareRight } from "react-icons/fa";

const Adsmangment = ({ setTotalPrice }) => {
  const [adBudget, setAdBudget] = useState(''); 
  const [numPlatforms, setNumPlatforms] = useState(''); 

  const platformPrice = 50; 
  const budgetMultiplier = 0.25; 

  const handleCalculate = () => {
    let total = 0;
    const budget = parseFloat(adBudget) || 0; 
    const platforms = parseInt(numPlatforms) || 0; 

    total += budget * budgetMultiplier;

    if (platforms > 1) {
      total += (platforms - 1) * platformPrice;
    }

    setTotalPrice(total);
  };

  return (
    <div className='calculator lg:ml-2'>
      <input
        className='select py-2 mb-4 lg:mb-0'
        placeholder='Enter ads budget'
        type="number"
        value={adBudget}
        onChange={(e) => setAdBudget(e.target.value === "" ? "" : parseFloat(e.target.value))}/>
      
      <input
        className='select py-2 mb-4 lg:mb-0'
        placeholder='Enter number of platforms'
        type="number"
        value={numPlatforms}
        onChange={(e) => setNumPlatforms(e.target.value === "" ? "" : parseInt(e.target.value))}/>

      <button className='calculat-btn gap-2 mb-4 lg:mb-0' onClick={handleCalculate}>
        Calculate <FaCaretSquareRight className='rounded-full' size={20}/>
      </button>
    </div>
  );
};

export default Adsmangment;
