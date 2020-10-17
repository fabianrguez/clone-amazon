import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import {
  getBasketItemsTotal,
  getBasketTotal,
} from '../../../context/selectors';
import { useStateValue } from '../../../context/StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import axios from '../../../axios';
import './Payment.css';
import actionType from '../../../context/actionType';
import db from '../../../firebase';
import LoadingSvg from '../../LoadingSvg/LoadingSvg';

function Payment() {
  const [{ user, basket }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  useEffect(() => {
    const getClientSecret = async () => {
      const total = getBasketTotal(basket);
      if (total > 0) {
        const response = await axios({
          method: 'post',
          url: `/payments/create?total=${total * 100}`,
        });
        setClientSecret(response.data.clientSecret);
      }
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: actionType.EMPTY_BASKET,
        });
        history.replace('/orders');
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '');
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (
          <Link to="/checkout">{getBasketItemsTotal(basket)} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct key={item.id} {...item} />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType="text"
                  thousandSeparator
                  prefix="$"
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>
                    {processing ? (
                      <p>
                        <LoadingSvg />
                        Processing
                      </p>
                    ) : (
                      'Buy Now'
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
