import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

test('render a button with text', () => {
  render(<Button label="Click me" />);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});