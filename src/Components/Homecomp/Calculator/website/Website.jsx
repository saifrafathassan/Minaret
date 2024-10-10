import '../Calculator.css';
import { useState } from 'react';
import { FaCaretSquareRight } from "react-icons/fa";

const Website = ({ setTotalPrice }) => {
  const [numPages, setNumPages] = useState('');
  const [numLanguages, setNumLanguages] = useState('');
  const [isEcommerce, setIsEcommerce] = useState(false); 
  const [wantDomain, setWantDomain] = useState(false); 
  const [wantContent, setWantContent] = useState(false); 

  const pagePrice = 34;
  const languagePrice = 50;
  const additionalPrice = 100; 

  const handleCalculate = () => {
    let total = 0;

    total += numPages * pagePrice;

    total += numLanguages * languagePrice;

    if (isEcommerce) total += additionalPrice;

    if (wantDomain) total += additionalPrice;

    if (wantContent) total += additionalPrice;

    setTotalPrice(total);
  };

  return (
    <div className='calculator lg:ml-7 lg:mt-5'>
      <select className='select py-2 mb-4 lg:mb-0 px-2' onChange={(e) => setIsEcommerce(e.target.value === "yes")}>
        <option value="">Is it an E-commerce?</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <input
        className='select py-2 mb-4 lg:mb-0'
        placeholder='Enter number of pages'
        type="number"
        value={numPages}
        onChange={(e) => setNumPages(parseInt(e.target.value) || 0)}
      />

      <input
        className='select py-2 mb-4 lg:mb-0 w-56'
        placeholder='Enter number of languages'
        type="number"
        value={numLanguages}
        onChange={(e) => setNumLanguages(parseInt(e.target.value) || 0)}
      />

      <select className='select py-2 mb-4 lg:mb-0' onChange={(e) => setWantDomain(e.target.value === "yes")}>
        <option value="">Want domain?</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <select className='select py-2 mb-4 lg:mb-0' onChange={(e) => setWantContent(e.target.value === "yes")}>
        <option value="">Want website content?</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <button className='calculat-btn gap-2 mb-4 lg:mb-0' onClick={handleCalculate}>
        Calculate <FaCaretSquareRight className='rounded-full' size={20}/>
      </button>
    </div>
  );
};

export default Website;
