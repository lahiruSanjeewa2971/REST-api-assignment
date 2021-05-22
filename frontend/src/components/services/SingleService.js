import React from "react";
import { Link, useHistory } from "react-router-dom";

import axios from "axios";

function SingleService({ post }) {
  const history = useHistory();

  function deleteItem(serviceid){
        axios.post('http://localhost:8070/service/delete', {serviceid: serviceid}).then(res => {
            alert(res.data)
            history.go(0)
        }).catch(err => {
            console.log(err)
        })
    }

  return (
    <div
      className="col-md-8  shadow p3 mb-5 bg-white rounded"
      style={{
        textAlign: "center",
        marginTop: "20px",
        width: "50%",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          minWidth: "300px",
          minHeight: "400px",
          border: "1px solid #eee",
          overflow: "hidden",
          padding: "10px",
          boxshadow: "2px 8px 20px #ddd",
          margin: "10px",
          transition: "0.5s linear",
        }}>
        <h2>{post.servicename}</h2>
        <img style={{
            width: "300px",
            height: "200px",
          }}
          src={post.imgurl} alt=""/>

        <h2>{post.category}</h2>
        <h2>{post.price}</h2>
        <h2>Owner | {post.owner} |</h2>
        <h2>{post.location}</h2>

        <Link to={`/edititem/${post.serviceid}`}>
          <li className="btn btn-info">Edit</li></Link>
        <button onClick={() => {
          deleteItem(post.serviceid);
        }}className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}
export default SingleService;
