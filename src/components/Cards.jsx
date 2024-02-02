import React from 'react'
import Javascript from '../assets/Javascript.png'
import Ui from "../assets/Ui.png"
import Flutter from "../assets/Flutter.png"
function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-(239, 239, 239)'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
            <img className='w-60 mx-auto mt-[-3rem] ' src={Javascript} alt="" />
            <h2 className='text-2xl font-bold text-center py-8 text-[#0e1e35]'>JavaScript</h2>
            <p className='text-center text-[18px] text-[#0e1e35]'>Learn Javascript and solve problems</p>
            <p className='text-center font-bold text-2xl text-[#1f3557]'>120$</p>
            <button className='bg-[#0e1e35] w-[200px] rounded-md font-medium my-6 mx-auto  py-3 text-[#ffff]'>Start Trail</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 bg-[#e2dfdf]'>
            <img className='w-60 mx-auto mt-[-3rem] ' src={Flutter} alt="" />
            <h2 className='text-2xl font-bold text-center py-8 text-[#0e1e35]'>Mobile Apps</h2>
            <p className='text-center text-[18px] text-[#0e1e35]'>Learn How to make Apps using Fluter</p>
            <p className='text-center font-bold text-2xl text-[#1f3557]'>90$</p>
            <button className='bg-[#0e1e35] w-[200px] rounded-md font-medium my-6 mx-auto  py-3 text-[#ffff]'>Start Trail</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
            <img className='w-60 mx-auto mt-[-3rem] ' src={Ui} alt="" />
            <h2 className='text-2xl font-bold text-center py-8 text-[#0e1e35]'>Python</h2>
            <p className='text-center text-[18px] text-[#0e1e35]'>Learn python easy and quickly</p>
            <p className='text-center font-bold text-2xl text-[#1f3557]'>100$</p>
            <button className='bg-[#0e1e35] w-[200px] rounded-md font-medium my-6 mx-auto  py-3 text-[#ffff]'>Start Trail</button>
        </div>
      </div>
    </div>
  )
}

export default Cards