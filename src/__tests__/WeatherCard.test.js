import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import WeatherCard from '../components/WeatherCard';

const data = {city: ''}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherCard data={data}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('WeatherCard Component Snapshot',()=>{
  test('testing weathercard component', () => {
  let tree = create(<WeatherCard data={data}/>)
  expect(tree.toJSON()).toMatchSnapshot();
})
});