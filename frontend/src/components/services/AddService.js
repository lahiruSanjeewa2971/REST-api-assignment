import React, { useState } from "react";
import axios from "axios";
import uniqid from "uniqid";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

export default function AddService() {
  const [servicename, setServicename] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [owner, setOwner] = useState("");
  const [location, setLocation] = useState("");

  function setData(e) {
    e.preventDefault();
    const newService = {
      servicename,
      imgurl,
      category,
      price,
      owner,
      location,
      serviceid: uniqid(),
    };

    axios
      .post("http://localhost:8070/service/addnewservice", newService)
      .then(() => {
        alert("Service added");
      })
      .catch((err) => {
        alert(err);
      });

    /*

        axios.post("http://localhost:8070/service/addnewservice", newService).then(() => {
            alert("Service added...!")
        }).catch((err) => {
            alert(err)
        }) */
  }

  return (
    <div>
      <h2 className="container">Add new Item</h2>
      <form>
        <Grid container>
          <Grid item xs={6}>
            <div className="container">
              <input
                type="text"
                className="form-control"
                id="servicename"
                placeholder="Item name"
                onChange={(e) => {
                  setServicename(e.target.value);
                }}
              />
              <br />
            </div>

            <div className="container">
              <input
                type="text"
                className="form-control"
                id="imgurl"
                placeholder="Image url"
                onChange={(e) => {
                  setImgurl(e.target.value);
                }}
              />
              <br />
            </div>

            <div className="container">
              <input
                type="text"
                className="form-control"
                id="category"
                placeholder="Category"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
              <br />
            </div>
            
          </Grid>
          <Grid item xs={6}>

            <div className="container">
              <input
                type="text"
                className="form-control"
                id="price"
                placeholder="Price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
              <br />
            </div>

            <div className="container">
              <input
                type="text"
                className="form-control"
                id="owner"
                placeholder="Owner"
                onChange={(e) => {
                  setOwner(e.target.value);
                }}
              />
              <br />
            </div>

            <div className="container">
              <input
                type="text"
                className="form-control"
                id="location"
                placeholder="Location"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
              <br />
            </div>

          </Grid>
        </Grid>

        <button onClick={setData} className="btn btn-outline-primary">
          Add Item
        </button>
        <Link to="/sellers" className="btn btn-outline-primary">
          Selling
        </Link>
      </form>
    </div>
  );
}
