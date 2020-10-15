import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

function Subtotal({ itemsTotal, subtotal }) {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({itemsTotal} items): <strong>{value}</strong>{' '}
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={subtotal}
        displayType="text"
        thousandSeparator
        prefix="$"
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
