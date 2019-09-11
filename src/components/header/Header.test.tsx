import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import Header from './Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders dialog on click of button', () => {
  const { getByText } = render(<Header />);
  expect(getByText('Add Marker')).toBeInTheDocument();

  expect(document.querySelectorAll('form').length).toBe(0);

  fireEvent.click(getByText(/Add Marker/));
  expect(document.querySelectorAll('form').length).toBe(1);
});