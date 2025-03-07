import { Camera } from 'lucide-react';
import { useState } from 'react';
import { RpButton } from '@libs/ui/raptor';

export function NxWelcome({ title }: { title: string }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className='text-center'>
      <h1 className='text-4xl font-bold text-secondary'>Welcome {title}</h1>
      <button type={'button'} className='btn btn-primary mt-4'>
        Learn more
      </button>
      <p className='text-lg text-gray-600 mt-4'>
        Get started by editing{' '}
        <code className='font-mono text-sm text-gray-800'>
          apps/admin-app/src/app/nx-welcome.tsx
        </code>
      </p>
      <RpButton
        type={'button'}
        variant={'primary'}
        size={'md'}
        loading={isLoading}
        icon={{
          element: <Camera size={18} />,
          position: 'left',
        }}
        className='w-32'
        onClick={handleClick}
      >
        Click me
      </RpButton>
    </div>
  );
}

export default NxWelcome;
