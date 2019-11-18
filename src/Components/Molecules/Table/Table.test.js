import React from 'react';
import ReactDOM from 'react-dom';
import Table from './';
import IssuesRow from "./IssuesRow";
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



configure({ adapter: new Adapter() });


 
describe("<Table/> Testing",()=>{


	it('<Table/> renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<Table issues={[]} />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});


	
it('<Table/> Shows the right number of issues ', () => {

	const items = []
	
	for (var i = 0; i < Math.floor(Math.random() * 50); i++) {
		
		items.push( {created_at: "string",
		  updated_at: "string",
		  number: "string" + i,
		  state: "string",
		  html_url: "string",
		  title: "string"})
	}
	
		const wrapper = mount(<Table issues={items} loading={false}/>);
		expect(wrapper.find(IssuesRow).length).toBe(items.length);
		wrapper.unmount();
	
	});


})
