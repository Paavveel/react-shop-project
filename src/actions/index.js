export const goodsLoaded = (payload) => ({
  type: 'GOODS_LOADED',
  payload,
});
export const addToBasket = (item) => ({
  type: 'ADD_TO_BASKET',
  payload: item,
});
export const handleBasketShow = () => ({
  type: 'HABDLE_BASKET_SHOW',
});
export const removeFromBasket = (id) => ({
  type: 'REMOVE_FROM_BASKET',
  payload: { id },
});
export const incQuantity = (id) => ({
  type: 'INCREMENT_QUANTITY',
  payload: { id },
});
export const decQuantity = (id) => ({
  type: 'DECREMENT_QUANTITY',
  payload: { id },
});
export const closeAlert = () => ({
  type: 'CLOSE_ALERT',
});
