import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import PhotoGallery from '../components/PhotoGallery';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PhotoGallery />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('PhotoGallery Component Snapshot',()=>{
  test('testing photogallery component', () => {
  let tree = create(<PhotoGallery />)
  expect(tree.toJSON()).toMatchSnapshot();
})
});