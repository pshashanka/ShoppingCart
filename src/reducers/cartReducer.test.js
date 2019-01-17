import * as reducers from './cartReducer';

describe('cart reducers', () => {
  it('should execute cart reducer for State Cart', () => {
    const action = {
        type: 'STATE_CART',
        isLoading:true,
        isLoaded:false,
        isFailed:false,
        cartData:[]
    };
    const expectedState = {
        isLoading:true,
        isLoaded:false,
        isFailed:false,
        cartData:[]
    }
    expect(reducers.cartState(true, action)).toEqual(expectedState);
  });

  it('should execute cart reducer for Apply Promo Details', () => {
    const action = {
        type: 'STATE_CART_APPLY_PROMO',
        discount: 0.1
    };
    
    expect(reducers.cartState(true, action).discount).toEqual(action.discount);
  });

});
