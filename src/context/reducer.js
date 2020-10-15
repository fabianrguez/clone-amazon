import actionType from './actionType';

const initialState = {
  basket: [],
};

function modifyBasket(basket, itemIndex) {
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
        const { basket } = state;
        return {
          ...state,
          basket: [...modifyBasket(basket, index)],
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, quantity: 1 }],
        };
      }
    default:
      return state;
  }
};

export { initialState };
export default reducer;
