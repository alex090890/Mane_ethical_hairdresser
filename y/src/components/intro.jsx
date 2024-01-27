import React from 'react';
import './intro.css';
import { Helmet } from 'react-helmet';

export default function Intro() {
    return (
    <div className='intro'>
        <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>
        </ Helmet>
        <h2 className='intro-header'>We have the freedom to choose, so we chose to be good</h2>
        <p className='intro-text'>At Mane Ethical Hairdressing we have exercised our power to choose, and in doing so we have created a space and a community of shared values. Being sustainable and ethical isn't always the easiest of paths, however we made a conscious effort to explore and research salon options that positively contribute to making a better world.
        <br></br>We hope you enjoy what we have created.</p>
        <button type="button" className='book-button'>book appointment now</button>
    </div>
    )
};