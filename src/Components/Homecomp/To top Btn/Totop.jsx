import { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import './Totop.css';

const Totop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="totop">
      {showButton && (
        <button 
          className='bg-[#fff] flex justify-center items-center rounded-full h-[43px] w-[43px] fixed right-0 bottom-0 mb-[20px] sm:mb-[40px] mr-[30px] sm:mr-[40px] z-[1000]' 
          onClick={scrollTo}
        >
          <MdKeyboardDoubleArrowUp className="text-[#451C44] icon" size={42} />
        </button>
      )}
    </div>
  );
}

export default Totop;
