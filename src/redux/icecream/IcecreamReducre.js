import { BUY_ICECREAM } from "./icecreamType";

const initialIcecream = {
  numOfIcecream: 20,
};

export const icecreamReducer = (state = initialIcecream, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numOfIcecream: state.numOfIcecream - 1 };
    default:
      return state;
  }
};
