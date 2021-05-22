import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";

function EditItem(){

    const params = useParams();

    const [servicename, setServicename] = useState("");
    const [imgurl, setImgurl] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [owner, setOwner] = useState("");
    const [location, setLocation] = useState("");

    const history = useHistory();

    useEffect(() => {

        axios.post("http://localhost:8070/service/getservice", {serviceid: params.serviceid}).then(res => {
            
            const postdata = res.data[0];
            setServicename(postdata.servicename);
            setImgurl(postdata.imgurl);
            setCategory(postdata.category);
            setPrice(postdata.price);
            setOwner(postdata.owner);
            setLocation(postdata.location);

        }).catch((err) => {
            console.log(err)
        })

    }, [])

    function EditItem(){

        const updatedItem = {
            servicename: servicename,
            imgurl: imgurl,
            category: category,
            price: price,
            owner: owner,
            location: location,
            serviceid: params.serviceid
        }

        axios.post("http://localhost:8070/service/update", updatedItem).then(res => {
            alert(res.data)
            history.push("/")
        }).catch(err => {
            console.log(err)
        })
    }

    return(
        <div>
            <form onSubmit={EditItem}>
                <h1 className="m3 container">Update Item details</h1>
                <div className="container">
                <input type="text" className="form-control" id="servicename" placeholder="Item name" value={servicename}
                onChange={(e)=>{
                    setServicename(e.target.value);
                }}/><br/>
            </div>

            <div className="container">
                <input type="text" className="form-control" id="imgurl" placeholder="Image url" value={imgurl}
                onChange={(e)=>{
                    setImgurl(e.target.value);
                }}/><br/>
            </div>

            <div className="container">
                <input type="text" className="form-control" id="category" placeholder="Category" value={category}
                onChange={(e)=>{
                    setCategory(e.target.value);
                }}/><br/>
                
            </div>

            <div className="container">
                <input type="text" className="form-control" id="price" placeholder="Price" value={price}
                onChange={(e)=>{
                    setPrice(e.target.value);
                }}/><br/>
            </div>

            <div className="container">
                <input type="text" className="form-control" id="owner" placeholder="Owner" value={owner}
                onChange={(e)=>{
                    setOwner(e.target.value);
                }}/><br/>
            </div>

            <div className="container">
                <input type="text" className="form-control" id="location" placeholder="Location" value={location}
                onChange={(e)=>{
                    setLocation(e.target.value);
                }}/><br/>
                <button className="btn btn-outline-primary">Update Item</button>
            </div>
            
            </form>
        </div>
    )
}
export default EditItem