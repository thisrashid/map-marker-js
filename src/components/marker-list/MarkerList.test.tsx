import React from 'react';
import ReactDOM from 'react-dom';
import MarkerList from './MarkerList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(<MarkerList />, div);
  ReactDOM.unmountComponentAtNode(div);
});