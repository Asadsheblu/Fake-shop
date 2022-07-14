import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products,setProducts]=useState([])
useEffect(()=>{
        const url="https://fakestoreapi.com/products"
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))
},[])
    return (
        <div className='container'>
              <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                products.map(product=><Product key={product?.id} product={product}></Product>)
            }
            </div>
        </div>
    );
};

export default Products;