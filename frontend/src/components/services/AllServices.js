import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleService from "./SingleService";

export default function AllServices() {
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
              
              <SingleService post={post} />
          </div>
      )
  })

  return(
      <div>
          {serviceList}
      </div>
  )
}
