import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserLogContext } from '../providers/AuthProvider';

const Login = () => {
    const { singInUser } = useContext(UserLogContext);
    const navigate = useNavigate();

    const handleLogIn = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        singInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate('/')
            })
            .then(error => {
                const errorMsg = error.message
                console.log(errorMsg)
            })

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-5xl font-bold pt-10">Login now!</h1>
                <form onSubmit={handleLogIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control my-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <NavLink to='/register' className='btn bg-green-600 text-white'>Create an Account</NavLink>
                </form>

            </div>
        </div>
    );
};

export default Login;