import './Calculator.css';
import { useState } from 'react';
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';
import { FaCaretSquareRight } from "react-icons/fa";

const Calculator = ({ t }) => {
  const currentLanguage = i18n.language.split('-')[0];

  // State to store the selected option from select
  const [selectedService, setSelectedService] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  // An object containing the prices for each service and option.
  const prices = {
    'Logo': { 'Basic': 100, 'Advanced': 200 },
    'Motion Graphic': { 'Short': 300, 'Long': 500 },
    'Website': { 'Landing': 600, 'E-commerce': 1200 },
    'Social media management': { 'Monthly': 150, 'Weekly': 50 },
    'Sponsored Ads Management': { 'Facebook': 400, 'Google': 350 },
  };

  // Function to update the specified service
  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
    setSelectedOption(""); // To reset the option when changing the service
  };

  // Function to update the selected option
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Function to calculate price based on choices
  const calculatePrice = () => {
    if (selectedService && selectedOption) {
      const price = prices[selectedService][selectedOption] || 0;
      setTotalPrice(price);
    }
  };

  // 
  const getOptions = () => {
    switch (selectedService) {
      case 'Logo':
        return (
          <>
            <option value="Basic">Basic Logo Design</option>
            <option value="Advanced">Advanced Logo Design</option>
          </>
        );
      case 'Motion Graphic':
        return (
          <>
            <option value="Short">Short Motion Video</option>
            <option value="Long">Long Motion Video</option>
          </>
        );
      case 'Website':
        return (
          <>
            <option value="Landing">Landing Page</option>
            <option value="E-commerce">E-commerce Website</option>
          </>
        );
      case 'Social media management':
        return (
          <>
            <option value="Monthly">Monthly Management</option>
            <option value="Weekly">Weekly Management</option>
          </>
        );
      case 'Sponsored Ads Management':
        return (
          <>
            <option value="Facebook">Facebook Ads</option>
            <option value="Google">Google Ads</option>
          </>
        );
      default:
        return <option value="">Select a service first</option>;
    }
  };

  return (
    <section className='calculator-container padc'>
      <div className='calculator-text text-[50px]'>
        {t("Calculate")} <span className='text-[#451C44]'>{t("your Services")}</span>
      </div>

      <div className="calculator">
        <select className='select' name="services" id="services" onChange={handleServiceChange}>
          <option value="">Select a Service</option>
          <option value="Logo">Logo</option>
          <option value="Motion Graphic">Motion Graphic</option>
          <option value="Website">Website</option>
          <option value="Social media management">Social media management</option>
          <option value="Sponsored Ads Management">Sponsored Ads Management</option>
        </select>

        <span className='text-[30px] font-bold'>+</span>

        <select className='select' name="options" id="options" onChange={handleOptionChange} value={selectedOption}>
          {getOptions()}
        </select>

        <span className='text-[25px] mt-3 md:mt-0 font-bold'>= {totalPrice > 0 ? `$${totalPrice}` : "Final Price"}</span>
      </div>

      <div className='calculat-btn-container'>
        <button className='calculat-btn' onClick={calculatePrice}>Calculate <FaCaretSquareRight size={20} className='rounded-full'/></button>
      </div>
    </section>
  );
};

export default withTranslation()(Calculator);
