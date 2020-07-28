import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
        .then(response => {
            alert('Payment successful')
        })
        .catch(error => {
            console.log("Payment error: ", JSON.parse(error))
            alert(
                'Please make use of the provided credit card !'
            )
        })
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='PANDA clothing ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton