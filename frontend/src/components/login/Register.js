import React, {useState} from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import startsWith from 'lodash.startswith';
import axios from 'axios';
import {  useHistory } from 'react-router'
function Register(){
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [username, setusername] =useState('')
    const [password, setpassword] = useState('')
    const [phone, setphoneInput] = useState()
    const [address, setaddress] = useState('')
    const history = useHistory()
    function register(event){
        event.preventDefault()
        
        var user = {
            fname: fname,
            lname: lname,
            username: username,
            password: password,
            phone: phone,
            address: address
        }
        axios.post("http://localhost:8070/user/register", user).then(res=>{
            console.log(res)
            alert(res.data)
            history.push('/login')
        }).catch(err=>{
            console.log(err)
        })
    }

    return(
        <div className="container">
           
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={register}>
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
                        <textarea type="text" placeholder='address'  defaultCountry="US" className='form-control' value={address} onChange={(e)=>{setaddress(e.target.value)}}/>
                       <input type="submit" value='register' className="btn btn-primary"/>
                    </form>
                </div>
            </div>
        </div>
    )
       
    


}
export default Register