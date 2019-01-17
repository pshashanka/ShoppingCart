import * as actions from './cart.js';

describe('cart actions', () => {

    it('should return isloading true', () => {
        const expectedAction = {
            type: 'STATE_CART',
            isLoading: true,
            isLoaded: false,
            isFailed: false,
            cartData:[]
          };        
        expect(actions.cartState(true)).toEqual(expectedAction)
    })

    it('should return showItemDetails true', () => {
        const expectedAction = {
            type: 'STATE_CART_DETAILS',
            showItemDetails:true
          };        
        expect(actions.setShowItemDetails(true)).toEqual(expectedAction)
    })    
})