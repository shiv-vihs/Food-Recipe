import * as actionTypes from "./actionTypes";
export const setRecipeList = (transData) => {
  return {
    type: actionTypes.SET_RECIPELIST,
    list: transData,
  };
};

export const initRecipeList = () => {
  return {
    type: actionTypes.INIT_RECIPELIST,
  };
};
