import actionType from './actionType';

const initialState = {
  basket: [],
  subtotal: 0,
  basketItemsTotal: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.ADD_TO_BASKET:
      const index = state.basket.findIndex(
        (item) => item.id === action.item.id
      );
      if (index >= 0) {
        return {
          ...state,
          basket: [
            {
              ...state.basket[index],
              quantity: state.basket[index].quantity + 1,
            },
          ],
          subtotal: state.subtotal + action.item.price,
          basketItemsTotal: state.basketItemsTotal + 1,
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, quantity: 1 }],
          subtotal: state.subtotal + action.item.price,
          basketItemsTotal: state.basketItemsTotal + 1,
        };
      }
    default:
      return state;
  }
};

export { initialState };
export default reducer;
