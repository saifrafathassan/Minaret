import './Calculator.css';
import { create, all } from 'mathjs';
import { useState } from 'react';

const math = create(all);

const Calculator = () => {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        setInput(input + value);
    };

    const handleClear = () => {
        setInput("");
    };

    const handleCalculate = () => {
        try {
            const result = math.evaluate(input);
            setInput(result.toString());
        } catch (error) {
            setInput("Error");
        }
    };

    return (
        <div className='calculator-container'> 
            <div className='calculator-text'>
                Calculate your services
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
                    <button className='bg-red-500' onClick={handleClear}>C</button>
                    <button className='bg-slate-500' onClick={() => handleClick("0")}>0</button>
                    <button className='bg-slate-800' onClick={handleCalculate}>=</button>
                    <button className='bg-slate-800' onClick={() => handleClick("/")}>/</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
