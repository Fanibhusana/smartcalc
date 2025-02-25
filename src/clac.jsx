import { useState } from "react";

export default function Calc() {
    const [num1,setNum1]=useState("")
    const [num2,setNum2]=useState("")
    const [result,setResult]=useState("")
    const [oper,setOper]=useState("")
    const [count,setCount]=useState(1)
    function addNumber(n){
        if(count===1)  setNum1(num1 + n)
        if(count===2)setNum2(num2 + n);
    }
    function  addOperator(o){
        setOper(o)
        setCount(count+1)
    }
    function operation(){
        switch (oper) {
            case "+":setResult(parseInt(num1)+parseInt(num2)); break;
            case "-": setResult(parseInt(num1)-parseInt(num2)); break;
            case "*":setResult(parseInt(num1)*parseInt(num2)); break;
            case "/": setResult(parseInt(num1)/parseInt(num2)); break;
            case "%":setResult(parseInt(num1)%parseInt(num2)); break;
        }
        setCount(count+1)
    }
    function clear(){
        setNum1("")
        setNum2("")
        setResult("")
        setOper("")
        setCount(1)
    }
    function ce(){
        if(count===1)setNum1(num1.slice(0,-1))
        if(count===2)setNum2(num2.slice(0,-1));
    }

    return (
        <div className="calculator-wrapper">
            <h1 className="calc-title">SmartCalc</h1>
            <div className="display-container">
                <div className="display">
                    <span className="display-box">
                        {num1} {oper} {num2} {result && `= ${result}`}
                    </span>
                </div>
            </div>

            <div className="button-container">
                <button className="clear" onClick={clear}>AC</button>
                <button className="clear" onClick={ce}>CE</button>
                <button className="operator" onClick={() => addOperator("%")}>%</button>
                <button className="operator" onClick={() => addOperator("/")}>/</button>

                <button onClick={() => addNumber(7)}>7</button>
                <button onClick={() => addNumber(8)}>8</button>
                <button onClick={() => addNumber(9)}>9</button>
                <button className="operator" onClick={() => addOperator("*")}>*</button>

                <button onClick={() => addNumber(4)}>4</button>
                <button onClick={() => addNumber(5)}>5</button>
                <button onClick={() => addNumber(6)}>6</button>
                <button className="operator" onClick={() => addOperator("-")}>-</button>

                <button onClick={() => addNumber(1)}>1</button>
                <button onClick={() => addNumber(2)}>2</button>
                <button onClick={() => addNumber(3)}>3</button>
                <button className="operator" onClick={() => addOperator("+")}>+</button>

                <button className="zero-btn" onClick={() => addNumber(0)}>0</button>
                <button className="equal-btn" onClick={operation}>=</button>
            </div>
        </div>
    );
}
