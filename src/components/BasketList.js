import React from 'react';
import BasketItem from './BasketItem';

function BasketList({
  order = [],
  handleBasketShow,
  removeFromBasket,
  incQuantity,
  decQuantity,
}) {
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className='collection basket-list'>
      <li className='collection-item active'>Корзина</li>
      {order.length ? (
        order.map((orderItem) => {
          return (
            <BasketItem
              key={orderItem.id}
              {...orderItem}
              removeFromBasket={removeFromBasket}
              incQuantity={incQuantity}
              decQuantity={decQuantity}
            />
          );
        })
      ) : (
        <li className='collection-item'>Корзина пуста</li>
      )}
      <li className='collection-item active'>
        Общая стоимость: {totalPrice} руб.
      </li>
      <li className='collection-item'>
        <button className='btn-small'>Оформить</button>
      </li>
      <i className='material-icons basket-close' onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}

export default BasketList;
