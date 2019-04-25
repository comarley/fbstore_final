import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from "react-router-dom";

function sort(items){
    return items.sort((a,b) =>  b.name)
}

// function totalPrice(cartItems){
//
// }

function Cart(props) {

    console.log('cart',props);

    function refreshPage() {
        window.location.reload();
    }

    return <table>
        <thead>
        <tr>
            <th>Item</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Total Price</th>
            <th></th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {
           sort(props.cart).map(item => <tr>

               <td> {item.name}</td>
               <td>  <img
                   height={200}
                   title={item.name}
                   src={item.image}

               /></td>
               <td> {item.quantity}</td>
               <td> {item.description}</td>
               <td> {item.price * item.quantity}</td>
               <td>
                   <button
                   onClick={() => props.addToCart(item)}>
                       +
                   </button>
                   <button
                   onClick={() => props.removeFromCart(item)}>
                       -
                   </button>
               </td>
               <td>
                   {/*Low Stock!*/}
                   <button
                   onClick={() => props.removeAllFromCart(item)}
                   >
                       Remove all from cart
                   </button>

                   {
                       item.stock <10
                       ? <div>Low stock!!!</div>
                       : null
                   }
               </td>
           </tr>)



        }
        {/*<tr>*/}
            {/*<td></td>*/}
            {/*<td></td>*/}
            {/*<td></td>*/}
            {/*<td></td>*/}
            {/*<td>Total Price: </td>*/}
        {/*</tr>*/}
        </tbody>
        <button onClick={refreshPage}><NavLink to='/'>Checkout</NavLink></button>
    </table>

}

function mapStateToProps(state) {
    return {
        cart: state.cart,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({type: 'ADD', payload: item})
        },
        removeFromCart: (item) => {
            dispatch({type: 'REMOVE', payload: item})
        },
        removeAllFromCart: (item) => {
            dispatch({type: 'REMOVE_ALL', payload: item})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)