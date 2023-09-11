import { combineReducers } from "redux";
import { listProduct } from "./listProduct";
import { listCart } from "./listCart";
import { listUser } from "./listUser";

export const reduce = combineReducers({ listProduct, listCart,listUser });