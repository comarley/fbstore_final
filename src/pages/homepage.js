import React from 'react'
import ProductList from '../features/product-listing'
import data from '../data/products.json'
import handleClick from '../features/product-listing/click'

export default function Homepage(props) {
    return <div>
        <h2>Homepage</h2>
        <ProductList products={data.products}
        onClick={handleClick}/>
    </div>
}