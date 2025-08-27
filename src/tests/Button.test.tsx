import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

describe('Button', () => {
  it('renders and clicks', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    fireEvent.click(screen.getByText(/click me/i));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
