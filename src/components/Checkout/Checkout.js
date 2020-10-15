import React from 'react';
import { getBasketItemsTotal, getBasketTotal } from '../../context/selectors';
import { useStateValue } from '../../context/StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
import Subtotal from './Subtotal/Subtotal';

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="banner"
        />
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
          <div className="checkout__products">
            {basket?.map((item) => (
              <CheckoutProduct key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal
          itemsTotal={getBasketItemsTotal(basket)}
          subtotal={getBasketTotal(basket)}
        />
      </div>
    </div>
  );
}

export default Checkout;
