import React from 'react';
import ReactDOM from 'react-dom';
import Header from './';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



configure({ adapter: new Adapter() });

describe("<Header/> testing ",()=>{


	it('<Header/> Renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<Header />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});


	it('<Header/> Renders user and repo', () => {

		const wrapper = mount(<Header
			changeFilter = {()=>{}}
			changeOrder =  {()=>{}}
			user ="ciber" 
			repo = "punk"/>);
		expect(wrapper.find('h3').text()).toBe("ciber / punk");
		 wrapper.unmount();
	
	});

})
