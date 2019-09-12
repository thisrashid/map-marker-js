import React from 'react';
import ReactDOM from 'react-dom';
import MarkerCard from './MarkerCard';
import { render, fireEvent, cleanup } from '@testing-library/react';

const marker = {
  id: '1',
  label: 'Berlin, Germany',
  lat: 52.52000659999999,
  lng: 13.404954
};

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(<MarkerCard marker={marker} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders dialog on click of button', () => {
  const { getByText } = render(<MarkerCard  marker={marker} />);
  expect(getByText('Edit')).toBeInTheDocument();

  expect(document.querySelectorAll('form').length).toBe(0);

  fireEvent.click(getByText(/Edit/));
  expect(document.querySelectorAll('form').length).toBe(1);
});

it('delete the marker', () => {
  const { getByText } = render(<MarkerCard  marker={marker} />);
  expect(getByText('Delete')).toBeInTheDocument();
  window.confirm = jest.fn(() => true);

  fireEvent.click(getByText(/Delete/));
  expect(window.confirm).toBeCalled();
});