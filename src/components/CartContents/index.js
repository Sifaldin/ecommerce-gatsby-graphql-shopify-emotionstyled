import React from 'react';
import CartContext from 'context/CartContext';
import { CartFooter, CartHeader, CartItem } from './styles'
import { QuantityAdjuster } from '../QuantityAdjuster';
import { RemoveLineItem } from '../RemoveLineItem';

export function CartContents() {
  const { checkout, updateLineItem } = React.useContext(CartContext);

  const handleAdjustQuantity = ({ quantity, variantId }) => {
    debugger
    updateLineItem({ quantity, variantId });
  }

  return (
    <section>
      <h1>Your Cart</h1>
      <CartHeader>
        <div>Product</div>
        <div>Unit Price</div>
        <div>Quantity</div>
        <div>Amount</div>
      </CartHeader>
      {checkout?.lineItems?.map(item => {
        return (
          <CartItem key={item.variant.id}>
            <div>
              <div>
                {item.title}
              </div>
              <div>
                {item.variant.title === 'Default title' ? '' : item.variant.title}
              </div>
            </div>

            <div>
              SEK{item.variant.price}
            </div>
            <div>
              <QuantityAdjuster item={item} onAdjust={handleAdjustQuantity} />
            </div>

            <div>
              SEK{(item.quantity * item.variant.price).toFixed(2)}
            </div>
            <div>
              <RemoveLineItem lineItemId={item.id} />
            </div>
          </CartItem>
        )
      })}

      <CartFooter>
        <div>
          <strong>Total:</strong>
        </div>
        <div>
          <span>SEK{checkout?.totalPrice}</span>
        </div>

      </CartFooter>
    </section>
  )



}