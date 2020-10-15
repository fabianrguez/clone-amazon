import { Search, ShoppingBasket } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import './Header.css';

function Header() {
  const [{ basketItemsTotal }] = useStateValue();

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
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option header__returnOption">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option header__primeOption">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__optionLineTwo header__basketCount">
              {basketItemsTotal}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
