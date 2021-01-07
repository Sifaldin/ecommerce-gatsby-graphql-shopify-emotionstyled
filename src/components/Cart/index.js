import React from 'react';
import { CartWrapper } from './styles';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from 'context/CartContext';


export function Cart() {
  const { checkout } = React.useContext(CartContext);
  

 let totalQunitity = 0;
 if (checkout){
   checkout.lineItems.forEach(li => {
     totalQunitity = totalQunitity + li.quantity;
   })
 }

  return (
    <CartWrapper>
      <FaShoppingCart size="1.5em" />
      <div>
        {totalQunitity} item(s) / SEK{checkout?.totalPrice || '0.00'}
      </div>
    </CartWrapper>
  )
}