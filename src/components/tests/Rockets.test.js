import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from '../Rockets';
import store from '../../redux/configureStore';

describe('Rockets', () => { });
it('Testing Rockets component rendering', () => {
  const component = render(
    <Provider store={store}>
      <Rockets />
    </Provider>,

  );
  expect(component).toMatchSnapshot();
});
