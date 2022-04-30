import { render, screen } from '@testing-library/react';
import App from './App';
import NavBar from './components/NavBar/NavBar'
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  render(<App />);
});

test('button text sent to handleClick', () => {
  render(<NavBar />)
  const button = screen.getByText("Best Stories")

  userEvent.click(button);
  expect(button).toHaveTextContent("Best Stories")
})

test('button text sent to handleClick', () => {
  render(<NavBar />)
  const button = screen.getByText("Top Stories")

  userEvent.click(button);
  expect(button).toHaveTextContent("Top Stories")
})
