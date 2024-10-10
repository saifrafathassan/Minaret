import '../Calculator.css';
import { useState } from 'react';
import { FaCaretSquareRight } from "react-icons/fa";

const Motion = ({ setTotalPrice }) => {
  const [numSeconds, setNumSeconds] = useState(''); 
  const [isIdea, setIsIdea] = useState(false); 
  const [wantScript, setWantScript] = useState(false); 
  const [wantVoiceOver, setWantVoiceOver] = useState(false); 

  const basePrice = 2.5; 
  const ideaPrice = 0.5;
  const scriptPrice = 0.5;
  const voiceOverPrice = 1.5;

  const handleCalculate = () => {
    let total = 0;
    const seconds = parseInt(numSeconds) || 0; 

    total += seconds * basePrice;

    if (isIdea) total += seconds * ideaPrice;

    if (wantScript) total += seconds * scriptPrice;

    if (wantVoiceOver) total += seconds * voiceOverPrice;

    setTotalPrice(total);
  };

  return (
    <div className='calculator lg:ml-2'>
      <input
        className='select py-2 mb-4 lg:mb-0'
        placeholder='Enter number of seconds'
        type="number"
        value={numSeconds}
        onChange={(e) => setNumSeconds(e.target.value === "" ? "" : parseInt(e.target.value))}
      />

      <select className='select py-2 mb-4 lg:mb-0 px-2' onChange={(e) => setIsIdea(e.target.value === "yes")}>
        <option value="">Want idea?</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <select className='select py-2 mb-4 lg:mb-0' onChange={(e) => setWantScript(e.target.value === "yes")}>
        <option value="">Want script?</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <select className='select py-2 mb-4 lg:mb-0' onChange={(e) => setWantVoiceOver(e.target.value === "yes")}>
        <option value="">Want voice over?</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <button className='calculat-btn gap-2 mb-4 lg:mb-0' onClick={handleCalculate}>
        Calculate <FaCaretSquareRight className='rounded-full' size={20}/>
      </button>
    </div>
  );
};

export default Motion;
