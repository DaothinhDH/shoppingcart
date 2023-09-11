import {
  ACT_ADD_CART,
  ACT_DECREASE,
  ACT_INCREASE,
} from "../constrains/actionType";

const initialState = JSON.parse(localStorage.getItem("carts")) || [];
/**
 * hàm lấy ra vị trí của product trong list product
 * @param {*} id id cần kiểm tra
 * @param {*} array mảng dùng để kiểm tra
 * @returns nếu tìm thấy bản ghi thì trả ra index nếu không trả ra -1
 * Author: DHT(08/09/2023)
 */

// hàm lấy ra vị trí của product trong list product
const findIndexProduct = (id, array) => {
  const productIndex = array.findIndex((pro) => pro.product_id == id);
  return productIndex;
};

//  lưu dữ liệu lên local
const saveDataLocal = (array) => {
  localStorage.setItem("carts", JSON.stringify(array));
};
export const listCart = (state = initialState, action) => {
  switch (action.type) {
    case ACT_ADD_CART:
      // vị trí cần lấy
      const indexProduct = findIndexProduct(action.payload.product_id, state);
      // 2 kiểm tra sản phẩm đã tồn tại trong giỏ hàng ?
      if (indexProduct !== -1) {
        const newCarts = [...state];
        // nếu tồn tại thì tăng số lượng
        newCarts[indexProduct].quantity += 1;
        // lưu dữ liệu lên loacal
        saveDataLocal(newCarts);
        return newCarts;
      } else {
        // nếu chưa tồn tại thì thêm sản phẩm vào giỏ hàng
        //   clone lại mảng cũ
        const newAddCarts = [...state, { ...action.payload, quantity: 1 }];
        //   3 lưu dữ liệu lên loacal
        saveDataLocal(newAddCarts);
        //   4.return ra mảng mới
        return newAddCarts;
      }
    case ACT_INCREASE:
      // clone lại mảng cũ
      const increaseCarts = [...state];
      // lấy ra vị trí của sản phẩm cần cập nhật
      const updateIndex = findIndexProduct(action.payload, increaseCarts);
      console.log("index: ", increaseCarts[updateIndex].quantity);
      // kiểm tra nếu quantity <0 thì xóa

      // cập nhật lại quantity
      increaseCarts[updateIndex].quantity += 1;

      // lưu lên local
      saveDataLocal(increaseCarts);
      // return ra mảng mới
      return increaseCarts;

    default:
      return state;

    case ACT_DECREASE:
      //1. clone lại mảng cũ
      const newDecrease = [...state];
      //vị trí cần lây
      const indexDecrease = findIndexProduct(action.payload, newDecrease);

      //kiểm tra nếu quanlity <0 thì xóa
      if (newDecrease[indexDecrease].quantity > 1) {
        //-nếu tồn tại thì tăng số lượng
        newDecrease[indexDecrease].quantity -= 1;
        //lưu lên local
        saveDataLocal(newDecrease);
        return newDecrease;
      } else {
        //B3.2 Xóa sản phẩm khỏi mảng mới
        const productFilter = newDecrease.filter(
          (product) => product.product_id !== action.payload
        );
        // newArrDecrease.splice(indexProductDecrease, 1);
        //B4: Lưu mảng mới vào localStorage
        saveDataLocal(productFilter);
        //B5: Trả về mảng mới
        return productFilter;
      }
  }
};
