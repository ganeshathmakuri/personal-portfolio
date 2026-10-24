import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a full stack developer profile and social links', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Athmakuri Ganesh' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Full Stack Developer' })).toBeInTheDocument();
  expect(screen.getByText('React')).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /sample portrait/i })).toHaveAttribute('src', '/sample-profile.jpg');

  ['WhatsApp', 'LinkedIn', 'GitHub', 'Instagram', 'Facebook'].forEach((network) => {
    expect(screen.getByRole('link', { name: network })).toHaveAttribute('target', '_blank');
  });
});
