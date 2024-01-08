import React from 'react'
import { Outlet } from 'react-router-dom';

import '../Styles/Buy.css'
import { Cars } from '../Cars';
import Button from '@mui/material/Button';


const Buy = () => {
  return (
    <div className='home6'>
    {Cars.map((Car, index) =>{
      return <div className='home8' key={index}><img src={Car.images} alt='yo'/>
         <p>{Car.name}</p>
         <p>Rs{Car.price}Lakhs</p>
         
         <Button eleva variant="contained" color="success">BUY</Button>
         
         </div>
            
    })}

    <Outlet/>
    </div>
  )
}

export default Buy;