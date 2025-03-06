export const BTN_CLASSES = {
  base: 'relative rounded-md cursor-pointer hover:opacity-80 transition-opacity focus:outline-none',
  variant: {
    default: 'bg-gray-500 text-white focus:ring-1 focus:ring-blue-500 focus:ring-offset-1',
    primary: 'bg-primary text-white focus:ring-1 focus:ring-primary focus:ring-offset-1',
    secondary: 'bg-secondary text-white focus:ring-1 focus:ring-secondary focus:ring-offset-1',
    danger: 'bg-danger text-white focus:ring-1 focus:ring-danger focus:ring-offset-1',
    warning: 'bg-warning text-white focus:ring-1 focus:ring-warning focus:ring-offset-1',
  },
  size: {
    sm: 'text-xs px-2 py-2',
    md: 'text-sm px-3 py-2.5',
    lg: 'text-base px-4 py-3',
    xl: 'text-lg px-5 py-3.5',
  },
  disabled: 'opacity-70 !cursor-not-allowed',
  loading: 'opacity-70 !cursor-not-allowed',
  icon: {
    left: 'flex-row-reverse',
    right: 'flex-row',
  },
};
