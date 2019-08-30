
export const addItemToCart = (CartItems, cartItemToAdd) => {
    const existingCartItem = CartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )
    if (existingCartItem) {
        return CartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem    
        )
    }

    return [...CartItems, {...cartItemToAdd, quantity: 1}]
};