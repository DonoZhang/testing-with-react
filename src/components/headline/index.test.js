import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import "../../setupTests";

import { findByTestAttr } from '../../Utilities/index'

const setUp = (props={})=>{
    const component = shallow(<Headline {...props} />);
    return component;
};

describe('Headline Component', ()=>{

    describe('Have props', ()=>{
        let wrapper;
        beforeEach(()=>{
            const props = {
                header: 'Test Header',
                description: 'Test Description'
            };
            wrapper = setUp(props);
        });

        it('Should render without errors', ()=>{
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a H1', ()=>{
            const h1 = findByTestAttr(wrapper, 'header');
            expect(h1.length).toBe(1);
        });

        it('Should render a Description', ()=>{
            const description = findByTestAttr(wrapper, 'description');
            expect(description.length).toBe(1);
        })

    });

    describe('Have NO props', ()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setUp();
        });

        it('Should not render', ()=>{
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        });
    });

});