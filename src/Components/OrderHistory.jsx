import React from 'react';
import { Link } from 'react-router-dom';

const OrderHistory = () => {
  // Mock order data
  const orders = [
    { id: 1, date: '2024-07-15', total: '$99.99' },
    { id: 2, date: '2024-06-20', total: '$49.99' },
    { id: 3, date: '2024-05-30', total: '$29.99' }
  ];

  return (
    <div className="order-history-page">
      <h1>Order History</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <Link to={`/order-details/${order.id}`}>
              Order ID: {order.id}, Date: {order.date}, Total: {order.total}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
