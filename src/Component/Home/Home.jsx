import React from 'react';
import './Home.css';
import arrow_btn from '../Assets/arrow_btn.png';
import play_icon from '../Assets/play_icon.png';
import pause_icon from '../Assets/pause_icon.png';
import {Link} from 'react-scroll';

const Home = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
    return (
        <>
            <div className="home">
                <div className="home-text">
                    <p>{heroData.text1}</p>
                    <p>{heroData.text2}</p>
                </div>
                <div className="home-explore">
                <Link to='explore' smooth={true}offset={-210}>Explore the feature</Link>
                    <img src={arrow_btn} alt="" />
                </div>
                <div className="home-dot-play">
                    <ul className='home-dots'>
                        <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? 'home-dot orange' : 'home-dot'}></li>
                        <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? 'home-dot orange' : 'home-dot'}></li>
                        <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? 'home-dot orange' : 'home-dot'}></li>
                    </ul>
                    <div className="home-play">
                        <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pause_icon : play_icon} alt="" />
                        <p>See video</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;