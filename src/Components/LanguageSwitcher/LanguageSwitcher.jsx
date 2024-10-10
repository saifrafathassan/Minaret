import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const LanguageSwitcher = () => {
const { i18n } = useTranslation();
const [hover, setHover] = useState(false);

const currentLanguage = i18n.language.split('-')[0];

const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
};

return (
    <div 
    className='relative lg:ms-10 text-white'
    onMouseEnter={() => setHover(true)} 
    onMouseLeave={() => setHover(false)}
    >
    <button style={{ backgroundColor: 'transparent' }} className='focus:outline-none flex items-center hover:text-[#F36E37] duration-300'>
        <span>{currentLanguage === 'ar' ? 'العربية' : 'English'}</span>
    </button>

    {hover && (
        <ul className='absolute z-20 text-white'>
        {currentLanguage !== 'ar' && (
        <li className='hover:bg-transparent'>
            <button style={{ backgroundColor: 'transparent' }} className='w-full text-end py-1' onClick={() => handleLanguageChange('ar')}>العربية</button>
        </li>
        )}
        {currentLanguage !== 'en' && (
        <li className='hover:bg-transparent'>
            <button style={{ backgroundColor: 'transparent' }} className='w-full text-start py-1' onClick={() => handleLanguageChange('en')}>English</button>
        </li>
        )}
        </ul>
    )}
    </div>
);
};

export default LanguageSwitcher;