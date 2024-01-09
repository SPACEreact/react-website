import React from 'react'
import { Outlet } from 'react-router-dom';

import '../Styles/Buy.css'
import { Cars } from '../Cars';
import Button from '@mui/material/Button';
import '../index.css';


const Buy = () => {
  return (
    <div className='container mx-auto bg-black'  >
    {Cars.map((Car, index) =>{
      return <div className='my-5 p-0 bg-black bg-cover bg-center bg-no-repeat rounded shadow' key={index}><img src={Car.images} alt='yo'/>
         <p className=" home11 text-center text-xl  font-semibold text-gray-600 " >{Car.name}</p>
         <p className=" home12  text-gray-600 text-center  " >Rs{Car.price}Lakhs</p>
         
         <div className='home10'>
         <Button className='button'  >BUY</Button>
         </div>
         
         </div>
            
    })}

    <Outlet/>
    </div>
  )
}

export default Buy;