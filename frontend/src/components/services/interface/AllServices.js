/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleService_ from "./SingleService_";

export default function AllServicess() {
  const [postdata, setpostdata] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8070/service/").then((res) => {
        console.log(res.data);
        setpostdata(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const serviceList = postdata.map(post => {
      return(
          <div className="row justify-content-center">
              
              <SingleService_ post={post} />
          </div>
      )
  })

  return(
      <div>
          {serviceList}
      </div>
  )
}
