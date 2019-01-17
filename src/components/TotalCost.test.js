import React from 'react';
import { mount } from 'enzyme';
import PromoDetails from './PromoDetails';

describe('TotalCost tests', () => {

   
    it('render verification', () => {
        const comp = mount(<PromoDetails  />);
        expect(comp).toBeDefined()
        comp.setState({promoCode: "DISCOUNT"})
        const instance = comp.instance();
        instance.handleSubmit();
        expect(comp).toBeDefined()
    })
}) 