import React from 'react';
import Navbar from './/Navbar';
import Body from './Body';
import Footer from './Footer';
import AboutMe from './AboutMe';
import './index.css';

function Home(){
    return(
        <div>
            <Navbar/>
            <Body/>
            
            <AboutMe/>
            <Footer/>
        </div>
    );
}
export default Home;