import {
  ACT_ADD_CART,
  ACT_DECREASE,
  ACT_INCREASE,
} from "../constrains/actionType";

export const act_add = (product) => {
  return {
    type: ACT_ADD_CART,
    payload: product,
  };
};

export const act_increase = (id) => {
  return {
    type: ACT_INCREASE,
    payload: id,
  };
};

export const act_Decrease = (id) => {
  return {
    type: ACT_DECREASE,
    payload: id,
  };
};
