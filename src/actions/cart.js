
import {API} from '../lib';

export function cartState(isLoading = false, isLoaded=false, isFailed=false, cartData= []) {
    return {
        type: 'STATE_CART',
        isLoading,
        isLoaded,
        isFailed,
        cartData
    }
}

export function fetchCart() {
    const url = `/cart.json`
    return dispatch => {
        dispatch(cartState(true))
        API.get(url)
        .then(r => {
            dispatch(cartState(false, true, false, r.data))
        }).catch(err => {
            dispatch(cartState(false, false, true))
        })
    }
}