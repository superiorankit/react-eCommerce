import { extraData } from "../../database/data";

const eData = extraData

export const fetchData = () => {
    return async dispatch => {
        const res = await fetch("https://dummyjson.com/products/search?q=shoes", {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        })

        let data = await res.json();

        data = data.products.map((data, i) => {
            return { ...data, image: eData[i + 15].image, name: eData[i + 15].name, description: eData[i + 15].description }
        })

        data = [...data, ...eData];
        data.forEach((data) => {
            data.mrp = 526;
        })

        dispatch({ type: "addData", payload: data });
    }

}

export const addSingleProduct = (id) => {
    return dispatch => {
        dispatch({ type: "ADD_SINGLE_PRODUCT", id })
    }
}