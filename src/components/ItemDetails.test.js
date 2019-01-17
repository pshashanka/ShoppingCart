import React from 'react';
import { mount } from 'enzyme';
import ItemDetails from './ItemDetails';

describe('ItemDetails tests', () => {

    const mockItems =  [
        {
          "id": "111",
          "title": "OFM Essentials Racecar Style Leather Gaming Chair, (ESS-3085), White",
          "features": "Features: -Ergonomic race car style design: luxury and comfort whether used during intense gaming sessions or long workdays. -Contoured segmented padding, integrated headrest, and padded arms provide quality support hour after hour. -Upholstered in SofThread Leather and contrasting different colors mesh for a sleek look and comfortable feel. Product Type: -Gaming Chair. Dimensions: -Back tilt: 3\". Maximum Overall Height - Top to Bottom: -49\". Minimum Overall Height - Top to Bottom: -44\". Overall Width - Side to Side: -29\". Overall Depth - Front to Back: -28\". Overall Product Weight: -37 lbs.",
          "price": 99,
          "actual": "102.96",
          "pickupAvailable": true,
          "qty": 1,
          "image": "https://i5.walmartimages.com/asr/90c1aad2-a3b3-4711-a29f-7b42b25aeadf_1.e83f74dfd7486d797bd0882996d1e3a4.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF"
        }
      ]

    it('render verification', () => {
        const comp = mount(<ItemDetails items={mockItems}  />);
        expect(comp).toBeDefined()
    })
}) 