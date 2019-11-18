import React from 'react';
import ReactDOM from 'react-dom';
import LoadingItems from './';


	it('<LoadingItems/> renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<LoadingItems />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});