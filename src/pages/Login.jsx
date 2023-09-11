import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Button from "../components/base/button/Button";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <Navbar />
      <div
        style={{ minHeight: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <form className="form-container">
          <h3 className="text-center p-3  ">FORM LOGIN</h3>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              placeholder="Nhập địa chỉ email"
              className="form-input"
              type="text"
              id="email"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              placeholder="Nhập mật khẩu"
              className="form-input"
              type="password"
              id="password"
            />
          </div>
          <div className="mt-3">
            <Button style={{ with: 100 }} title="Login" type={"primary"} />
          </div>
          <div className="mt-3 d-flex justify-content-between">
            <Link to="/" >Quay lại trang chủ</Link>
            <Link>Quên mật khẩu</Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
