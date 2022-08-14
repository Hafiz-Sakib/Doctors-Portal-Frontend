import React from 'react';
import LoginImg from '../images/login.png'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="login-page container">
            <div className="row align-items-center" style={{height:"100vh"}}>
                <div className="col-md-6 shadow p-5">
                        <div className="form-group">
                            <label htmlFor="">User Name</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="text-danger">Forgot your password?</label>
                        </div>
                        <div className="from-group mt-5">
                            <Link to="doctor/dashboard" className="btn btn-primary btn-block text-capitalize">Sign In</Link>
                        </div>
                </div>
                <div className="col-md-6 d-none d-md-block align-self-end">
                    <img className="img-fluid" src={LoginImg} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Login;