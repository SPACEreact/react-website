import React from 'react'
import '../Styles/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkdinIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className='footer'  >
    
    <div className='home3'> 

  
     <a href='https://www.instagram.com/teslamotors/?hl=en' style={{ textDecoration: 'none'}} > <InstagramIcon className='home5'  style={{fill: "#bf512b"}}/>  </a>
     <a href='https://www.facebook.com/TeslaMotorsCorp/'  style={{ textDecoration: 'none'}}> <FacebookIcon className='home5' style={{fill: "#5b65a3"}} /> </a>
     <a href='https://twitter.com/Tesla?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'  style={{ textDecoration: 'none'}}> <TwitterIcon className='home5' style={{fill: "#86d5ff"}} /> </a>
     <a href='https://www.linkedin.com/company/tesla-motors/'  style={{ textDecoration: 'none'}} > <LinkdinIcon className='home5' style={{fill: "#43759d"}} /> </a>
     
     <p style={{ color: 'GrayText', padding: '10px', marginTop: '0px'}}> &copy; 2024 Tesla </p>
    
    </div>
    </div>
  )
}

export default Footer