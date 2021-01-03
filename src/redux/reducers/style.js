import { SET_BLUR } from "../actions/types";

const initialState = {
  blur: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BLUR:
      return {
        ...state,
        blur: action.payload,
      };

    default:
      return state;
  }
};

export const styleSelectors = {
  getBlur: (state = initialState) => state.blur,
};

export default reducer;
