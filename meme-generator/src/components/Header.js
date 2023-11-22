import React from 'react'
import Troll from '../images/Troll-face.png'
export default function Header() {
  return (
    <div className="font-[Poppins] bg-gradient-to-r from-[#672280] to-[#A626D3] h-[65px] flex justify-start items-center pl-[20px] ">
      <img src={Troll} alt="face troll" />
      <h3 className="font-[Poppins] font-[700] text-[21px] mr-auto ml-[6px]">
        Meme Generator
      </h3>
      <h4 className="text-[12px] w-[189px] font-[500]">React Course - Project 3</h4>
    </div>
  )
}
