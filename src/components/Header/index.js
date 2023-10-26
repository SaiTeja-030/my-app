import {
  HeaderContainer,
  NavContainer,
  CartContainer,
  NavItemsLogo,
  UserName,
  Icon,
  NavItems,
} from "./styledComponent.js";


import { PiShoppingCart } from "react-icons/pi";

const Header = () => (
  <HeaderContainer>
    <NavContainer>
      <NavItemsLogo>Reeco</NavItemsLogo>
      <NavItems>Store</NavItems>
      <NavItems>Order</NavItems>
      <NavItems>Analytics</NavItems>
    </NavContainer>
    <CartContainer>
      <Icon>
        <PiShoppingCart />
      </Icon>

      <UserName>Hello, James</UserName>
    </CartContainer>
  </HeaderContainer>
);

export default Header;
