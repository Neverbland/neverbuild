// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import MemoryRouter from 'react-router-dom/MemoryRouter';
// Components
import App from './App';

describe('<App />', () => {
  test('renders without exploding', () => {
    ReactDOM.render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
      document.createElement('div')
    );
  });
});
