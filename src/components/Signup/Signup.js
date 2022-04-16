import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Signup.css';

const Signup = () => {
    //States
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [createUserWithEmailAndPassword,user,
        loading,error] = useCreateUserWithEmailAndPassword(auth);

    const handleEmail = event => {
        setEmail(event.target.value)
    }

    const handlePassword = event => {
        setPassword(event.target.value)
    }

    const handleSignUp = event =>{
        event.preventDefault();
        createUserWithEmailAndPassword(email,password)
    }

    return (
        <div className="form-container">
            <div>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmail} type="email" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePassword} type="password" required/>
                </div>
                <p>Already have an account? <Link to='/login' style={{color:'orange'}}>Log In</Link></p>
                <p>{error?.message}</p>
                <input className='submit-btn' type="submit" value="Sign Up" required/>
            </form>
            </div>
        </div>
    );
};

export default Signup;