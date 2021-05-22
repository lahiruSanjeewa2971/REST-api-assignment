import React from "react";
import { Link } from "react-router-dom";


function SingleService_({ post }) {

  return (
    <div
      className="col-md-8  shadow p3 mb-5 bg-white rounded"
      style={{
        textAlign: "center",
        marginTop: "20px",
        width: '70%',
        justifyContent: 'space-around',
        flexWrap:'wrap'}}>

      <div style={{
          minWidth:'300px',
          minHeight:'400px',
          border: '1px solid #eee',
          overflow: 'hidden',
          padding: '10px',
          boxshadow: '2px 8px 20px #ddd',
          margin: '10px',
          transition: '0.5s linear',
      }}>
        <h2>{post.servicename}</h2>
        <img
            style={{
            width: "600px",
            height: "450px",
            }}
            src={post.imgurl}
            alt=""
          />
        <h2>{post.category}</h2>
        <h2>Price : {post.price}.00</h2>

        <Link to="/">
            <li className="btn btn-info">BUY</li>
        </Link>
      </div>
    </div>
  );
}
export default SingleService_;
