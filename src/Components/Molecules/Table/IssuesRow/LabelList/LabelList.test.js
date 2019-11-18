import React from 'react';
import ReactDOM from 'react-dom';
import LabelList from './';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { List } from 'semantic-ui-react'


configure({ adapter: new Adapter() });



describe("<LabelList/> testing ",()=>{


	it('<LabelList/> renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<LabelList items={[]}/>, div);
	  ReactDOM.unmountComponentAtNode(div);
	});


it('<LabelList/> Shows the right number of tags (items)', () => {

		const items = [
			{color:"32423", name:"por"},
			{color:"32423", name:"por"},
			{color:"32423", name:"por"}
			]

		const wrapper = mount(<LabelList items={items}/>);
		expect(wrapper.find(List.Item).children().length).toBe(items.length);
		wrapper.unmount();


		for (var i = 0; i < Math.floor(Math.random() * 10); i++) {
			
			items.push({color:"32423", name:"por"})
		}
	


		const wrapper2 = mount(<LabelList items={items}/>);
		expect(wrapper2.find(List.Item).children().length).toBe(items.length);
		wrapper2.unmount();
	
	});




})
