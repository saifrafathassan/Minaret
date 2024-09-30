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
            <div className="calculator">
                <input type="text" value={input} readOnly className="calculator-display" />
                <div className="calculator-buttons">
                    <button className='bg-slate-500' onClick={() => handleClick("1")}>1</button>
                    <button className='bg-slate-500' onClick={() => handleClick("2")}>2</button>
                    <button className='bg-slate-500' onClick={() => handleClick("3")}>3</button>
                    <button className='bg-slate-800' onClick={() => handleClick("+")}>+</button>
                    <button className='bg-slate-500' onClick={() => handleClick("4")}>4</button>
                    <button className='bg-slate-500' onClick={() => handleClick("5")}>5</button>
                    <button className='bg-slate-500' onClick={() => handleClick("6")}>6</button>
                    <button className='bg-slate-800' onClick={() => handleClick("-")}>-</button>
                    <button className='bg-slate-500' onClick={() => handleClick("7")}>7</button>
                    <button className='bg-slate-500' onClick={() => handleClick("8")}>8</button>
                    <button className='bg-slate-500' onClick={() => handleClick("9")}>9</button>
                    <button className='bg-slate-800' onClick={() => handleClick("*")}>x</button>
                    <button className='bg-slate-500' onClick={() => handleClick("0")}>0</button>
                    <button className='bg-slate-500' onClick={() => handleClick(".")}>.</button>
                    <button className='bg-slate-500' onClick={handleBackspace}>⌫</button>
                    <button className='bg-blue-800' onClick={handleCalculate}>=</button>
                    <button className='bg-red-500' onClick={handleClear}>AC</button>
                    <button className='bg-slate-800' onClick={() => handleClick("/")}>/</button>
                    <button className='bg-slate-800' onClick={() => handleClick("^")}>^</button> 
                    <button className='bg-slate-800' onClick={() => handleClick("%")}>%</button>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(Calculator);
