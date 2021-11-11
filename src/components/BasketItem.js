import React from 'react';

function BasketItem({
  id,
  name,
  price,
  quantity,
  removeFromBasket,
  incQuantity,
  decQuantity,
}) {
  return (
    <li className='collection-item'>
      {name} {price} руб.
      <i
        className='material-icons basket-quantity'
        onClick={() => decQuantity(id)}
      >
        remove
      </i>{' '}
      x{quantity}{' '}
      <i
        className='material-icons basket-quantity'
        onClick={() => incQuantity(id)}
      >
        add
      </i>{' '}
      = {price * quantity} руб.
      <span className='secondary-content' onClick={() => removeFromBasket(id)}>
        <i className='material-icons basket-delete'>close</i>
      </span>
    </li>
  );
}

export default BasketItem;
