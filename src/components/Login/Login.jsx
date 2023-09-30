import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className="form-parent">
            <h2 className='form-title'>Login</h2>
            <form>
                <div className='form-control'>
                    <label htmlFor="Email">Email</label>
                    <input type="email" placeholder='Enter email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter password' required />
                </div>
            </form>
        </div>
    );
};

export default Login;