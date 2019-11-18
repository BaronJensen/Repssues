import React from 'react'
import ReactDOM from 'react-dom'
import FilterBar from './';

import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe("<FilterBar/> testing ",()=>{

	it('<FilterBar/> renders without crashing', () => {

		const div = document.createElement('div');
		ReactDOM.render(<FilterBar active="all" changeFilter={()=>{}}/>, div);
		ReactDOM.unmountComponentAtNode(div);

	});

	it('<FilterBar/> checks for right active button', () => {

		const wrapper = mount(<FilterBar active="open" changeFilter={()=>{}}/>);
		expect(wrapper.find('button').at(1).hasClass("activated")).toBe(true);
		expect(wrapper.find('button').at(0).hasClass("activated")).toBe(false);
		expect(wrapper.find('button').at(2).hasClass("activated")).toBe(false);
		wrapper.unmount();

		const wrapper2 = mount(<FilterBar active="all" changeFilter={()=>{}}/>);
		expect(wrapper2.find('button').at(1).hasClass("activated")).toBe(false);
		expect(wrapper2.find('button').at(0).hasClass("activated")).toBe(true);
		expect(wrapper2.find('button').at(2).hasClass("activated")).toBe(false);
		wrapper2.unmount();

		const wrapper3 = mount(<FilterBar active="closed" changeFilter={()=>{}}/>);
		expect(wrapper3.find('button').at(1).hasClass("activated")).toBe(false);
		expect(wrapper3.find('button').at(0).hasClass("activated")).toBe(false);
		expect(wrapper3.find('button').at(2).hasClass("activated")).toBe(true);
		wrapper3.unmount();	
	});


	it('FilterBar calls changeFilter()', () => {
	  const mockMyEventHandler = jest.fn()
	 
	  const wrapper = mount(<FilterBar active="closed" changeFilter={()=>{}}/>)
	  wrapper.setProps({ changeFilter: mockMyEventHandler })
	  wrapper.find('button').at(1).prop('onClick')()
	  expect(mockMyEventHandler).toHaveBeenCalledWith('open')
	  wrapper.unmount();


	})






})
