/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';

/**
 * Verify something should render
 */
test('App should render', () => {
  render(<App />);
  
  expect(screen.getByText('Welcome, party people!')).toBeInTheDocument();
});

test('Button should render', () => {
  render(<App />);
  expect(screen.getByText('Current theme: light')).toBeInTheDocument();
});


test('theme button should update button text', () => {
  render(<App />);
  const button = screen.getByText('Current theme: light');
  fireEvent.click(button);
  expect(button).toHaveTextContent('Current theme: dark');
});

// BONUS
// hint: there is a `.toHaveStyle` method.
// e.g.: expect(element).toHaveStyle('color: #FFF');
test('theme button should toggle styles', () => {
  render(<App />);
  const button = screen.getByText('Current theme: light');
  fireEvent.click(button);
  expect(document.body).toHaveStyle('background-color: #333');
  fireEvent.click(button);
  expect(document.body).toHaveStyle('background-color: #FFF');
});


test('hidden button should toggle hidden content', () => {
  render(<App />);
  const button = screen.getByText('Show hidden content');
  fireEvent.click(button);
  expect(screen.getByText('this content is hidden by default')).toBeInTheDocument();
  fireEvent.click(button);
  expect(screen.queryByText('this content is hidden by default')).not.toBeInTheDocument();
});


test('check for the presence of a specific element', () => {
  render(<App />);
  expect(screen.getByText('Click the button to toggle the theme')).toBeInTheDocument();
});

test('check for the class name .container on the surrounding div', () => {
  render(<App />);
  expect(screen.getByText('Welcome, party people!').closest('div')).toHaveClass('container');
});

test('after clicking the toggle hidden content button, check for the button text to update to "hide" instead of "show"', () => {
  render(<App />);
  const button = screen.getByText('Show hidden content');
  fireEvent.click(button);
  expect(button).toHaveTextContent('Hide hidden content');
});


test('theme button should toggle styles', () => {
  // TODO: change the expect to actually test something 😉
  expect('no test written').toBe('tested');
});


test('hidden button should toggle hidden content', () => {
  // TODO: change the expect to actually test something 😉
  expect('no test written').toBe('tested');
});



