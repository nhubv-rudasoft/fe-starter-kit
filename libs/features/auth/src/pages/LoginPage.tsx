import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold mb-6'>Login</h1>
      <LoginForm />
    </div>
  );
};

LoginPage.displayName = 'LoginPage';
export default LoginPage;
