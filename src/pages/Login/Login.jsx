import React from 'react';
import Navbar from '../../components/Navbar';
import authBg from '../../assets/auth-bg.jpg';

const Login = () => {
    return (
        <div className='relative'>
            <Navbar darkText={true} />
            <div className='grid grid-cols-2 gap-20'>
                <div className='min-h-screen' style={{ backgroundImage: `url(${authBg})` }}>
                </div>
                <div className='flex flex-col justify-center min-h-screen'>
                    <h1 className='text-3xl font-bold'>Login</h1>
                    <p>Sign in with email and password.</p>
                    <div className='mt-10'>
                        <div className='mb-6'>
                            <p className='mb-1 font-medium'>Email</p>
                            <input type="email" className='w-5/6 sm:w-3/4 py-4 border-2 rounded outline-none px-3' placeholder='Enter your email' />
                        </div>
                        <div className='mb-6'>
                            <p className='mb-1 font-medium'>Password</p>
                            <input type="password" className='w-5/6 sm:w-3/4 py-4 border-2 rounded outline-none px-3' placeholder='Enter your password' />
                        </div>
                        <button className='py-3 px-6 bg-primary text-white rounded'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;