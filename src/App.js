import React from 'react';
import './index.css';
import Navbar from './Component/Navbar/Navbar';
import Background from './Component/Background/Background';
import Home from './Component/Home/Home';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  let heroData = [
    {
      text1: "Dive into", text2: "what you love"
    },
    {
      text1: "Indulge", text2: "your passions"
    },
    {
      text1: "Give in to", text2: "your passions"
    },
  ]

  const [playStatus, setPlayStatus] = useState(false);
  const [heroCount, setHerocount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setHerocount((count) => {
        return count === 2 ? 0 : count + 1;
      })
    }, 3000);
  }, [])

  return (
    <>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <div className='container'>
        <Home
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHerocount}
          playStatus={playStatus}
        />
      </div>
    </>
  );
}

export default App;

