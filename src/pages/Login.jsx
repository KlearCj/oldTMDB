import axios from "axios";
import React, { useContext} from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const context = useContext(AuthContext);
  const navigate= useNavigate()

  const handlerLog = (e) => {
    const {email, password}= context
    e.preventDefault();
    context.toggleAuth(email, password)
    axios.post("/api/log",context).then(() => {
     navigate("/")
    });
  };

  const setEmail = ({email}) =>{
    context.email=email
  }
  const setPass = ({password}) =>{
    context.password=password
  }
      
  return (
    <div className="card container">
      <div className="card-body">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) =>setEmail({email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) =>setPass({ password: e.target.value })}
          />
        </div>
        <button onClick={handlerLog} type="submit" className="btn">
          Submit
        </button>
      </form>
      </div>
    </div>
  );
};

export default Login;
