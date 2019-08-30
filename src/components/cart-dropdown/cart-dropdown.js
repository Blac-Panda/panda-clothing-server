import React from 'react'
import './cart-dropdown.scss'
import CartItem from '../cart-item/cart-item'
import {connect} from 'react-redux'

import CustomButton from '../custom-button/custom-button'

const CartDropDown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/> )
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})
export default connect(mapStateToProps)(CartDropDown); 