import actionType from './actionType';

const initialState = {
  basket: [],
  subtotal: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
        subtotal: state.subtotal + action.item.price,
      };
    default:
      return state;
  }
};

export { initialState };
export default reducer;
