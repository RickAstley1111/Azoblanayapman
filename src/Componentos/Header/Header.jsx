import React from 'react'
import greenShop from './../../assets/greenshop.png'
import { NavLink } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { GrLogin } from "react-icons/gr";
import './Header.css'

function Header() {
    return (
        <div className='full-header'>
            <div >
                <img className='image-logo-header' src={greenShop} alt="" />
            </div>
            <div className='NavLinks'>
                <div>
                    <NavLink className={"singleLink"}>Home</NavLink>
                </div>
                <div>
                    <NavLink className={"singleLink"}>Shop</NavLink>
                </div>
                <div>
                    <NavLink className={"singleLink"}>Plant care</NavLink>
                </div>
                <div>
                    <NavLink className={"singleLink"}>Blogs</NavLink>
                </div>
            </div>



            
            <div className='later-header'>
                <div>
                    <IoIosSearch className='searcher-logo'/>
                </div>
                <div>
                    <CiShoppingCart className='korzinka-logo'/>
                </div>
                <div>
                    <button className='login-btn'>
                        <GrLogin /> Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header