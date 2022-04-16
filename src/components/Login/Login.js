import React, { useState } from 'react';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    //States
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";
    
    if(user){
        navigate(from, { replace: true });
    }
    
    const handleEmail = event => {
        setEmail(event.target.value)
    }

    const handlePassword = event => {
        setPassword(event.target.value)
    }

    const handleLogin = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password)
    }



    return (
        <div className="form-container">
            <div>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmail} type="email" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePassword} type="password" required/>
                </div>
                <p>Don't have an account? <Link to='/signup' style={{color:'orange'}}>Signup Now</Link></p>
                <p style={{color:'red'}}>{error?.message}</p>
                <input className='submit-btn' type="submit" value="Sign In" required/>
            </form>
            </div>
        </div>
    );
};

export default Login;