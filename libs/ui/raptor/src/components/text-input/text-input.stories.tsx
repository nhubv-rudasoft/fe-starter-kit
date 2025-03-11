import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Mail, Eye, EyeOff, Search, AlertCircle, CheckCircle } from 'lucide-react';
import { Input } from './text-input';

const meta: Meta<typeof Input> = {
  title: 'Raptor/Components/TextInput',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'filled', 'ghost', 'underline'],
      description: 'The visual style of the input',
      defaultValue: 'outline',
    },
    inputSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the input',
      defaultValue: 'md',
    },
    leftIcon: {
      control: 'boolean',
      description: 'Whether to show an icon on the left side',
    },
    rightIcon: {
      control: 'boolean',
      description: 'Whether to show an icon on the right side',
    },
    error: {
      control: 'text',
      description: 'Error message to display below the input',
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display below the input',
    },
    isError: {
      control: 'boolean',
      description: 'Whether the input is in an error state',
    },
    isSuccess: {
      control: 'boolean',
      description: 'Whether the input is in a success state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// Base input story
export const Default: Story = {
  args: {
    placeholder: 'Enter text here',
    variant: 'outline',
    inputSize: 'md',
  },
};

// Variant stories
export const Outline: Story = {
  args: {
    placeholder: 'Outline variant',
    variant: 'outline',
  },
};

export const Filled: Story = {
  args: {
    placeholder: 'Filled variant',
    variant: 'filled',
  },
};

export const Ghost: Story = {
  args: {
    placeholder: 'Ghost variant',
    variant: 'ghost',
  },
};

export const Underline: Story = {
  args: {
    placeholder: 'Underline variant',
    variant: 'underline',
  },
};

// Size stories
export const Small: Story = {
  args: {
    placeholder: 'Small input',
    inputSize: 'sm',
  },
};

export const Medium: Story = {
  args: {
    placeholder: 'Medium input',
    inputSize: 'md',
  },
};

export const Large: Story = {
  args: {
    placeholder: 'Large input',
    inputSize: 'lg',
  },
};

// Icon stories
export const WithLeftIcon: Story = {
  args: {
    placeholder: 'Search...',
    leftIcon: <Search className='h-4 w-4' />,
  },
};

export const WithRightIcon: Story = {
  args: {
    placeholder: 'Enter email',
    rightIcon: <Mail className='h-4 w-4' />,
  },
};

export const WithBothIcons: Story = {
  args: {
    placeholder: 'Search emails',
    leftIcon: <Search className='h-4 w-4' />,
    rightIcon: <Mail className='h-4 w-4' />,
  },
};

// State stories
export const WithHelperText: Story = {
  args: {
    placeholder: 'Enter username',
    helperText: 'Your username should be unique',
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Enter email',
    error: 'Please enter a valid email address',
    isError: true,
  },
};

export const WithErrorIcon: Story = {
  args: {
    placeholder: 'Enter email',
    error: 'Please enter a valid email address',
    isError: true,
    rightIcon: <AlertCircle className='h-4 w-4 text-red-500' />,
  },
};

export const Success: Story = {
  args: {
    placeholder: 'Enter email',
    value: 'user@example.com',
    isSuccess: true,
    rightIcon: <CheckCircle className='h-4 w-4 text-green-500' />,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'This input is disabled',
    disabled: true,
  },
};

// Special input types
export const Password: Story = {
  render: function PasswordInput() {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <Input
        type={showPassword ? 'text' : 'password'}
        placeholder='Enter password'
        rightIcon={
          showPassword ? (
            <Eye className='h-4 w-4 cursor-pointer' onClick={() => setShowPassword(false)} />
          ) : (
            <EyeOff className='h-4 w-4 cursor-pointer' onClick={() => setShowPassword(true)} />
          )
        }
      />
    );
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className='flex flex-col gap-4 w-80'>
      <Input variant='outline' placeholder='Outline variant' />
      <Input variant='filled' placeholder='Filled variant' />
      <Input variant='ghost' placeholder='Ghost variant' />
      <Input variant='underline' placeholder='Underline variant' />
    </div>
  ),
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div className='flex flex-col gap-4 w-80'>
      <Input inputSize='sm' placeholder='Small input' />
      <Input inputSize='md' placeholder='Medium input' />
      <Input inputSize='lg' placeholder='Large input' />
    </div>
  ),
};

// All states showcase
export const AllStates: Story = {
  render: () => (
    <div className='flex flex-col gap-4 w-80'>
      <Input placeholder='Normal input' />
      <Input placeholder='Disabled input' disabled />
      <Input placeholder='Error input' isError helperText='This field has an error' />
      <Input placeholder='Success input' isSuccess value='Correct value' />
    </div>
  ),
};

// Form field example
export const FormFieldExample: Story = {
  render: () => (
    <div className='flex flex-col gap-6 w-80'>
      <div>
        <label htmlFor='username' className='block text-sm font-medium mb-1'>
          Username
        </label>
        <Input id='username' placeholder='Enter username' />
      </div>

      <div>
        <label htmlFor='email' className='block text-sm font-medium mb-1'>
          Email <span className='text-red-500'>*</span>
        </label>
        <Input
          id='email'
          type='email'
          placeholder='Enter email'
          leftIcon={<Mail className='h-4 w-4' />}
          required
        />
        <p className='text-xs text-muted-foreground mt-1'>
          We'll never share your email with anyone else.
        </p>
      </div>

      <div>
        <label htmlFor='password' className='block text-sm font-medium mb-1'>
          Password <span className='text-red-500'>*</span>
        </label>
        <Input
          id='password'
          type='password'
          placeholder='Enter password'
          rightIcon={<EyeOff className='h-4 w-4' />}
          required
        />
      </div>
    </div>
  ),
};
