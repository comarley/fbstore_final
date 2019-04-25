import React from 'react'
import Cart from '../features/cart'
import {NavLink} from "react-router-dom";

export default function CartPage(props) {
    return <div>
        <h2>My Cart</h2>
        <Cart/>

    </div>
}