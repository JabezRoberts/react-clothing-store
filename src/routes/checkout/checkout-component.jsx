import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item-component';

import { CartContext } from '../../contexts/cart-context';


import { 
    CheckoutContaier,
    CheckoutHeader,
    HeaderBlock,
    Total
 } from './checkout-styles';


const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <CheckoutContaier>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                
                
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                
                
                <div className='header-block'>
                    <span>Price</span>
                </div>
                
                
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
                
            </CheckoutHeader>

            {
                cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }
            <Total>Total: ${cartTotal}</Total>
        </CheckoutContaier>
    );
};

export default Checkout;