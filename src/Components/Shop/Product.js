import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {title,price,image,category,id}=product
    const navigate=useNavigate()
    const handelProduct=(_id)=>{
      navigate(`/product/${id}`)
    }
    return (
        <div className='col'>
       <div class="card h-75 shadow rounded">
      <img src={image}className="w-75 h-50" alt="..."/>
      <div class="card-body">
        <h6 class="card-title">Product Name:{title}</h6>
        <p>Category: {category}</p>
        <h5>Price:${price}</h5>
      </div>
      <div class="card-footer">
       <button onClick={()=>handelProduct(id)} className='btn btn-info w-100'>Details</button>
      </div>
    </div>
      </div>
    );
};

export default Product;