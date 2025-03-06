import React from 'react';

const LoginForm: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold mb-6'>LoginForm</h1>
      <form>
        <div className='flex flex-col items-center justify-center h-screen'>
          <input type='email' placeholder='Email' className='border border-gray-400 p-2 mb-4' />
          <input
            type='password'
            placeholder='Password'
            className='border border-gray-400 p-2 mb-4'
          />
          <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
