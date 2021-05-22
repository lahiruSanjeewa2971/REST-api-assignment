import axios from 'axios'
import React, {useState} from 'react'
import {  useHistory } from 'react-router'
import {Link} from 'react-router-dom';



function SellerLogin(){
    
    const [username, setusername] =useState('')
    const [password, setpassword] = useState('')
    const history = useHistory()
   

    function login(event){
        event.preventDefault()
        
        var seller = {
           
            username: username,
            password: password,
           
        }
        axios.post("http://localhost:8070/seller/sellerLogin", seller)
        .then(res=>{
            console.log(res)
            alert(res.data)
            history.push('/sellers')
        }).catch(err=>{
            console.log(err)
        })
    }
    
   
    return(
        
        <div className="container" >
            
            <div className="row justify-content-center " >
                <div className="col-md-5" >

                    <form onSubmit={login}>
                    <h1> Seller Login</h1>
                      <div class="form-group">
                      <label for="username">Username:</label>
                        <input type="text" placeholder='user name' className='form-control' value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                      </div>
                      <div class="form-group">
                      <label for="pwd">Password:</label>
                        <input type="text" placeholder='password' className='form-control'value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                        </div><br/>
                        <input type="submit"  value='login' className="btn btn-info btn-lg btn-block" style={{paddingLeft: '20px'}} />
                        
                    </form>
                    If you haven't account yet? <Link to={`/sellerRegister`} className="btn btn-lg" style={{color:'blue'}}>Create account</Link>
                </div>
            </div>
        </div>
    )
       
    


}
export default SellerLogin