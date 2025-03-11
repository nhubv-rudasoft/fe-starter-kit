import type { Meta, StoryObj } from '@storybook/react';
import { Pencil, Trash2, Copy, Settings } from 'lucide-react';
import { DropdownMenu, DropdownItem, DropdownDivider } from './dropdown-menu';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Raptor/Components/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Basic: Story = {
  args: {
    trigger: <button className='px-4 py-2 bg-blue-500 text-white rounded-md'>Click me</button>,
    children: (
      <>
        <DropdownItem>Profile</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Logout</DropdownItem>
      </>
    ),
  },
};

export const WithIcons: Story = {
  args: {
    trigger: <button className='px-4 py-2 bg-blue-500 text-white rounded-md'>Actions</button>,
    children: (
      <>
        <DropdownItem icon={<Pencil size={16} />}>Edit</DropdownItem>
        <DropdownItem icon={<Copy size={16} />}>Duplicate</DropdownItem>
        <DropdownDivider />
        <DropdownItem icon={<Settings size={16} />}>Settings</DropdownItem>
        <DropdownItem icon={<Trash2 size={16} />} className='text-red-500'>
          Delete
        </DropdownItem>
      </>
    ),
  },
};

export const RightAligned: Story = {
  args: {
    align: 'right',
    trigger: <button className='px-4 py-2 bg-blue-500 text-white rounded-md'>Right Aligned</button>,
    children: (
      <>
        <DropdownItem>Option 1</DropdownItem>
        <DropdownItem>Option 2</DropdownItem>
        <DropdownItem>Option 3</DropdownItem>
      </>
    ),
  },
};

export const CustomWidth: Story = {
  args: {
    width: 300,
    trigger: <button className='px-4 py-2 bg-blue-500 text-white rounded-md'>Wide Menu</button>,
    children: (
      <>
        <DropdownItem>This is a wider dropdown menu</DropdownItem>
        <DropdownItem>It can fit more content</DropdownItem>
        <DropdownDivider />
        <DropdownItem>More space for text</DropdownItem>
      </>
    ),
  },
};

export const WithDisabledItems: Story = {
  args: {
    trigger: <button className='px-4 py-2 bg-blue-500 text-white rounded-md'>With Disabled</button>,
    children: (
      <>
        <DropdownItem>Enabled Option</DropdownItem>
        <DropdownItem disabled>Disabled Option</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Another Enabled Option</DropdownItem>
        <DropdownItem disabled>Another Disabled Option</DropdownItem>
      </>
    ),
  },
};

export const CustomTrigger: Story = {
  args: {
    trigger: (
      <div className='flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200'>
        <img src='https://via.placeholder.com/32' alt='User' className='w-8 h-8 rounded-full' />
        <span>John Doe</span>
      </div>
    ),
    children: (
      <>
        <DropdownItem icon={<Pencil size={16} />}>Edit Profile</DropdownItem>
        <DropdownItem icon={<Settings size={16} />}>Account Settings</DropdownItem>
        <DropdownDivider />
        <DropdownItem className='text-red-500'>Sign Out</DropdownItem>
      </>
    ),
  },
};
