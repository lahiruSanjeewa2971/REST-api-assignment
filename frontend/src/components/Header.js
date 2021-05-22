/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Link} from 'react-router-dom';
import Menu from './svg/menu.svg';
import Close from './svg/close.svg';
import CartIcon from './svg/shoppingcart.svg';
import './css/header.css';

/*function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Explores shopping 
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

          <div className="navbar-nav">
            <Link to="/" className="nav-link active">Home</Link>
            <Link to="/contactus" className="nav-link active">Contact-us</Link>
            <Link to="/sellers" className="nav-link active">Seller</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}*/

export class Header extends Component{

  render(){
    return(
      <header>
        <div className="menu">
          <img src={Menu}  alt="" width="30"/>
        </div>

        <div className="logo">
          <h1><Link to="/">Explores</Link></h1>
        </div>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contactus" className="nav-link active">Contact-us</Link></li>
            <li><Link to="/sellerLogin" className="nav-link active">Seller</Link></li>
            <li><Link to="/register" className="nav-link active"> Signup</Link></li>
            <li><Link to="/login" className="nav-link active"> Login</Link></li>
            <li className="close">
              <img src={Close} alt="" width="30" />
            </li>
          </ul>
          <div className="nav-cart">
            <span>0</span>
            <Link to="/cart">
              <img src={CartIcon} alt="" width="30" />
            </Link>
            
          </div>
        </nav>
      </header>
    )
  }


}




export default Header;
