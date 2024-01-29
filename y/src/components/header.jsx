import React from 'react';
import './header.css';
import logo from '../assets/logo.png';

export default function TopBox() {
    return (
        <>
         <div className='Navbar'>
            <img src={logo} alt="Logo" className='logo'/>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SERVICES</li>
                <li>PRODUCTS</li>
                <li>CONTACT</li>
            </ul>
            <div className='booking'>
            <button class="bookingbtn">book now</button>

            </div>
         
         </div>
   
        </>
        
    );
};