import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Signup() {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [pwd,setPwd]=useState();
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
      axios.post('http://localhost:3001/register',{name,email,pwd})
      .then(result => {
        console.log(result);
        navigate('/login');  // Only navigate after successful registration
    })
      .catch(err => console.log(err));
    }
    return <div>
        <div className="d-flex p-2 justify-content-center align-items-center bg-success-subtle vh-100">
            <div className="border border-success bg-white rounded border-3 p-3 w-25">
            <h2 className="text-success">REGISTER</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label"><strong>Name</strong></label>
                    <input type="text" className="form-control"  aria-describedby="emailHelp" placeholder="Enter Name" 
                    onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                    <input type="email" className="form-control"  placeholder="Enter email"
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label"><strong>Password</strong></label>
                    <input type="password" className="form-control"  placeholder="Enter password"
                    onChange={(e)=>setPwd(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>
                </form>
                <p>Already Have an Account</p>
                <Link to='/login' className="w-100 btn btn-outline-success rounded-0">Login</Link>
            </div>
        </div>
    </div>
}
export default Signup;