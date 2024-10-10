import '../Calculator.css';
import { useState } from 'react';
import { FaCaretSquareRight } from "react-icons/fa";

const Logo = ({ setTotalPrice }) => {
  const [numOptions, setNumOptions] = useState('');
  const [selectedOption, setSelectedOption] = useState("");

  const prices = {
    Icon: 15,
    Typography: 25,
    Mixed: 20
  };

  const handleCalculate = () => {
    const selectedOptionPrice = prices[selectedOption] || 0;
    const total = numOptions * selectedOptionPrice;
    setTotalPrice(total);
  };

  return (
    <div className='calculator'>
      <input
        className='select py-2 mb-4 lg:mb-0'
        placeholder='Enter number of options'
        type="number"
        value={numOptions}
        onChange={(e) => setNumOptions(parseInt(e.target.value) || '')}
      />
      <select
        className='select py-2 w-30'
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="">Select Option</option>
        <option value="Icon">Icon</option>
        <option value="Typography">Typography</option>
        <option value="Mixed">Mixed</option>
      </select>


        <button className='calculat-btn gap-2 mb-4 lg:mb-0' onClick={handleCalculate}>
          Calculate <FaCaretSquareRight className='rounded-full' size={20}/>
        </button>

    </div>
  );
};

export default Logo;
