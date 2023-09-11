import React, { useState } from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import Button from "../components/base/button/Button";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { act_register } from '../actions/userAction';
import { v4 as uuid } from 'uuid';
import { notification } from 'antd';
export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    user_id: uuid(),
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(act_register(user));
    navigate('/login')
    notification.success({
      message: "Thành công",
      description: "Đăng ký tài khoản thành công",
    })
  };
  return (
    <div>
      <Navbar />
      <div
        style={{ minHeight: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <form className="form-container" onSubmit={handleSubmit}>
          <h3 className="text-center p-3  ">FORM REGISTER</h3>
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Email
            </label>
            <input
              placeholder="Nhập địa chỉ email"
              className="form-input"
              type="text"
              id="email"
              name='email'
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              UserName
            </label>
            <input
              placeholder="Nhập  họ tên"
              className="form-input"
              type="text"
              id="email"
              name='userName'
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              placeholder="Nhập mật khẩu"
              className="form-input"
              type="password"
              id="password"
              name='password'
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <Button style={{ with: 100 }} title="register" type={"primary"} />
          </div>
          <div className="mt-3 d-flex justify-content-between">
            <Link to="/">Quay lại trang chủ</Link>
            <Link>Quên mật khẩu</Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
