import { Add_Product, Remove_Product } from "./constants";


export const addProduct = (item) => {
    return {
        type: Add_Product,
        payload: item
    }
}

export const removeProduct = (id) => {
    return {
        type: Remove_Product,
        id: id
    }
}