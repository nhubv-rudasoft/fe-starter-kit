import { render } from '@testing-library/react';
import { Spinner } from '@libs/ui/raptor';

// TODO: Add tests for the RpSpinner component
describe('Spinner', () => {
  it('should render successfully', () => {
    render(<Spinner color='black' />);
  });
});

// TODO: Test the size sm prop
describe('Spinner size prop', () => {
  it('should render successfully', () => {
    render(<Spinner size='sm' />);
  });
});

// TODO: Test the size md prop
describe('RpSpinner size prop', () => {
  it('should render successfully', () => {
    render(<Spinner size='md' />);
  });
});

// TODO: Test the size lg prop
describe('RpSpinner size prop', () => {
  it('should render successfully', () => {
    render(<Spinner size='lg' />);
  });
});

// TODO: Test the size xl prop
describe('RpSpinner size prop', () => {
  it('should render successfully', () => {
    render(<Spinner size='xl' />);
  });
});

// TODO: Test the color prop
describe('RpSpinner color prop', () => {
  it('should render successfully', () => {
    render(<Spinner color='white' />);
  });
});

// TODO: Test the className prop
describe('RpSpinner className prop', () => {
  it('should render successfully', () => {
    render(<Spinner className='test-class' />);
  });
});
