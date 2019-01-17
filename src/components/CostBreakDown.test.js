import React from 'react';
import { mount } from 'enzyme';
import CostBreakDown from './CostBreakDown';

describe('CostBreakDown tests', () => {
    it('render verification', () => {
        const comp = mount(<CostBreakDown subtotal={102.96} pickupSavings={3.85} taxesFees={8.92} pickupZip={"94085"}  />);
        expect(comp).toBeDefined()
    })
}) 