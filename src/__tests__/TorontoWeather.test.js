import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import TorontoWeather from '../components/TorontoWeather';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TorontoWeather />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('TorontoWeather Component Snapshot',()=>{
  test('testing torontoweather component', () => {
  let tree = create(<TorontoWeather />)
  expect(tree.toJSON()).toMatchSnapshot();
})
});