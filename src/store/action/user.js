export const addToCart = (product) => {
    return dispatch => {
        dispatch({ type: "ADD_CART", product })
    }
}


export const delCart = (id) => {
    return dispatch => {
        dispatch({ type: "DEL_CART", id })
    }
}

export const updateQuant = (id, quant) => {
    return dispatch => {
        dispatch({ type: "UPDATE_QUANT", id, quant })
    }
}