export function cartState(state = false, action){
    switch(action.type) {
        case 'STATE_CART':
            return {
                isLoading: action.isLoading,
                isLoaded: action.isLoaded,
                isFailed: action.isFailed,
                cartData: action.cartData,                
            }
        default:
            return state
    }
}