import React from 'react';
import Navbar from '../components/Navbar';
import Body from '../components/Body';
import Footer from '../components/Footer';
import AboutMe from '../components/AboutMe';
import '../components/index.css';

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