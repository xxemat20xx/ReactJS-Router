import React from 'react'
import { Link, useParams } from 'react-router'
const SingleProduct = () => {
    console.log(useParams());
    const {productId} = useParams();
  return (
    <div>
        <h2>Product {productId}</h2>
        <Link to="/products" className='btn'>Back to products</Link>
    </div>
  )
}

export default SingleProduct