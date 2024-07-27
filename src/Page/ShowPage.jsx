import React from 'react'
import Product_show from '../component/product_show/Product_show'
import Products from '../component/products/Products'

function ShowPage() {
  return (
    <>
      <Product_show />
      <div className="products">
        <br />
        <br />
        <Products />
      </div>

    </>
  )
}

export default ShowPage 