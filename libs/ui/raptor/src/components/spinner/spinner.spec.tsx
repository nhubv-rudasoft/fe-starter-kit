import { render } from '@testing-library/react';
import { RpSpinner } from '@libs/ui/raptor';

// TODO: Add tests for the RpSpinner component
describe('RpSpinner', () => {
  it('should render successfully', () => {
    render(<RpSpinner />);
  });
});

// TODO: Test the size sm prop
describe('RpSpinner size prop', () => {
  it('should render successfully', () => {
    render(<RpSpinner size='sm' />);
  });
});

// TODO: Test the size md prop
describe('RpSpinner size prop', () => {
  it('should render successfully', () => {
    render(<RpSpinner size='md' />);
  });
});

// TODO: Test the size lg prop
describe('RpSpinner size prop', () => {
  it('should render successfully', () => {
    render(<RpSpinner size='lg' />);
  });
});

// TODO: Test the size xl prop
describe('RpSpinner size prop', () => {
  it('should render successfully', () => {
    render(<RpSpinner size='xl' />);
  });
});

// TODO: Test the color prop
describe('RpSpinner color prop', () => {
  it('should render successfully', () => {
    render(<RpSpinner color='white' />);
  });
});

// TODO: Test the className prop
describe('RpSpinner className prop', () => {
  it('should render successfully', () => {
    render(<RpSpinner className='test-class' />);
  });
});
