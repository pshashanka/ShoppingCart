
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

export function setShowItemDetails(show = false) {
    return {
        type: 'STATE_CART_DETAILS',
        showItemDetails:show
    }
}

export function setShowPromoDetails(show = false) {
    return {
        type: 'STATE_CART_PROMO',
        showPromo:show
    }
}

export function applyPromoCode(promoCode) {
    let discount = 0
    if(promoCode === "DISCOUNT"){
        discount = (10 / 100)
    }

    return {
        type: 'STATE_CART_APPLY_PROMO',
        discount        
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