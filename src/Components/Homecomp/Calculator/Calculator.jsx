import './Calculator.css';
import { useState } from 'react';
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';
import Website from './website/Website';
import Logo from './Logo/Logo';
import Motion from './motiongrafic/Motion';
import Ssocialmangment from './social/Ssocialmangment';
import Adsmangment from './adsmangment/Adsmangment';

const Calculator = ({ t }) => {
  const currentLanguage = i18n.language.split('-')[0];

  const [selectedService, setSelectedService] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };


  return (
    <section className='calculator-container padc lg:pb-36'>
      <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className='calculator-text text-[50px]'>
        {t("Calculate")} <span className='text-[#451C44]'>{t("your")}</span>
      </div>

      <div className="calculator md:pt-[50px]">
        <select className='py-2 select' name="services" id="services" onChange={handleServiceChange}>
          <option className='text-center' value="">Select a Service</option>
          <option value="Logo">Logo</option>
          <option value="Motion Graphic">Motion Graphic</option>
          <option value="Website">Website</option>
          <option value="Social media management">Social media management</option>
          <option value="Sponsored Ads Management">Sponsored Ads Management</option>
        </select>


        {/*Show the Logo component only when Logo is selected from the menu.*/}
        {selectedService === "Logo" && <Logo setTotalPrice={setTotalPrice} />}
        {selectedService === "Website" && <Website setTotalPrice={setTotalPrice} />}
        {selectedService === "Motion Graphic" && <Motion setTotalPrice={setTotalPrice} />}
        {selectedService === "Social media management" && <Ssocialmangment setTotalPrice={setTotalPrice} />}
        {selectedService === "Sponsored Ads Management" && <Adsmangment setTotalPrice={setTotalPrice} />}


        {/*Show result only if there is a service selected*/}
        {selectedService && (
          <div className='text-center'>
            <span className='text-4xl font-bold'>=</span>
            <span className='text-2xl mt-1 mx-1'>${totalPrice} </span>
            <span className='text-xl mt-1'>Estimated price</span>
          </div>
        )}
      </div>

    </section>
  );
};

export default withTranslation()(Calculator);
