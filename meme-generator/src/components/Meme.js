import React, {useState} from 'react'
import memesData from '../memesData'
export default function Meme() {
  // const [memeImage, setMemeImage] = useState('https://i.imgflip.com/emccr.jpg');
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: 'https://i.imgflip.com/emccr.jpg',
  })
  const [allMemeImages, setAllMemeImages] = useState(memesData);
  function getRandomMeme() {
    const memesArray = allMemeImages.data.memes
    const randomMeme = Math.floor(Math.random() * memesArray.length)
    const { url } = memesArray[randomMeme]
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  return (
    <div>
      <div className="flex w-full pl-[36px] pr-[37px]  pt-[40px] justify-between pb-[25px]">
        <input
          type="text"
          className="border border-[#D5D4D8] rounded-[5px] w-[230px] h-[35px] text-[#0D0D0D] p-[10px]"
          placeholder="write a meme!"
        />
        <input
          type="text"
          className="border border-[#D5D4D8] rounded-[5px] w-[230px] h-[35px] p-[10px]"
          placeholder="write a meme!"
        />
      </div>
      <button
        type="button"
        className="border w-[477px] ml-[36px] mb-[37px] h-[40px] rounded-[5px] bg-gradient-to-r from-[#711F8D] to-[#A818DA] "
        onClick={getRandomMeme}
      >
        Get a new meme image 🖼
      </button>
      <img src={meme.randomImage} alt="" className='w-[477px] h-[268px] ml-[36px] pb-[55px]'/>
    </div>
  )
}






























// practice js

// import React, { useState } from "react";
// function App() {
//   const [thingsArray, setThingsArray] = useState(["things 1", "things 2"])
//   const element = thingsArray.map(thing => <p key={thing}>{thing}</p>)
//   const add = () =>{
//     setThingsArray(prevState => [...prevState,  `things ${prevState.length + 1}`])
//   }
//   return (
//     <div>
//       <button onClick={add}>Add Item</button>
//       <p>{element}</p>
//     </div>
//   );
// }

// export default App;