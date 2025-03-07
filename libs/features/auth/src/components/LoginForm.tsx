import React from 'react';
import { RpButton, RpTextInput } from '@libs/ui/raptor';
import { Camera } from 'lucide-react';

const LoginForm: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold mb-6'>LoginForm</h1>
      <form>
        <div className='flex flex-col items-center justify-center h-screen'>
          <RpTextInput
            rpType={'email'}
            rpLabel={{ text: 'Email', required: true, position: 'top' }}
            placeholder={'Email sdsadas'}
          />

          <input type='email' placeholder='Email' className='border border-gray-400 p-2 mb-4' />
          <input
            type='password'
            placeholder='Password'
            className='border border-gray-400 p-2 mb-4'
          />
          <RpButton
            type={'button'}
            variant={'primary'}
            size={'md'}
            icon={{
              element: <Camera size={18} />,
              position: 'left',
            }}
            className='w-32'
          >
            Click me
          </RpButton>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
