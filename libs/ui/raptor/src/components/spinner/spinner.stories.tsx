import type { Meta, StoryObj } from '@storybook/react';
import RpSpinner from './spinner';

const meta: Meta<typeof RpSpinner> = {
  title: 'Raptor/Components/Spinner',
  component: RpSpinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'The size of the spinner',
    },
    color: {
      control: 'select',
      options: ['white', 'black'],
      description: 'The color of the spinner',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RpSpinner>;

// Default spinner
export const Default: Story = {
  args: {},
  render: () => <RpSpinner />,
};

// Sizes
export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
  render: () => <RpSpinner size='md' />,
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
  render: () => <RpSpinner size='lg' />,
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
  render: () => <RpSpinner size='xl' color='black' />,
};

// Colors
export const White: Story = {
  args: {
    color: 'white',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: () => (
    <div className='flex flex-col gap-8'>
      <RpSpinner size='sm' color='white' />
      <RpSpinner size='md' color='white' />
      <RpSpinner size='lg' color='white' />
      <RpSpinner size='xl' color='white' />
    </div>
  ),
};

export const Black: Story = {
  args: {
    color: 'black',
  },
  render: () => (
    <div className='flex flex-col gap-8'>
      <RpSpinner size='sm' color='black' />
      <RpSpinner size='md' color='black' />
      <RpSpinner size='lg' color='black' />
      <RpSpinner size='xl' color='black' />
    </div>
  ),
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className='flex flex-col gap-8'>
      <div className='flex items-center gap-4'>
        <RpSpinner size='sm' color='black' />
        <RpSpinner size='md' color='black' />
        <RpSpinner size='lg' color='black' />
        <RpSpinner size='xl' color='black' />
      </div>
      <div className='flex items-center gap-4 bg-gray-800 p-4 rounded'>
        <RpSpinner size='sm' color='white' />
        <RpSpinner size='md' color='white' />
        <RpSpinner size='lg' color='white' />
        <RpSpinner size='xl' color='white' />
      </div>
    </div>
  ),
};
