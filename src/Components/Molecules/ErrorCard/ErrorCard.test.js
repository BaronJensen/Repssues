import React from 'react';
import ReactDOM from 'react-dom';
import ErrorCard from './';

it('<ErrorCard/> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ErrorCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
