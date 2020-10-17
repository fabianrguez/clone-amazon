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
          <h2 className="checkout__title">
            Your shopping basket
            {getBasketItemsTotal(basket) === 0 && ' is empty'}
          </h2>
          <div className="checkout__products">
            {getBasketItemsTotal(basket) > 0 ? (
              basket?.map((item) => <CheckoutProduct key={item.id} {...item} />)
            ) : (
              <p>
                You have no items in your basket. To buy one or more items,
                click "Add to basket" next to the item.
              </p>
            )}
          </div>
        </div>
      </div>
      {getBasketItemsTotal(basket) > 0 && (
        <div className="checkout__right">
          <Subtotal
            itemsTotal={getBasketItemsTotal(basket)}
            subtotal={getBasketTotal(basket)}
          />
        </div>
      )}
    </div>
  );
}

export default Checkout;
