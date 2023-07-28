import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from "react-countup"
const Hero = () => {
    return (
        <secttion className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                
                    {/* left side */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle"/>
                        <h1> Discover <br/>
                        Most Suitable <br/> Clothing
                        </h1>
                    </div>

                    <div className="flexColStart hero-des">
                        <span>Find a variety of clothing that suite you very easily</span>
                        <span>Forget all dufficulties in finding a residence for you</span>
                    </div>

                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--red)" size={25}/>
                        <input type="text" />
                        <buton className="button">Search</buton>
                    </div>

                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                        <span>
                            <CountUp start={8800} end={9000} duration={4}/>
                            <span>+</span>
                            </span>
                            <span className="secondaryText">Premium Products</span>
                        </div>

                        <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1950} end={2000} duration={4} />
                            <span>+</span>
                            </span>
                            <span className='secondaryText'>Happy Customers</span>
                        </div>

                        <div className="flexColCenter stat">
                        <span>
                            <CountUp end={28} duration={4} />
                            <span>+</span>
                            </span>
                            <span className="secondaryText">Award Winnings</span>
                        </div>
                    </div>
                </div>
                    {/* right side */}
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="" />
                    </div>
                </div>
            </div>
        </secttion>
    )
}

export default Hero