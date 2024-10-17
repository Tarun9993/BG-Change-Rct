import React, { useState } from 'react'

function App() {
    const [color, setColor] = useState("olive")
    // const handleRed = () =>{
    //     setColor("red")
    // }
    // const handleBlue = () =>{
    //     setColor("blue")
    // }
    // const handleGreen = () =>{
    //     setColor("green")
    // }
    const change = (color) => {
        setColor(color)
    }
    return (
        <div className='w-full h-screen p-3 ' style={{ backgroundColor: color }}>
         <div className='flex gap-3 justify-center bg-slate-300 mx-auto min-w-fit max-w-[95%] sm:max-w-[300px] rounded-2xl p-1'>



                <button className='bg-red-600 p-2 rounded-lg text-white hover:bg-red-500 transition-all' onClick={() => change('red')}>Red</button>
                <button className='bg-blue-600 p-2 rounded-lg text-white hover:bg-blue-500 transition-all' onClick={() => change("#1C97FC")}>Blue</button>
                <button className='bg-green-600 p-2 rounded-lg text-white hover:bg-green-500 transition-all' onClick={() => change("#BDEA69")}>Green</button>

            </div>
        </div>
    )
}

export default App
