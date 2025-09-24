import React from 'react'

const Testy = () => {
  return (
        <div className='w-full h-screen flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500'>

      <div className="grid grid-cols-4 gap-2">
        {[1,2,3,4,5,6,7,8,9,0,"hello", "bolo", "khelo"].map((v)=>(
          <button key={v} className='bg-red-500 m-2 p-2 rounded text-white'>{v}</button>
        ))}
        <button className='bg-red-500 m-2 p-2 rounded text-white col-span-3' >khelooo</button>
      </div>
    </div>
  )
}

export default Testy
