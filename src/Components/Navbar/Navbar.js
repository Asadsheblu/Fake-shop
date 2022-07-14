import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/" href="#">Fakeshop</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" to="/" aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/product" href="#">Product</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about" href="#">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact" href="#">Contact</Link>
        </li>
       
       
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;