import { Star } from '@material-ui/icons';
import React from 'react';
import actionType from '../../../context/actionType';
import { useStateValue } from '../../../context/StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({
  id,
  image,
  title,
  price,
  rating,
  quantity,
  hideButton,
}) {
  const [, dispatch] = useStateValue();

  const removeFromBasket = () =>
    dispatch({
      type: actionType.REMOVE_FROM_BASKET,
      id: id,
    });

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={title} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkout__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>
                <Star />
              </p>
            ))}
        </div>
        <p className="checkoutProduct__quantity">
          <small>Quantity: </small>
          <strong>{quantity}</strong>
        </p>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
