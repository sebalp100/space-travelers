import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Profile from './Profile';
import store from '../redux/configureStore';

describe('Profile', () => { });
it('Testing Profile component rendering', () => {
  const component = render(
    <Provider store={store}>
      <Profile />
    </Provider>,

  );
  expect(component).toMatchSnapshot();
});
