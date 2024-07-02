

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
const Home = () => {

         const [principle,setPrinciple]=useState(0)
         const [interest,setInterest]=useState(0)
         const [year,setYear]=useState(0)
         const [emi,setEmi]=useState(0);
    const handleInput=(e)=>{
        console.log(e.target.id,e.target.value)
        let id=e.target.id;
        if(id==='principal')
            {
                setPrinciple(e.target.value)
            }
            else if(id==='interest')
                {
                    setInterest(e.target.value)
                }
                else
                {
                    setYear(e.target.value)
                }
    }
    //P(r(1+r)^n/((1+r)^n)-1))
    const calculateEMI=()=>{
        let r=interest;
        if(principle&&r&&year)
            {
                r=r/12/100;
                let calcupow=Math.pow(1+r,year*12);
                let amout=principle*(r*calcupow/(calcupow-1));
                setEmi(amout);
            }
    }
    useEffect(()=>{
         calculateEMI();
    },[principle,interest,year])
  return (
    <>
    <div className='popup'>
        <div className='form'>
           <h1>Mortgate Calculator</h1>
           <div className='popup-element'>
            <label>Principle:</label>
            <input type='number' id='principal' onChange={handleInput}/>
           </div>
           <div className='popup-element'>
            <label>Interest:</label>
            <input type='number' id='interest' onChange={handleInput}/>
           </div>
           <div className='popup-element'>
            <label>yers:</label>
            <input type='number' id='years' onChange={handleInput}/>
           </div>
           <div className='popup-element'>
            <label>Your EMI is: {Math.round(emi)}</label>
            
           </div>
        </div>
    </div>
    </>
  )
}

export default Home;