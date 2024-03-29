import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../../assets/images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../../ReduxToolKit/tokenReducer.js";
import { getProducts } from "../../ReduxToolKit/cartReducer.js";

function Navbar() {
  const navigate = useNavigate();
  const { userToken } = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(removeToken());
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {userToken && (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    <span>Cart</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/brands">
                    Brands
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/allorders">
                    Orders
                  </Link>
                </li>
              </ul>
            )}

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex align-items-center">
                <i className="fab fa-instagram me-2"></i>
                <i className="fab fa-facebook mx-2"></i>
                <i className="fab fa-tiktok mx-2"></i>
                <i className="fab fa-twitter mx-2"></i>
                <i className="fab fa-linkedin mx-2"></i>
                <i className="fab fa-youtube mx-2"></i>
              </li>

              {!userToken ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <span
                    onClick={() => logout()}
                    className="nav-link cursor-pointer"
                  >
                    Logout
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
