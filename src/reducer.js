const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: '',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GOODS_LOADED':
      return { ...state, goods: payload, loading: false };
    case 'ADD_TO_BASKET':
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );

      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };

        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
        alertName: payload.name,
      };
    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === payload.id) {
            const newQuantity = el.quantity + 1;

            return {
              ...el,
              quantity: newQuantity,
            };
          } else {
            return el;
          }
        }),
      };
    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === payload.id) {
            const newQuantity = el.quantity - 1;

            return {
              ...el,
              quantity: newQuantity > 0 ? newQuantity : 1,
            };
          } else {
            return el;
          }
        }),
      };
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter((item) => item.id !== payload.id),
      };
    case 'HABDLE_BASKET_SHOW':
      return { ...state, isBasketShow: !state.isBasketShow };
    case 'CLOSE_ALERT':
      return { ...state, alertName: '' };

    default:
      return state;
  }
};

export default reducer;
