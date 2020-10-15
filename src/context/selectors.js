const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price * item.quantity + amount, 0);

const getBasketItemsTotal = (basket) =>
  basket?.reduce((total, item) => (total += item.quantity), 0);

export { getBasketTotal, getBasketItemsTotal };
