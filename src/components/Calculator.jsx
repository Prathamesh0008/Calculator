import React from 'react'

const Calculator = () => {
  const [display, setDisplay] = React.useState('');
   
  const appendToDisplay=(value)=> {
    setDisplay ((prev)=>{
    if (prev ==="" && operators.includes(value) && value !== '-') {
      return prev;
    }

      if (operators.includes(value)&& operators.includes(prev.slice(-1) )){
        return prev;    
        
      }
      return prev + value;
    });
  }
  const clearDisplay= ()=> {
    setDisplay('');
  }
  const deleteLast= ()=>{
    setDisplay(prev=> prev.slice(0,-1))
  }
  const totalValue = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay(prev => prev); 
    }
  };
  const operators = ['+', '-', '*', '/', '%'];
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gradient-to-r from-gray-800 to-gray-500'>
      <div className='w-85 h-auto gap-10 text-white bg-black rounded-2xl p-4 m-4 text-center text-2xl shadow-2xl font-semibold'>
        Calculator Component
        <input id='display' value={display} placeholder='' readOnly className='bg-amber-50 text-black text-2xl font-bold p-7 w-full rounded-3xl border-0 h-10 my-2' />
      <div className="grid grid-cols-4 gap-2">
  
  {['+','8','7','9','-','4','5','6','*','1','2','3','/','0','.'].map((v) => (
    <button
      key={v}
       className={`h-15 rounded-2xl border-0 cursor-pointer ${
                operators.includes(v) 
                  ? 'bg-orange-500 text-white hover:bg-orange-400 active:bg-orange-600'  
                  : 'bg-gray-700 text-white hover:bg-gray-800 active:bg-gray-900'   
              }`}
      onClick={() => appendToDisplay(v)}
    >
      {v}
    </button>
  ))}

 
  <button
    className="h-15 rounded-2xl border-0 cursor-pointer bg-amber-200  hover:bg-amber-300 active:bg-amber-400"
    onClick={totalValue}
  >
    =
  </button>

  
  <button
    className="h-15 rounded-2xl border-0 cursor-pointer bg-amber-200 hover:bg-amber-300 active:bg-amber-400"
    onClick={clearDisplay}
  >
    C
  </button>
  <button
    className="h-15 rounded-2xl border-0 cursor-pointer bg-amber-200 col-span-3 hover:bg-amber-300 active:bg-amber-400"
    onClick={deleteLast}
  >
    {"<----"}
  </button>
</div>

      </div>
    </div>
  )
}

export default Calculator
