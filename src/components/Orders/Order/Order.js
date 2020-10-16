import moment from 'moment';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from '../../Checkout/CheckoutProduct/CheckoutProduct';
import './Order.css';

function Order({ created, id, basket, amount }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(created).format('Do MMMM YYYY, HH:mm')}</p>
      <p className="order__id">
        <small>{id}</small>
      </p>
      {basket?.map((item) => (
        <CheckoutProduct key={item.id} {...item} hideButton />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order total: {value}</h3>
        )}
        decimalScale={2}
        value={amount / 100}
        displayType="text"
        thousandSeparator
        prefix="$"
      />
    </div>
  );
}

export default Order;
