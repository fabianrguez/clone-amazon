import actionType from './actionType';

const initialState = {
  basket: [],
  user: null,
};

function modifyItemQuantityFromBasket(basket, itemIndex) {
  basket[itemIndex] = {
    ...basket[itemIndex],
    quantity: basket[itemIndex].quantity + 1,
  };
  return basket;
}

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.ADD_TO_BASKET:
      const index = state.basket.findIndex(
        (item) => item.id === action.item.id
      );
      if (index >= 0) {
        const basket = [...state.basket];
        return {
          ...state,
          basket: [...modifyItemQuantityFromBasket(basket, index)],
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, quantity: 1 }],
        };
      }
    case actionType.REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export { initialState };
export default reducer;
