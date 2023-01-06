import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Dragons from '../Dragons';
import store from '../../redux/configureStore';

describe('Dragons', () => { });
it('Testing Dragons component rendering', () => {
  const component = render(
    <Provider store={store}>
      <Dragons />
    </Provider>,

  );
  expect(component).toMatchSnapshot();
});
