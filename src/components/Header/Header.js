import { Search, ShoppingBasket } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import actionType from '../../context/actionType';
import { getBasketItemsTotal } from '../../context/selectors';
import { useStateValue } from '../../context/StateProvider';
import { auth } from '../../firebase';
import './Header.css';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleSignOut = () => {
    if (user) {
      dispatch({
        type: actionType.SET_USER,
        user: null,
      });
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" name="search" className="header__searchInput" />
        <Search className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user ? '/login' : ''}>
          <div className="header__option" onClick={handleSignOut}>
            <span className="header__optionLineOne">
              Hello {user?.email || 'Guest'}
            </span>
            <span className="header__optionLineTwo">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>
        <Link to={user ? '/orders' : '/login'}>
          <div className="header__option header__returnOption">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__optionLineTwo header__basketCount">
              {getBasketItemsTotal(basket)}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
