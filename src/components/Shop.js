import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { API_KEY, API_URL } from '../config';
import Alert from './Alert';
import BasketList from './BasketList';
import Cart from './Cart';
import GoodsList from './GoodsList';
import Preloader from './Preloader';
import {
  goodsLoaded,
  addToBasket,
  handleBasketShow,
  closeAlert,
  removeFromBasket,
  incQuantity,
  decQuantity,
} from '../actions/index';

function Shop({
  goods,
  loading,
  order,
  isBasketShow,
  alertName,
  goodsLoaded,
  addToBasket,
  handleBasketShow,
  removeFromBasket,
  incQuantity,
  decQuantity,
  closeAlert,
}) {
  useEffect(
    function getGoods() {
      fetch(API_URL, {
        headers: {
          Authorization: API_KEY,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          data.featured && goodsLoaded(data.featured);
        });
    },
    [goodsLoaded]
  );
  return (
    <main className='container content'>
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}
      {isBasketShow && (
        <BasketList
          order={order}
          removeFromBasket={removeFromBasket}
          handleBasketShow={handleBasketShow}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
}

const mapStateToProps = (state) => ({
  goods: state.goods,
  loading: state.loading,
  order: state.order,
  isBasketShow: state.isBasketShow,
  alertName: state.alertName,
});

const mapDispatchToProps = {
  goodsLoaded,
  addToBasket,
  handleBasketShow,
  closeAlert,
  removeFromBasket,
  incQuantity,
  decQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
