import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Input } from '@libs/ui/raptor';
import { Mail, Lock } from 'lucide-react';
import { appEnvironment } from '@libs/config';
import { Link } from 'react-router-dom';
import { LoginRequest } from '../auth.type';
import { useAuth } from '../auth.hook';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const LoginForm: React.FC = () => {
  const { loginUser } = useAuth();
  const form = useForm<LoginRequest>({ resolver: yupResolver(schema) });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  // Submit user credentials
  const onSubmit = (data: LoginRequest) => {
    loginUser(data);
  };

  // Login with Google
  const onGotoGoogle = () => {
    window.location.href = appEnvironment.oauth2.google;
  };

  return (
    <div className='w-full max-w-md space-y-4 rounded-2xl bg-white p-8 shadow-md'>
      <form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
        <Input
          className='text-sm px-10'
          leftIcon={<Mail size={22} className='text-gray-500' />}
          type={'email'}
          placeholder={'Email'}
          inputSize={'lg'}
          error={errors.email?.message}
          {...register('email')}
        />

        <Input
          className='text-sm px-10'
          leftIcon={<Lock size={22} className='text-gray-500' />}
          type={'password'}
          placeholder={'Password'}
          inputSize={'lg'}
          error={errors.password?.message}
          {...register('password')}
        />

        <div className='flex flex-col items-center justify-center gap-4'>
          <Button type='submit' size='lg' className='w-full'>
            Login
          </Button>

          <Button
            variant='outline'
            onClick={onGotoGoogle}
            type='button'
            size='lg'
            className='w-full'
          >
            Login with Google
          </Button>

          <Link to='/register' className='text-xs text-gray-700 hover:underline'>
            Don&apos;t have an account? Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
