import React from 'react';
import './App.css';
import Converter from './converter';
import Nav from './Nav';
import Footer from './Footer';

function App() {



  
  return (
    
    <div>
      <Nav/>
      <div className='container'>
        <div className="mainContainer">
          <div className='compact' >
            <h1>convert</h1>
            <Converter />
          </div>
        </div>
              <div className='savedUnits'>
                  <h4>saved</h4>
                  <div id="append"></div>
              </div>
      </div>
      <Footer/>
    </div>



  );
}

export default App;
