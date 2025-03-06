import { render } from '@testing-library/react';
import RpButton from './button';

describe('RpButton', () => {
  it('should render successfully', () => {
    render(<RpButton type='button'>Click me</RpButton>);
  });
});
