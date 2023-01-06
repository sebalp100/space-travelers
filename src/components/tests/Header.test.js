import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

describe('Header', () => { });
it('Testing header component rendering', () => {
  const component = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
  expect(component).toMatchSnapshot();
});
