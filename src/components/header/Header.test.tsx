import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Header from './Header';
import { act } from 'react-dom/test-utils';

afterEach(cleanup);

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

describe('<Header />', () => {

  afterEach(cleanup);

  it('should fetch location api', () => {
    let getByText: any, getByLabelText: any, wrapper: any;
    act(() => {
      wrapper = render(<Header />);
    });

    getByText = wrapper.getByText;
    getByLabelText = wrapper.getByLabelText;

    window.fetch = jest.fn().mockImplementation(() => {
      var p = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          Id: '123',
          json: function () {
            return {
              results: [{
                formatted_address: '',
                geometry: {
                  location: {
                    lat: 52.52000659999999,
                    lng: 13.404954
                  }
                }
              }]
            }
          }
        });
      });

      return p;
    });

    act(() => {
      fireEvent.click(getByText('Add Marker'));
    });
    act(() => {
      fireEvent.change(getByLabelText('Search map'), { target: { value: 'berlin' } });
    });
    act(() => {
      fireEvent.click(getByText('Save'));
    });

    expect(window.fetch).toBeCalled();
  });
});