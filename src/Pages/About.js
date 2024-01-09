import React from 'react'
import {  Outlet } from 'react-router-dom';
import '../Styles/About.css'



const About = () => {
   
  return (
    <div className='home13'>
    <div className="">
  <div className=" font-semibold bg-white ">About Us</div>
  <div className=" bg-white  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta pretium augue vitae congue. Duis a laoreet felis. Duis ac bibendum erat, nec condimentum orci. Nullam interdum elit in mauris egestas interdum. Maecenas feugiat velit vitae magna ultricies suscipit. Aliquam tincidunt massa vitae orci ullamcorper consequat. Ut semper mi ut nunc blandit, quis mattis eros interdum. Sed nec nibh risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit augue at urna rhoncus ultrices. Etiam porta volutpat interdum.

Quisque facilisis, massa non accumsan condimentum, ligula justo vestibulum ipsum, at interdum mauris mi vitae orci. Morbi nec est eget eros iaculis molestie eu nec nunc. Nullam porta id mi ac tincidunt. Phasellus molestie justo sed egestas lobortis. Quisque mattis aliquam diam vitae ullamcorper. Mauris sit amet est ornare, placerat diam non, bibendum elit. Proin fringilla mollis odio et finibus. Pellentesque velit mi, eleifend at tristique a, mollis non nisi. In dictum nulla purus, ac maximus ex commodo id. In et leo vitae risus euismod aliquet.

Integer auctor elementum mauris, nec bibendum himenaeos. Sed quis condimentum sapien. Sed lacus eros, gravida id ante a, suscipit lobortis quam. Sed vestibulum tristique nibh ac luctus. Etiam ut eros nec orci posuere euismod ac sit amet ipsum. Nulla varius malesuada risus. Phasellus felis orci, euismod id cursus at, dapibus vitae neque.</div>
  <div className="py-8 bg-white  "></div>
</div>
   
    
    <Outlet/>
    </div>
  )
}

export default About;