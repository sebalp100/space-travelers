import * as React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Mission from './Missions';

test('First Snapshot test', () => {
  const component = renderer
    .create(
      <Provider store={store}>
        <Mission />
        ;
      </Provider>,
    )
    .toJSON();

  expect(component).toMatchSnapshot();
});
