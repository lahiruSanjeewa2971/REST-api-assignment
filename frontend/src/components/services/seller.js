/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {Link} from 'react-router-dom';

function Seller() {
  return (
    <div>
        <h1>SELL</h1>
        <Link to="/addnewservice" className="btn btn-outline-secondary">New selling item</Link>
    </div>
  );
}

export default Seller;
