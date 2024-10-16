import { motion, useAnimation } from 'framer-motion';
import Bgimg from '../../../../public/Assets/images/waterbg.png';
import Waterimg from '../../../../public/Assets/images/water.jpg';
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';

const Partenrs2 = ({t}) => {
  const currentLanguage = i18n.language.split('-')[0];
  const controls = useAnimation(); 
  const contentVariants = {
    hidden: { opacity: 0, y: -150 }, 
    visible: { opacity: 1, y: 0 },  
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: -100, rotate: 0 },
    visible: { opacity: 1, y: 0, rotate: 360 },   
  }


  const handleMouseEnter = () => {
    controls.start("visible"); 
  };

  const handleMouseLeave = () => {
    controls.start("hidden"); 
  };

  return (
    <section 
      dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
      className='relative w-full h-[100vh] overflow-hidden' // Always full height
      style={{ 
        backgroundImage: `url(${Bgimg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}> 
      
      <motion.div 
        className='absolute inset-0 flex flex-col justify-center items-center'
        initial="hidden" 
        animate={controls} 
        transition={{ duration: 0.6 }} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
      >
        {/* Div for positioning the text and button */}
        <motion.div 
          variants={contentVariants} 
          initial="hidden" 
          animate={controls} 
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center items-center" 
          style={{ 
            backgroundImage: `url(${Waterimg})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
          }}
        >

          <motion.div 
            variants={contentVariants} 
            initial="hidden" 
            animate={controls} 
            transition={{ duration: 0.5 }}
            className="absolute top-10 md:start-24 p-4 text-4xl text-center"
            
          >
            <h3>{t("OUR CLIENTS")}</h3> 
          </motion.div>

          {/* Button with glowing border effect and transparent background */}
          <motion.button 
            variants={buttonVariants} 
            initial="hidden" 
            animate={controls} 
            transition={{ duration: 0.5 }}
            className="absolute bottom-16 z-10 text-3xl text-white border-4 border-[#451C44] py-4 px-20 transition duration-300 ease-in-out hover:bg-orange-500 hover:bg-opacity-50"
          >
            {t("See More")}
            <style jsx>{`
              button {
                box-shadow: 0 0 10px rgba(69, 28, 68, 0.6), 0 0 20px rgba(69, 28, 68, 0.5), 0 0 30px rgba(69, 28, 68, 0.4);
              }
            `}</style>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default withTranslation()(Partenrs2);
