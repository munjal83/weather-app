import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import Contact from '../components/Contact';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Contact />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Contact Component Snapshot', () => { 
  test('testing contact component', () => {
  let tree = create(<Contact />)
  expect(tree.toJSON()).toMatchSnapshot();
})
});

