import React from 'react';
import { CheckboxWrapper } from './styles';
import { FaCheck } from 'react-icons/fa';


export function Checkbox({ checked }) {
  return (
    <CheckboxWrapper checked={checked}>
      <div>
        <FaCheck color="white" />
      </div>
    </CheckboxWrapper>
  )
}