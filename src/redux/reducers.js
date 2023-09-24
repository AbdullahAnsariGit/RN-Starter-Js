import { Add_Product, Remove_Product } from "./constants";
const initialState = []
export const reducer = (state = initialState, action) => {
    switch (action?.type) {
        case Add_Product:
            return [
                ...state,
                action?.payload
            ]

        case Remove_Product:
            const finalData = state?.filter((item) => item.id != action?.id)
            return finalData
        default: return state

    }
}