import React from 'react'

const Calculator = () => {
  const display = document.getElementById('display');
  function appendToDisplay(value) {
    display.value += value;
  }
  function clearDisplay(value) {
    display.value = '';
  }
  function totalValue() {
    display.value = eval(display.value);  
  }
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500'>
      <div className='w-85 h-auto gap-10 bg-slate-300 rounded-2xl p-4 m-4 text-center text-2xl shadow-2xl font-semibold'>
        Calculator Component
        <input id='display' value={Number} placeholder='' readOnly className='bg-amber-50 text-black text-2xl font-bold p-7 w-full rounded-3xl border-0 h-10 my-2' />
        <div id='keys' className='grid grid-cols-4 gap-2 font-normal '> 
          <button className='w-15 h-15 rounded-2xl border-0 cursor-pointer bg-amber-200'
           onClick={() => appendToDisplay('+')}>+</button>
          <button className='w-15 h-15 rounded-2xl border-0 cursor-pointer bg-amber-200'
           onClick={() => appendToDisplay('8')}>8</button>
          <button className='w-15 h-15 rounded-2xl border-0 cursor-pointer bg-amber-200'
           onClick={() => appendToDisplay('7')}>7</button>
          <button className='w-15 h-15 rounded-2xl border-0 cursor-pointer bg-amber-200'
           onClick={() => appendToDisplay('9')}>9</button>
          <button className='w-15 h-15 rounded-2xl border-0 cursor-pointer bg-amber-200'
           onClick={() => appendToDisplay('-')}>-</button>
          <button className='w-15 h-15 rounded-2xl border-0 cursor-pointer bg-amber-200'
           onClick={() => appendToDisplay('4')}>4</button>
          <button className='w-15 h-15 rounded-2xl border-0 cursor-pointer bg-amber-200'
           onClick={() => appendToDisplay('5')}>5</button>
          <button className='w-15 h-15 rounded-2xl border-0 cursor-pointer bg-amber-200'
           onClick={() => appendToDisplay('6')}>6</button>
          <button className='w-15 h-15 rounded-2xl border-0 cursor-pointer bg-amber-200'
           onClick={() => appendToDisplay('*')}>*</button>
          <button className='w-15 h-15 rounded-2xl border-0 cursor-pointer bg-amber-200'
           onClick={() => appendToDisplay('1')}>1</button>
          <button className='w-15 h-15 rounded-2xl border-0 cursor-pointer bg-amber-200'
           onClick={() => appendToDisplay('2')}>2</button>
          <button className='w-15 h-15 rounded-2xl border-0 cursor-pointer bg-amber-200'
           onClick={() => appendToDisplay('3')}>3</button>
          <button className='w-15 h-15 rounded-2xl border-0 cursor-pointer bg-amber-200'
           onClick={() => appendToDisplay('/')}>/</button>
          <button className='w-15 h-15 rounded-2xl border-0 cursor-pointer bg-amber-200'
           onClick={() => appendToDisplay('0')}>0</button>
          <button className='w-15 h-15 rounded-2xl border-0 cursor-pointer bg-amber-200'
           onClick={() => appendToDisplay('.')}>.</button>
          <button className='w-15 h-15 rounded-2xl border-0 cursor-pointer bg-amber-200'
           onClick={() => totalValue('=')}>=</button>
          <button  className='w-15 h-15 rounded-2xl border-0 cursor-pointer bg-amber-200'
           onClick={clearDisplay}>C</button>

        </div>
      </div>
    </div>
  )
}

export default Calculator
