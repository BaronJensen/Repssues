import React from 'react';
import ReactDOM from 'react-dom';
import Home from './';


describe("Integration Testing <Home/>",()=>{



	it('<Home/> renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<Home />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});


	//test if issues are returned

	it('fetch items from API renders without crashing', () => {

	});


	//Test if gets total




	//Test if error is displayed





})
