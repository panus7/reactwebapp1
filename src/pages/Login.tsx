import React, { useContext, useState } from 'react'
import Navigation from '../Navigation';
import '../style/Login.css'
import AuthContext from '../compnents/AuthContext'; // Import the context
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const { setIsLoggedIn } = useContext(AuthContext);
    const handleLogin = () => {
        console.log('login button click')
        setIsLoggedIn(true); // Update login state
        navigate('/Home');
    };


    return (
        <div>
            <div className='mainbg'>
                <form>
                    <div className="card-container">
                        <div className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>
                            <div className="card-header">Login App.js</div>
                            <div className="card-body text-primary">
                                <div className="mb-3">
                                    {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={handleLogin}>Submit</button>

                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login