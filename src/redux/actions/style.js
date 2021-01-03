import { SET_BLUR } from "./types";

export const setBlur = (status) => {
  return {
    type: SET_BLUR,
    payload: status,
  };
};
