import React,{useEffect, useState} from 'react'
import {getYears} from './utils/utils'

function CalendarYearDropDown({yearNow}) {
    const years = getYears(yearNow);
    
    const [year, setYear] = useState(yearNow);
    
    const handleInput = (event) => {
        setYear(event.target.value)
    }
    
    const scrollFunc = (event) => {
        event.preventDefault();
        
        if(!event.target.value){
            event.target.value = yearNow
        }

        var val = parseInt(event.target.value) ;

        if(val >= years[years.length - 1] && val <= years[0]){
            if(event.deltaY < 0){val += 1;}
            else{val-=1}        
        } 
        event.target.value = val;
        
    }
    
    useEffect(() => {
        const yearField = document.querySelector('#yearField');
        yearField.addEventListener("wheel",scrollFunc)
    })
    
    return (
        <div>
        <input type="text" value={year} id="yearField" onChange={event => handleInput(event)} />
        </div>
        )
    }
    
    export default CalendarYearDropDown
    