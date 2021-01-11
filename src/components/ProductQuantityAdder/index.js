import React from 'react';
import { ProductQuanitityAdderWrapper } from './style'
import { Button } from '../Button';
import { Input } from '../Input';
import CartContext from 'context/CartContext';



export function ProductQuantitiyAdder({ variantId, available }) {
  const [quantity, setQuantity] = React.useState(1);
  const { updateLineItem } = React.useContext(CartContext);

  const handleQuanitityChage = e => {
    setQuantity(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    updateLineItem({ variantId, quantity: parseInt(quantity, 10) })
  }
  return (
    <ProductQuanitityAdderWrapper>
      <strong>Quantity</strong>
      <form onSubmit={handleSubmit}>
        <Input
          disabled={!available}
          type="number"
          min="1"
          step="1"
          value={quantity}
          onChange={handleQuanitityChage} />
        <Button type="submit" disabled={!available} fullWidth>
          Add to cart
      </Button>
      </form>

    </ProductQuanitityAdderWrapper>

  )
} 