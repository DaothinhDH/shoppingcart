import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const carts = useSelector((cart) => cart.listCart);
  return (
    <>
      <>
        {/* Navbar start */}
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* Container wrapper */}
          <div className="container-fluid">
            {/* Toggle button */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
            {/* Collapsible wrapper */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* Navbar brand */}
            
              <a className="navbar-brand mt-2 mt-lg-0" href="#">
                {" "}
                Shopping{" "}
              </a>
              {/* Left links */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Trang chủ </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/list-product">Sản phẩm </NavLink>
                </li>
                <li className="nav-item">
                  {/* Icon */}
                  <NavLink to={"/cart"} className="text-reset me-3 nav-link" href="#">
                    <i className="fas fa-shopping-cart" />
                    <span className="badge rounded-pill badge-notification bg-danger">
                      {carts.length}
                    </span>
                  </NavLink>
                </li>
              </ul>
              {/* Left links */}
            </div>
            {/* Collapsible wrapper */}
            {/* Right elements */}
            <div className="d-flex align-items-center">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link" to="/about">Giới thiệu</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Liên hệ</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/register"> Đăng ký</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/login">Đăng nhập</NavLink>
                </li>
              </ul>
              {/* Avatar */}
              <div className="dropdown">
                <a
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    height={25}
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      My profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Right elements */}
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar end */}
      </>
    </>
  );
}
