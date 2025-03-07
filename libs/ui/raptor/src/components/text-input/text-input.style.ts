export const TEXT_INPUT_CLASSES = {
  base: 'flex items-center w-full rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300',
  size: {
    sm: 'text-xs px-2 py-2',
    md: 'text-sm px-3 py-2',
    lg: 'text-base px-4 py-3',
    xl: 'text-lg px-5 py-3.5',
  },
  variant: {
    default: 'text-gray-800 placeholder-gray-400',
    primary: 'text-blue-800 placeholder-blue-400',
    secondary: 'text-gray-800 placeholder-gray-400',
    success: 'text-green-800 placeholder-green-400',
    danger: 'text-red-800 placeholder-red-400',
    warning: 'text-yellow-800 placeholder-yellow-400',
  },
  disabled: 'cursor-not-allowed opacity-50 bg-gray-100',
  icon: {
    left: 'pl-2',
    right: 'pr-2',
  },
  label: {
    base: 'block text-sm font-medium text-gray-700',
    required: 'text-red-500',
  },
  helperText: 'text-sm text-gray-500',
};
