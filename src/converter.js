import React, { useState } from "react";


export default function Converter() {



    const [selects, setSelects]=useState('');
    const [fromUnit,setUnit]=useState('');
    const [resultUnit,setResultUnit]=useState('');
    const [value, setValue]=useState('');
    const [result, setResult]=useState('');

    const onSelectChange = (event) => {
        
        setSelects(event.target.value);
        setValue('');
        setResult('');

        if(event.target.value === 'km → miles') {
            setUnit('km');
            setResultUnit('miles');
        }
        else if(event.target.value ==='miles → km') {
            setUnit('miles');
            setResultUnit('km');
        }
        else if(event.target.value ==='feet → meters') {
            setUnit('feet');
            setResultUnit('meters');
        }
        else if(event.target.value ==='meters → feet') {
            setUnit('meters');
            setResultUnit('feet');
        }
        else if(event.target.value ==='cm → inches') {
            setUnit('cm');
            setResultUnit('inches');
        }
        else if(event.target.value ==='inches → cm') {
            setUnit('inches');
            setResultUnit('cm');
        }
    }

    const onValueChange = (event) => {
        setValue(event.target.value);
        if(selects ==='km → miles') {
            setResult(Math.round((parseFloat(event.target.value)*0.621371) * 100) / 100);
        }
        else if(selects ==='miles → km') {
            setResult(Math.round((parseFloat(event.target.value)*1.60934) * 100) / 100); 
        }
        else if(selects ==='feet → meters') {
            setResult(Math.round((parseFloat(event.target.value)*0.3048) * 100) / 100);  
        }
        else if(selects ==='meters → feet') {
            setResult(Math.round((parseFloat(event.target.value)*3.28084) * 100) / 100);
        }
        else if(selects ==='cm → inches') {
            setResult(Math.round((parseFloat(event.target.value)*0.393701) * 100) / 100);  
        }
        else if(selects ==='inches → cm') {
            setResult(Math.round((parseFloat(event.target.value)*2.54) * 100) / 100);   
        }
    }

    const switchUnit = () => {

        if(selects ==='km → miles') {
            setSelects('miles → km');
            setUnit('miles');
            setValue(result);
            setResultUnit('km');
            setResult(Math.round((result*1.60934) * 100) / 100);
            
            
        }
        else if(selects ==='miles → km') {
            setSelects('km → miles');
            setUnit('km');
            setValue(result);
            setResultUnit('miles');
            setResult(Math.round((result*0.621371) * 100) / 100);
            
        }
        else if(selects ==='feet → meters') {
            setSelects('meters → feet');
            setUnit('meters');
            setValue(result);
            setResultUnit('feet');
            setResult(Math.round((result*3.28084) * 100) / 100);
        }
        else if(selects ==='meters → feet') {
            setSelects('feet → meters');
            setUnit('feet');
            setValue(result);
            setResultUnit('meters');
            setResult((Math.round((result*0.3048) * 100) / 100));
        }
        else if(selects ==='cm → inches') {
            setSelects('inches → cm');
            setUnit('inches');
            setValue(result);
            setResultUnit('cm');
            setResult(Math.round((result*2.54) * 100) / 100);
        }
        else if(selects ==='inches → cm') {
            setSelects('cm → inches');
            setUnit('cm');
            setValue(result);
            setResultUnit('inches');
            setResult((Math.round((result*0.393701) * 100) / 100));
        }
        
    }

    
    
    const saveConversion  = () => {
        const savedDiv = document.createElement('div');
        savedDiv.className = 'savedDiv';          
        document.getElementById('append')[0].appendChild(savedDiv);  
        
  }

  
     
     


    return (
        
        <div>
            <div className="componentContainer">
                <div className="converterContainer">
                    <select className="converter" value={selects} onChange={onSelectChange} >
                        <option>km → miles</option>
                        <option>miles → km</option>
                        <option>feet → meters</option>
                        <option>meters → feet</option>
                        <option>cm → inches</option>
                        <option>inches → cm</option>
                    </select> <button className="arrows" onClick={switchUnit} >⇆ </button>
                </div>   
                <div className="inputContainer">
                <input type="number" className="input" value={value} onChange={onValueChange}/>  <div className="fromUnit">{fromUnit}</div>
                </div>
            </div>
            <div className='favorite'>
            <button className="emoticon" onClick={saveConversion}>♡</button> 
            
            <div>{result}  {resultUnit}</div>
            </div>
{/* 
            <div>
                <h4>Saved</h4>
                <div id="append"></div>
            </div> */}

        </div>

        
        
    )

    
}