import React from 'react'
import Header from '../Componentos/Header/Header'
import './MainPage.css'
import Hero from '../Componentos/Hero/Hero'

function MainPage() {
    return (
        <div className='full-MainPage'>
            <div className='headerGeter'>
                <Header />
            </div>
            <div className='headerGeter'>
                <Hero />
            </div>
        </div>
    )
}

export default MainPage