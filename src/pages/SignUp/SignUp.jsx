import React, { useContext, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import authBg from '../../assets/auth-bg.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
    const { createUser, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then(result => {
                toast.success("Account created successfully.");
            })
            .catch(e => console.log(e))

    }
    useEffect(() => {
        if (user?.email) {
            navigate('/');
        }
    }, [user?.email])
    return (
        <div className='relative'>
            <Navbar darkText={true} />
            <div className='grid grid-cols-2 gap-20'>
                <div className='min-h-screen' style={{ backgroundImage: `url(${authBg})` }}>
                </div>
                <div className='flex flex-col justify-center min-h-screen'>
                    <h1 className='text-3xl font-bold'>Sign Up</h1>
                    <p>Create a new account with email and password.</p>
                    <form onSubmit={handleSignUp} className='mt-10'>
                        <div className='mb-6'>
                            <p className='mb-1 font-medium'>Username</p>
                            <input name='name' type="text" className='w-5/6 sm:w-3/4 py-4 border-2 rounded outline-none px-3' placeholder='Enter your username' />
                        </div>
                        <div className='mb-6'>
                            <p className='mb-1 font-medium'>Email</p>
                            <input name='email' type="email" className='w-5/6 sm:w-3/4 py-4 border-2 rounded outline-none px-3' placeholder='Enter your email' />
                        </div>
                        <div className='mb-6'>
                            <p className='mb-1 font-medium'>Password</p>
                            <input name='password' type="password" className='w-5/6 sm:w-3/4 py-4 border-2 rounded outline-none px-3' placeholder='Enter your password' />
                        </div>
                        <button type='submit' className='py-3 px-6 bg-primary text-white rounded'>Sign Up</button>
                        <p>Already have an account? Please <Link to='/login' className='hover:underline text-primary'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;