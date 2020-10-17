import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { auth } from './firebase';
import { useStateValue } from './context/StateProvider';
import actionType from './context/actionType';
import Payment from './components/Checkout/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/Orders/Orders';

const promise = loadStripe(
  'pk_test_51HctNGEjzuzuK8BYcIDhUU4aSdjKSivVUow2cUTdXNjh7gPNPtzwfbdlKotk8NEadJAHUN7gUjiCkum8GXL0pe9z0073HpH7mK'
);

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(
      (user) => user && dispatch({ type: actionType.SET_USER, user: user })
    );
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/checkout/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header/>
            <Orders/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;