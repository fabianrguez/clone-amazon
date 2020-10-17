import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';

function Subtotal({ itemsTotal, subtotal }) {
  const history = useHistory();

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
      <button
        onClick={() => history.push('/checkout/payment')}
        disabled={itemsTotal === 0}
      >
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
