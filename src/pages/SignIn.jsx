import axios from 'axios';
import React, { useState } from 'react'

const SignIn = () => {
  const [register, setRegister] = useState({username:"", email: "", password: ""})

  const handlerSubmit=(e)=>{
    e.preventDefault();
 axios.post("/api/sign", register)
 .then(()=>{console.log("Ya te registraste");})
}
  return (
    <div className="card container">
    <div className="card-body">
    <form onSubmit={handlerSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Username</label>
    <input type="text" className="form-control" onChange={e=> setRegister({...register, username: e.target.value})} value={register.username}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e=> setRegister({...register, email: e.target.value})} value={register.email}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={e=> setRegister({...register, password: e.target.value})} value={register.password}/>
  </div>
   <button type="submit" className="btn">Submit</button>
</form>
    </div>
    </div>
  )
}

export default SignIn