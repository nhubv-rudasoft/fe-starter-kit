import UserProfileForm from '../components/UserProfileForm';

const UserProfilePage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <UserProfileForm />
    </div>
  );
};

UserProfilePage.displayName = 'UserProfilePage';
export default UserProfilePage;
