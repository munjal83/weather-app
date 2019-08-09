import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App Component Snapshot',()=>{
  test('testing app component', () => {
  let tree = create(<App />)
  expect(tree.toJSON()).toMatchSnapshot();
})
});