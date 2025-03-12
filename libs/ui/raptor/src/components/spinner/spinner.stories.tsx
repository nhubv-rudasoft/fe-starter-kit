import type { Meta, StoryObj } from '@storybook/react';
import { default as Spinner } from './spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Raptor/Components/Spinner',
  component: Spinner,
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
type Story = StoryObj<typeof Spinner>;

// Default spinner
export const Default: Story = {
  args: {},
  render: () => (
    <div className='flex items-center gap-4'>
      <Spinner size='md' color='black' />
    </div>
  ),
};

// Sizes
export const Small: Story = {
  args: {
    size: 'sm',
  },
  render: () => (
    <div className='flex items-center gap-4'>
      <Spinner size='sm' color='black' />
    </div>
  ),
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
  render: () => (
    <div className='flex items-center gap-4'>
      <Spinner size='md' color='black' />
    </div>
  ),
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
  render: () => (
    <div className='flex items-center gap-4'>
      <Spinner size='xl' color='black' />
    </div>
  ),
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
  render: () => (
    <div className='flex items-center gap-4'>
      <Spinner size='xl' color='black' />
    </div>
  ),
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
      <Spinner size='sm' color='white' />
      <Spinner size='md' color='white' />
      <Spinner size='lg' color='white' />
      <Spinner size='xl' color='white' />
    </div>
  ),
};

export const Black: Story = {
  args: {
    color: 'black',
  },
  render: () => (
    <div className='flex flex-col gap-8'>
      <Spinner size='sm' color='black' />
      <Spinner size='md' color='black' />
      <Spinner size='lg' color='black' />
      <Spinner size='xl' color='black' />
    </div>
  ),
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className='flex flex-col gap-8'>
      <div className='flex items-center gap-4'>
        <Spinner size='sm' color='black' />
        <Spinner size='md' color='black' />
        <Spinner size='lg' color='black' />
        <Spinner size='xl' color='black' />
      </div>
      <div className='flex items-center gap-4 bg-gray-800 p-4 rounded'>
        <Spinner size='sm' color='white' />
        <Spinner size='md' color='white' />
        <Spinner size='lg' color='white' />
        <Spinner size='xl' color='white' />
      </div>
    </div>
  ),
};
