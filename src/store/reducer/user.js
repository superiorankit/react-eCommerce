const initialState = {
    name:"Ankit",
    wishlist:[],
    cart:[]
}

const userReducer = (state = initialState,action)=>{

    switch(action.type){

        case "ADD_CART":{

            const isAdded = state.cart.find((item)=> item.id == action.product.id)

            if(isAdded){
                state.cart.forEach((item,i)=> {
                    if(item.id == action.product.id)
                        state.cart[i].quantity = state.cart[i].quantity+1;
                })
            }
            else{
                state.cart.push({...action.product,quantity:1});
            }




            return {...state
            }
        }

        case "DEL_CART":{
            const cart = state.cart.filter((item)=> item.id !== action.id)

            return {...state,
                cart
            }


        }

        case "UPDATE_QUANT":{
            state.cart.forEach((item,i)=> {
                if(item.id == action.id)
                    state.cart[i].quantity = action.quant;
            })

            return {...state
                
            }

        }

        default : {
            return state;
        }


    }

}

export default userReducer;