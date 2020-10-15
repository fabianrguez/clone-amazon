import { Star } from '@material-ui/icons';
import React from 'react';
import actionType from '../../context/actionType';
import { useStateValue } from '../../context/StateProvider';
import './Product.css';

function Product({ title, image, price, rating, id }) {
  const [, dispatch] = useStateValue();

  const addToBasket = () =>
    dispatch({
      type: actionType.ADD_TO_BASKET,
      item: {
        id,
        title,
        price,
        image,
        rating,
      },
    });
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>
                <Star />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
