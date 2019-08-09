import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import PhotoList from '../components/PhotoList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PhotoList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('PhotoList Component Snapshot',()=>{
  test('testing photolist component', () => {
  let tree = create(<PhotoList />)
  expect(tree.toJSON()).toMatchSnapshot();
})
});