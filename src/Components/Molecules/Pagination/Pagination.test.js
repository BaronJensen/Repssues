import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from './';


describe("<Pagination/> testing",()=>{



	it('<Pagination/> renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<Pagination />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});






})
