import React from 'react';

const Footer = () => {
    return (
        <footer className='min-h-screen bg-black'>
            <div className='container mx-auto '>
                <h1 className='text-3xl font-bold text-white py-16'>If you have any queries feel free to ask here.</h1>
                <div>
                    <div className='mb-6'>
                        <p className='text-white mb-2 font-medium'>Name:</p>
                        <input type="text"  className='w-5/6 sm:w-1/2 py-4 rounded outline-none px-3' placeholder='Enter your Name'/>
                    </div>
                    <div className='mb-6'>
                        <p className='text-white mb-2 font-medium'>Email:</p>
                        <input type="email" className='w-5/6 sm:w-1/2 py-4 rounded outline-none px-3' placeholder='Enter your Email'/>
                    </div>
                    <div className='mb-6'>
                        <p className='text-white mb-2 font-medium'>Query:</p>
                        <textarea type="text" className='w-5/6 sm:w-1/2 py-4 rounded outline-none px-3' placeholder='Type your Query'/>
                    </div>
                </div>
                <button className='py-2 px-6 bg-primary rounded text-white'>Submit</button>
                <p className="text-white mt-10">© 2023 BookStore - All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;