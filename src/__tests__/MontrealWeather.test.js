import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import MontrealWeather from '../components/MontrealWeather';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MontrealWeather />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('MontrealWeather Component Snapshot',()=>{
  test('testing montrealweather component', () => {
  let tree = create(<MontrealWeather />)
  expect(tree.toJSON()).toMatchSnapshot();
})
});