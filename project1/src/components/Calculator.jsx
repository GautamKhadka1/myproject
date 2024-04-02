import React from 'react';
import Navbar from './/Navbar';

import Footer from './Footer';
import CalculatorForm from './CalculatorForm';


import './index.css';
function Calculator(){
    return(
      <div>
      <Navbar/>
      <div id="formContainer">
        <CalculatorForm/>
      </div>
      
      
      <Footer/>
  </div>
    );
}
export default Calculator;