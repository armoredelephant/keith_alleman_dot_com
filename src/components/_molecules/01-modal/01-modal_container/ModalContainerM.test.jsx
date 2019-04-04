import React, { useState } from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';

import ModalContainerM from './ModalContainerM.jsx';
import BackdropA from '../../../_atoms/03-backdrop/BackdropA.jsx';

describe('ModalContainerM', () => {
    it('renders', () => {
        const wrapper = shallow(<ModalContainerM />);
        expect(wrapper).toBeTruthy();
    });

    it('renders correctly snapshot', () => {
        const output = shallow(<ModalContainerM />);
        expect(shallowToJson(output)).toMatchSnapshot();
    });

    it('should handle the click event', () => {
        let activeModal = false;
        window.alert = jest.fn();
        const wrapper = shallow(<ModalContainerM {...props} activeModal='false' 
            handleModal={() => { return activeModal = !activeModal }} />);
        wrapper.find(BackdropA).simulate('click', { target: { BackdropA } });
        expect(window.alert).toHaveBeenCalledWith('clicked');
    });
});
