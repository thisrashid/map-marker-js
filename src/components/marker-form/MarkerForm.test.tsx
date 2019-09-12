import React from 'react';
import ReactDOM from 'react-dom';
import MarkerForm from './MarkerForm';
import { cleanup } from '@testing-library/react';

const marker = {
  id: '1',
  label: 'Berlin, Germany',
  lat: 52.52000659999999,
  lng: 13.404954
};

const onClose = jest.fn(() => true);

afterEach(cleanup);
it('renders without crashing', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(<MarkerForm marker={marker} show={true} onClose={onClose} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
