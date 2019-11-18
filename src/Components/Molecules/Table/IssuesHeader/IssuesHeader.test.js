import React from 'react';
import ReactDOM from 'react-dom';
import IssuesHeader from './';

describe("<IssuesHeader/> testing ",()=>{
	it('<IssuesHeader/> renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<IssuesHeader />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});
})
