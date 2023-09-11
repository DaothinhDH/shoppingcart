import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { useDispatch, useSelector } from "react-redux";
import { formatMoney } from "../common/format";
import { act_add } from "../actions/cartActions";
import { Link } from "react-router-dom";
import { notification } from "antd";

export default function ListProduct() {
  const listProduct = useSelector((pro) => pro.listProduct);
  const dispatch = useDispatch();

  //  hàm thêm sản phẩm vào giỏ hàng
  const handleAddToCart = (product) => {
    dispatch(act_add(product)); // gửi thông tin product lên reducer để xử lý
    notification.success({
      message: "Thêm sản phẩm vào giỏ hàng thành công",
      description: ` Đã  thêm sản phẩm vào giỏ hàng`,
    })

  };
  return (
      <>
        <Navbar />
        {/* List product start */}
        <section style={{ backgroundColor: "#eee" }}>
          <div className="text-center container py-5">
            <h4 className="mt-4 mb-5">
              <strong>DANH SÁCH SẢN PHẨM</strong>
            </h4>
            <div className="row">
              {listProduct.map((product) => (
                <div
                  className="col-lg-4 col-md-12 mb-4"
                  key={product.product_id}
                >
                  <div className="card">
                    <div
                      className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                      data-mdb-ripple-color="light"
                    >
                      <img src={product.image} className="w-100" />
                      <a href="#!">
                        <div className="mask">
                          <div className="d-flex justify-content-start align-items-end h-100">
                            <h5>
                              <span className="badge bg-primary ms-2">New</span>
                            </h5>
                          </div>
                        </div>
                        <div className="hover-overlay">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.15)",
                            }}
                          />
                        </div>
                      </a>
                    </div>
                    <div className="card-body">
                      <Link
                        to={`/product/${product.product_id}`}
                        href=""
                        className="text-reset"
                      >
                        <h5 className="card-title mb-3">
                          {product.product_name}
                        </h5>
                      </Link>
                      <h6 className="mb-3">{formatMoney(product.price)}</h6>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="btn btn-primary"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* List product end */}
        <Footer />
      </>
  );
}
