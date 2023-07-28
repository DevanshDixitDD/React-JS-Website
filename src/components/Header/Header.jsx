import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerwidth h-container">
                <img src="./logo.png" alt="logo" width={100} />

                <div className="flexCenter h-menu">
                    <a href="">Products</a>
                    <a href="">Our values</a>
                    <a href="">Contact Us</a>
                    <a href="">Get Started</a>
                    <button className='button'>
                        <a href="">Contact</a>
                    </button>

                </div>
            </div>
        </section>
    )
}

export default Header