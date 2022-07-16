import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className='container-fluid bg-dark'>
          

<div class="row">
    <div class="col-md-5 p-5 text-white">
       
        <h1  class="title-text text-warning">Fakeshop</h1>
        
         
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos exercitationem ratione voluptatibus possimus culpa illo quia alias inventore, animi mollitia, repellat beatae modi facere accusantium!</p>
        
    </div>
    <div class="col-md-3 p-5 text-white">
        <h4 class="headline">Contact Us</h4>
       <div class="d-flex">
        <i class="bi bi-telephone"></i>
        <p class="ps-3">(111) 222 3562</p>
        </div>
      
        <div class="d-flex">
            <i class="bi bi-envelope"></i>
            <p class="ps-3">Yourmail@gmail.com</p>
            </div>
           
        <div class="d-flex ">
            <i class="bi bi-geo-alt"></i>
            <p class="ps-3">3225 N Harbar </p>
            </div>
            
       
    </div>
    <div class="col-md-4 p-5 text-white">
        <h4 class="headline">Menu</h4>
        <ul class="text-white">
            <li><a href="#about" class="text-decoration-none text-white">About Us</a></li>
            <li><a href="#service"class="text-decoration-none text-white">Services</a> </li>
            <li><a href="#gallery" class="text-decoration-none text-white">Gallery</a> </li>
            <li><a href="#contact" class="text-decoration-none text-white">Contact</a></li>
        </ul>
    </div>
   
    
</div>


        </div>
    );
};

export default Footer;