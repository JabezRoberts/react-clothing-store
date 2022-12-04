import { Fragment, useContext } from "react";

import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { UserContext } from '../../contexts/user-context';
import { CartContext } from '../../contexts/cart-context';
import { signOutUser } from '../../utils/firebase/firebase-utils';

import CartIcon from '../../components/cart-icon/cart-icon-component';
import CartDropdown from "../../components/cart-dropdown/cart-dropdown-component";

import './navigation-styles.scss';
import { NavigationContainer, NavLinks, NavLink, LogoContainter } from './navigation-styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
          <LogoContainter to='/'>
              <CrwnLogo className='logo'  />
          </LogoContainter>

        <NavLinks>
          <NavLink to='/shop'>
              SHOP
          </NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={signOutUser} > SIGN OUT </NavLink>
            ) : (
            <NavLink to='/auth'>
              SIGN IN
            </NavLink>
            )
          }
        <CartIcon  />
        </NavLinks>
        {isCartOpen && <CartDropdown  />} {/* cart dropdown is a component hence always true as components are functions and always true, isCartOpen is a boolean that changes so when total statement is true return the last thing in the statement which is CartDropdown - known as the short circuit operator */}
      </NavigationContainer>
      <Outlet  />
    </Fragment>
  );
};


export default Navigation;