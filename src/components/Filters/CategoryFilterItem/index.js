import React from 'react';
import { FilterItemWrapper } from './styles';
import { Checkbox } from 'components';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';


export function CategoryFilterItem({ title, id }) {
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const collectionId = qs.c;





  const onClick = () => {

    let navigateTo = '/all-products';

    navigate(`${navigateTo}?c=${encodeURIComponent(id)}`)


  }

  return (
    <FilterItemWrapper onClick={onClick}>

      <Checkbox  checked={collectionId === id} />
      <div>{title}</div>


    </FilterItemWrapper>
  )
}