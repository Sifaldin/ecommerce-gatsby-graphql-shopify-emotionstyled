import React  from 'react';
import { Cart } from '../Cart';
import { Search } from '../Search';
import { HeaderWrapper } from './style';
import {Link} from 'gatsby';
import {Logo} from '../Logo';


export function Header() {
  return( 
  <HeaderWrapper>
    <div>
      <Link to="/">
        <Logo />
      </Link>
    </div>
    <Search />
    <Cart />
  </HeaderWrapper>
  )
}