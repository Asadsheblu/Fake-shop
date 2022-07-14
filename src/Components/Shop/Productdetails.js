import { faCartFlatbed, faCartPlus, faRupee, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Productdetails = () => {
    const addcart=()=>{
        toast.success("Successfully Added Your Product")
    }
    const {productId}=useParams()
    const [details,setDetails]=useState({})
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])
    return (
        <div className='m-5 pt-5'>
           <div class="card  container mx-auto w-50">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={details?.image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Product Name: {details?.title}</h5>
        <p class="card-text">Product Details: {details?.description}</p>
        <h6>Product Category: {details?.category}</h6>
        <h5>Product Price: {details?.price}<FontAwesomeIcon icon={faRupee}></FontAwesomeIcon></h5>
        <h6>Rating: {details?.rating?.rate} <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon> </h6>
        <p>Total Rating: {details?.rating?.count}</p>
        <button onClick={addcart} className='pe-3 ps-3 pt-2 pb-2 btn btn-success'>Add To cart <FontAwesomeIcon icon={faCartFlatbed}></FontAwesomeIcon>   </button>
        <ToastContainer />
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Productdetails;