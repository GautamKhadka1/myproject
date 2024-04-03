import React from 'react';
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import CalculatorForm from '../components/CalculatorForm';


import '../components/index.css';
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