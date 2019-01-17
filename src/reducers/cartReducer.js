export function cartState(state = false, action){
    switch(action.type) {
        case 'STATE_CART':
            return {
                isLoading: action.isLoading,
                isLoaded: action.isLoaded,
                isFailed: action.isFailed,
                cartData: action.cartData,                
            }

        case 'STATE_CART_DETAILS' : 
              const newState = {...state}
              newState.showItemDetails = action.showItemDetails 
             return  newState
        case 'STATE_CART_PROMO' : 
             const newState1 = {...state}
             newState1.showPromoDetails = action.showPromo 
             return  newState1
        case 'STATE_CART_APPLY_PROMO' :
            const newState2 = {...state}
            newState2.discount = action.discount
            return  newState2          
        default:
            return state
    }
}