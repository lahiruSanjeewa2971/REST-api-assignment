import React, {useState} from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import startsWith from 'lodash.startswith';
import axios from 'axios';
import {  useHistory } from 'react-router'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';


  
  export default function SellerRegister(){
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [username, setusername] =useState('')
    const [password, setpassword] = useState('')
    const [phone, setphoneInput] = useState()
    const [country, setCountry] = useState()
    const [region, setRegion] = useState()
    const [address, setaddress] = useState('')
    const [companyName, setcompanyName] = useState('')
    const [email, setEmail] = useState('')
    
    const history = useHistory()
    
    
    
    
    
    function sellerRegister(event){
        event.preventDefault()
        
        var seller = {
            fname: fname,
            lname: lname,
            username: username,
            password: password,
            phone: phone,
            country: country,
            region:region,
            address: address,
            companyName: companyName,
            email: email,

        }
        axios.post("http://localhost:8070/seller/sellerRegister", seller).then(res=>{
            console.log(res)
            alert(res.data)
            history.push('/sellerLogin')
        }).catch(err=>{
            console.log(err)
        })
    }
    
    
    return(
        <div className="container">
           
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={sellerRegister} >
                    <h1>Register</h1>
                        <input type="text" placeholder='first name' className='form-control' value={fname} onChange={(e)=>{setfname(e.target.value)}}/>
                        <input type="text" placeholder='last name' className='form-control'value={lname} onChange={(e)=>{setlname(e.target.value)}}/>
                        <input type="text" placeholder='user name' className='form-control' value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                        <input type="text" placeholder='password' className='form-control'value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                        <PhoneInput  
                            isValid={(inputNumber, country, countries) => {
                            return countries.some((country) => {
                                return startsWith(inputNumber, country.dialCode) || startsWith(country.dialCode, inputNumber);
                                });
                            }}
                        className="form-control" placeholder="Enter phone number" onChange={setphoneInput}/>
                        <CountryDropdown value={country} placeholder='Select Country' className='form-control' onChange={setCountry} />
                        <RegionDropdown country={country} placeholder='Select Region' className='form-control'value={region} onChange={setRegion} />
                        <textarea type="text" placeholder='address'  defaultCountry="US" className='form-control' value={address} onChange={(e)=>{setaddress(e.target.value)}}/>
                        <input type="text" placeholder='company name' className='form-control' value={companyName} onChange={(e)=>setcompanyName(e.target.value)}/>
                        <input type="text" placeholder='email address' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>

                        
                       <input type="submit" value='sellerRegister' className="btn btn-primary"/>
                    
                    
                    </form>
                    
                </div>
            </div>
        </div>
    )
       
    


}
  
  