import { render } from '@testing-library/react';
import { Button } from './button';

describe('RpButton', () => {
  it('should render successfully', () => {
    render(<Button type='button'>Click me</Button>);
  });
});
