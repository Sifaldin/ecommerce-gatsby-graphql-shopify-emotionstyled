import React from 'react';
import { QuantityAdjusterWrapper, AdjustButton } from './styles'

export function QuantityAdjuster({ item, onAdjust }) {
  const { quantity } = item;

  console.log(quantity);

  const handleDecrementQuantity = () => {
    debugger
    onAdjust({ variantId: item.variant.id, quantity: -1 })
  }


  const handleIncrementQuantity = () => {
    debugger
    onAdjust({ variantId: item.variant.id, quantity: +1 })

  }
  return (
    <QuantityAdjusterWrapper>
      <AdjustButton onClick={handleDecrementQuantity}>-</AdjustButton>
      <div> {quantity}</div>
      <AdjustButton onClick={handleIncrementQuantity}>+</AdjustButton>
    </QuantityAdjusterWrapper>
  )


}