import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_Z2o2EWR05T11ecVLQrqyC4Ku00dGWPqLau';

    const onToken = token => {
        console.log(token); //this would be to the backend for charge later
        alert('Payment Successfull woo woo !'); 
    }
    return (
        <StripeCheckout 
        label='Pay Now'
        name='My Store'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;