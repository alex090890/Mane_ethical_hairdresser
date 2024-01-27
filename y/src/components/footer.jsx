import React from 'react';
import './footer.css';
import FooterBootomImmage from '/workspaces/Mane_ethical_hairdresser/y/public/images/13023.jpg';
import FooterLeftImage from '/workspaces/Mane_ethical_hairdresser/y/public/images/Stacked Mane Logo - FULL COLOUR.webp';
import FacebookLogo from '/workspaces/Mane_ethical_hairdresser/y/public/images/facebooklogo.webp';
import InstagramLogo from '/workspaces/Mane_ethical_hairdresser/y/public/images/instagram-logo.webp';
import { Helmet } from 'react-helmet';


export default function Footer() {
      return (
        <footer className="footer">
            <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>
        </ Helmet>
            <div className="footer-line1">
                <div className="line1-left">
                    <img src={FooterLeftImage} alt="Our logo" />
                </div>
                <div className="line1-middle">
                    <p>Opening Hours (by appointment only):</p>
                    <table>
                        <tr>
                            <td>Mon</td>
                            <td>9am - 3pm</td>
                        </tr>
                        <tr>
                            <td>Tues</td>
                            <td>9am - 3pm</td>
                        </tr>
                        <tr>
                            <td>Wed</td>
                            <td>9am - 3pm</td>
                        </tr>
                        <tr>
                            <td>Thurs</td>
                            <td>9am - 7pm</td>
                        </tr>
                        <tr>
                            <td>Fri</td>
                            <td>9am - 7pm</td>
                        </tr>
                        <tr>
                            <td>Sat</td>
                            <td>9am - 3pm</td>
                        </tr>
                        <tr>
                            <td>Sun</td>
                            <td>closed</td>
                        </tr>
                    </table>
                </div>
                <div className="line1-right">
                    <div>
                        <a href="https://sustainablesalons.org/"  className='phoneNumber'> <p>(07) 5659 1905</p></a>
                        <p className='footerAdress'>6 / 5-7 Tallebudgera Creek Road, <br /> Burleigh, Queensland</p>
                    </div>
                    <div className="social">
                        <img src={FacebookLogo} alt="Facebook" />
                        <img src={InstagramLogo} alt="Instagram" />
                    </div>
                </div>
            </div>
            <div className="footer-line2">
                <a href="https://sustainablesalons.org/" className='sponsor-link'>
                    <img src={FooterBootomImmage} alt="Sponsor logo" className='line2-image' />
                    <p className='line2-text'>SUSTAINABLE SALONS</p>
                </a>
            </div>
        </footer>
      )
};