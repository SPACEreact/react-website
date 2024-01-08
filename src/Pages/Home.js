import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import tesla2 from '../Assets/tesla2.avif'
import '../Styles/Home.css';
 

const Home = () => {
  return (
    <div className='homw2' style={{ backgroundImage: `url(${tesla2})`,
    display: 'flex', flexDirection: 'column', height: '100vh'}}>

    <div className='home' ></div>
    <Link to="/Menu"  style={{ marginTop: 'auto', padding: '10px', textDecoration: 'none' }} >
        <button >Order Now</button>
    </Link>

    <Outlet/>
   
    </div>
  )
}

export default Home