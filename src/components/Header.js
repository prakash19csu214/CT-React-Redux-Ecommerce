import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
export class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <nav className="navbar  navbar-dark ">
            <ul className="nav" style={{"font-size": "20px"}}>
              <li className="nav-item mr-auto navbar-logo">
                <Link to="/" className="nav-link active mt-2">
                  Products
                </Link>
              </li>
              <li className="nav-item mt-3 spc">
                <Link to="/carts" className="btn btn-outline-success  nav-link">
                  <span className="cart-count">{this.props.numberCart}</span>
                  <span className="fa fa-lg fa-shopping-cart cart-btn" style={{"color": "var(--secondary-color)"}}></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    numberCart: state._todoProduct.numberCart,
  };
};
export default connect(mapStateToProps, null)(Header);
