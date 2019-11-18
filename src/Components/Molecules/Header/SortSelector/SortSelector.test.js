import React from 'react';
import ReactDOM from 'react-dom';
import SortSelector from './';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Dropdown } from 'semantic-ui-react'


configure({ adapter: new Adapter() });

describe("<SortSelector/> testing ",()=>{

	it('<SortSelector/> renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<SortSelector />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});


	it('SortSelector calls changeOrder()', () => {
	  const mockMyEventHandler = jest.fn()
	 
	  const wrapper = shallow(<SortSelector direction="asc" sort="updated" changeOrder={()=>{}}/>)
	  wrapper.setProps({ changeOrder: mockMyEventHandler })
	  wrapper.find(Dropdown).prop('onChange')("", { value: ['created-asc'] })
	  expect(mockMyEventHandler).toHaveBeenCalledWith('created','asc')
	  wrapper.unmount();



	  const wrapper2 = shallow(<SortSelector direction="desc" sort="updated" changeOrder={()=>{}}/>)
	  wrapper2.setProps({ changeOrder: mockMyEventHandler })
	  wrapper2.find(Dropdown).prop('onChange')("", { value: ['updated-desc'] })
	  expect(mockMyEventHandler).toHaveBeenCalledWith('updated','desc')
	  wrapper2.unmount();




	})

})
