import React, { useEffect, useState } from 'react';
import { useStateValue } from '../../context/StateProvider';
import db from '../../firebase';
import Order from './Order/Order';
import './Orders.css';

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  console.log(orders);

  return (
    <div className="orders">
      <h1>Your orders</h1>
      <div className="orders__order">
        {orders &&
          orders.map((order) => (
            <Order key={order.id} {...order.data} id={order.id} />
          ))}
      </div>
    </div>
  );
}

export default Orders;
