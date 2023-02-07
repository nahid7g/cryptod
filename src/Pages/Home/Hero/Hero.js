import React from 'react';
import "./Hero.css";
import crypto from "../../../assets/hero-img.png";

const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                {/* Left Side */}
                <div className="hero-left">
                    <p>Buy & Sell Crypto 24/7 using your retirement account</p>
                    <h1>Invest in Cryptocurrency with Your IRA</h1>
                    <p>Buy, Sell and store hundreds of Cryptocurrencies</p>
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Enter your email" />
                        <button class="btn btn-primary" type="button" id="button-addon2">Learn More</button>
                    </div>
                </div>
                {/* Right side  */}
                <div className="hero-right">
                    <div className="img-container">
                        <img src={crypto} alt="Crypto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;