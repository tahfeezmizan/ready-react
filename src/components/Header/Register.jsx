import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserLogContext } from '../providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(UserLogContext);
    const navigate = useNavigate();
    
    const handleUserRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        // create user by using context 
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset();
                navigate('/')
            })
            .then(error => {
                const errorMsg = error.message;
                console.log(errorMsg)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col gap-10 px-44 lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleUserRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter You Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter You Password" className="input input-bordered" required />
                        </div>

                        <div className="flex items-center gap-3">
                            <input type="checkbox" name="terms" id="trams" />
                            <label htmlFor="trams">accept our <NavLink className='text-green-300'>terms & condition</NavLink></label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>already have account <NavLink to="/login" className="underline text-green-400">login</NavLink></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;