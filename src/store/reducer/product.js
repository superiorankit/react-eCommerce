const initialState = {
    shoes: [],
    featureShoes: [],
    singleProduct: "",
    loading: true,
}

export const productReducer = (state = initialState, action) => {

    switch (action.type) {

        case "addData": {
            const shoes = action.payload;

            return {
                ...state,
                shoes: shoes,
                featureShoes: [shoes[0], shoes[1], shoes[2], shoes[3]],
                loading: false
            }
        }

        case "ADD_SINGLE_PRODUCT": {

            const product = state.shoes.find((item)=>item.id == action.id);



            return {
                ...state,
                singleProduct: product
            }
        }

        default : {
            return state
        }
    }

}