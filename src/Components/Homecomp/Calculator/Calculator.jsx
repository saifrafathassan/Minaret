import './Calculator.css';
import { create, all } from 'mathjs';
import { useState } from 'react';
import { withTranslation } from 'react-i18next';

const math = create(all);

const Calculator = ({t}) => {


    return (
        <section className='calculator-container padc'> 
            <div className='calculator-text text-[50px]'>
                {t("Calculate")} <span className='text-[#451C44]'>{t("your Services")}</span>
            </div>

            <div className="calculator">

            </div>
        </section>
    );
}

export default withTranslation()(Calculator);
