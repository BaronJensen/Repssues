import React from 'react';
import ReactDOM from 'react-dom';
import SortSelector from './';


describe("<SortSelector/> testing ",()=>{


	it('<SortSelector/> renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<SortSelector />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});


	it('Change tags when click', () => {


	});

})
