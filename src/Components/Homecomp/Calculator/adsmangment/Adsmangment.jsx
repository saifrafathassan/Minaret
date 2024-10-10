import '../Calculator.css';
import { useState } from 'react';
import { FaCaretSquareRight } from "react-icons/fa";

const Adsmangment = ({ setTotalPrice }) => {
  const [adBudget, setAdBudget] = useState(''); // الميزانية الإعلانية
  const [numPlatforms, setNumPlatforms] = useState(''); // عدد المنصات

  const platformPrice = 50; // سعر المنصة بداية من 2 منصة
  const budgetMultiplier = 0.25; // نسبة الزيادة على الميزانية

  const handleCalculate = () => {
    let total = 0;
    const budget = parseFloat(adBudget) || 0; // تحويل الميزانية إلى رقم
    const platforms = parseInt(numPlatforms) || 0; // تحويل عدد المنصات إلى رقم

    // حساب 25% من الميزانية الإعلانية وإضافتها إلى التكلفة الإجمالية
    total += budget + (budget * budgetMultiplier);

    // إذا كانت المنصات أكثر من منصة واحدة، نبدأ الحساب من 2 منصة
    if (platforms > 1) {
      total += (platforms - 1) * platformPrice;
    }

    // تحديث السعر الإجمالي
    setTotalPrice(total);
  };

  return (
    <div className='calculator lg:ml-2'>
      {/* إدخال الميزانية الإعلانية */}
      <input
        className='select py-2 mb-4 lg:mb-0'
        placeholder='Enter ads budget'
        type="number"
        value={adBudget}
        onChange={(e) => setAdBudget(e.target.value === "" ? "" : parseFloat(e.target.value))}
      /> 

      {/* إدخال عدد المنصات */}
      <input
        className='select py-2 mb-4 lg:mb-0'
        placeholder='Enter number of platforms'
        type="number"
        value={numPlatforms}
        onChange={(e) => setNumPlatforms(e.target.value === "" ? "" : parseInt(e.target.value))}
      />

      <button className='calculat-btn gap-2 mb-4 lg:mb-0' onClick={handleCalculate}>
        Calculate <FaCaretSquareRight className='rounded-full' size={20}/>
      </button>
    </div>
  );
};

export default Adsmangment;
