import { useState } from 'react';
import './index.css'; // or your file that contains @import "tailwindcss";
import Calculator from './components/Calculator';


function App() {
  const [color, setColor] = useState('');

  return (
    // <div className="w-full h-screen" style={{ backgroundColor: color }}>
    //   <calc/>
    //  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bottom-12">
    //   <div className="bg-white p-4 rounded shadow-2xl">
    //     <button className='bg-red-500 text-white p-2 rounded outline-none' onClick={() => setColor('red')}>Red</button>
    //     <button className='bg-green-500 text-white p-2 rounded ml-2' onClick={() => setColor('green')}>Green</button>
    //     <button className='bg-blue-500 text-white p-2 rounded ml-2' onClick={() => setColor('blue')}>Blue</button>
    //     <button className='bg-yellow-500 text-white p-2 rounded ml-2' onClick={() => setColor('yellow')}>Yellow</button>
    //     <button className='bg-purple-500 text-white p-2 rounded ml-2' onClick={() => setColor('lavender')}>lavender</button>
    //     <button className='bg-purple-800 text-white p-2 rounded ml-2' onClick={()=> setColor('purple')}>purple</button>
    //     <button className='bg-black text-white p-2 rounded ml-2' onClick={()=>setColor('black')}>Black</button>
    //   </div>
    //    </div>
    // </div>
    <>
    <Calculator/>
    </>
  );
}

export default App;
