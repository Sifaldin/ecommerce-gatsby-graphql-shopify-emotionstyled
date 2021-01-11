import React from 'react';
import CartContext from 'context/CartContext';
import { CartFooter, CartHeader, CartItem, Footer } from './styles'
import { QuantityAdjuster } from '../QuantityAdjuster';
import { RemoveLineItem } from '../RemoveLineItem';
import { navigate } from '@reach/router';
import { Button } from '../Button';

export function CartContents() {
  const { checkout, updateLineItem } = React.useContext(CartContext);

  const handleAdjustQuantity = ({ quantity, variantId }) => {
    debugger
    updateLineItem({ quantity, variantId });
  }

  return (
    <section>
      <h1>Your Cart</h1>

      {!!checkout?.lineItems && (
        <CartHeader>
          <div>Product</div>
          <div>Unit Price</div>
          <div>Quantity</div>
          <div>Amount</div>
        </CartHeader>
      )}

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

      {!!checkout?.lineItems && (
        <CartFooter>
          <div>
            <strong>Total:</strong>
          </div>
          <div>
            <span>SEK{checkout?.totalPrice}</span>
          </div>
        </CartFooter>
      )}
    

      {!checkout?.lineItems && (
        <h4>Your Cart is Empty.</h4>
      )}


      <Footer>
        <div>
          <Button onClick={() => navigate(-1)}>
            Continue shopping
          </Button>
        </div>



        <div>

          {!!checkout?.webUrl && <Button onClick={() => {
            window.location.href = checkout.webUrl
          }}>
            Checkout
          </Button>}

        </div>


      </Footer>
    </section>
  )



}