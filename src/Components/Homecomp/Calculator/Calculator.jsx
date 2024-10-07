import './Calculator.css';
import { create, all } from 'mathjs';
import { useState } from 'react';
import { withTranslation } from 'react-i18next';

const math = create(all);

const Calculator = ({t}) => {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        setInput(input + value);
    };

    const handleClear = () => {
        setInput("");
    };

    const handleBackspace = () => {
        setInput(input.slice(0, -1));
    };

    const handleCalculate = () => {
        try {
            // حساب النسبة المئوية
            let expression = input;
            if (expression.includes("%")) {
                expression = expression.replace(/(\d+)%/g, (match, p1) => {
                    return `${p1} * 0.01`;
                });
            }
            const result = math.evaluate(expression);
            setInput(result.toString());
        } catch (error) {
            setInput("Error");
        }
    };

    return (
        <div className='calculator-container'> 
            <div className='calculator-text'>
                {t("Calculate")}
            </div>
        </div>
    );
}

export default withTranslation()(Calculator);
