import React from 'react';
import ReactDOM from 'react-dom';
import IssuesRow from './';


describe("<IssuesRow/> testing ",()=>{


	it('<IssuesRow/> renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<IssuesRow issue={{created_at:"c", updated_at:"dd"}}/>, div);
	  ReactDOM.unmountComponentAtNode(div);
	});

})
