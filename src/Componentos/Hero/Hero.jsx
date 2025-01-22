import React from 'react'
import './Hero.css'
import grenere from '../../assets/rasteniye.png'

function Hero() {
    return (
        <div className='ful-hero'>
            <div>
                <div>
                    <p className='welcomeP'>welcome to green shop</p>
                    <h1 className='Slogan-Hero'>Lets Make A Beter<span className='greener'>Planet</span></h1>
                </div>
                <p className='description-hero'>
                    We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
                </p>
            </div>
            <div className='praver'>
                <img className='rasteni' src={grenere} alt="" />
            </div>

        </div>
    )
}

export default Hero