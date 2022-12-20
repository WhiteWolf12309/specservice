import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({ 
    name: 'calculator',
    initialState: {
        basket: [],
        totalPrice: 0 
    },
    reducers: {
        addProductItem(state, action) {
            // Adding new product item to calculator basket
            if (state.basket.length === 0) {
                state.basket.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    article: action.payload.article,
                    price: action.payload.price,
                    group: action.payload.group,
                    count: 1
                })

                

                if (action.payload.group == "service-type-1" || action.payload.group == "service-type-2") {
                    // if user added service to basket
                    state.totalPrice += parseInt(action.payload.price, 10)
                }

            } else {
                for (let i = 0; i < state.basket.length; i++) {
                    if (state.basket[i].id === action.payload.id) {
                        state.basket[i].count += 1

                        if (action.payload.group === "service-type-1" || action.payload.group === "service-type-2") {
                            state.totalPrice += parseInt(action.payload.price, 10)
                        }

                        return;
                    }
                }

                state.basket.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    article: action.payload.article,
                    price: action.payload.price,
                    group: action.payload.group,
                    count: 1
                })

                if (action.payload.group === "service-type-1" || action.payload.group === "service-type-2") {
                    state.totalPrice += parseInt(action.payload.price)
                }
            }  
        },

        removeProductItem(state, action) {
            // Removing product item from calculator basket
            for (let i = 0; i < state.basket.length; i++) {
                if (state.basket[i].id === action.payload.id) {
                    state.basket.splice(i, 1)

                    if (action.payload.group === "service-type-1" || action.payload.group === "service-type-2") {
                        state.totalPrice -= parseInt(action.payload.totalPrice)
                    }
                }
            }
        },

        addProductItemCount(state, action) {
            // Add count of product item
            for (let i = 0; i < state.basket.length; i++) {
                if (state.basket[i].id === action.payload.id) {
                    state.basket[i].count += 1
                    if (action.payload.group === "service-type-1" || action.payload.group === "service-type-2") {
                        state.totalPrice += parseInt(action.payload.price)
                    }
                }
            }   
        },

        substractProductItemCount(state, action) {
            // substract count of product item
            for (let i = 0; i < state.basket.length; i++) {
                if (state.basket[i].id === action.payload.id) {
                    if (state.basket[i].count - 1 === 0) {
                        // if count of item equals 1
                        state.basket.splice(i, 1) // removing this item, because count of this item equals 0

                        if (action.payload.group === "service-type-1" || action.payload.group === "service-type-2") {
                            state.totalPrice -= parseInt(action.payload.price)
                        }
                        
                    } else {
                        // if count of item more than 1
                        state.basket[i].count -= 1

                        if (action.payload.group === "service-type-1" || action.payload.group === "service-type-2") {
                            state.totalPrice -= parseInt(action.payload.price)
                        }
                        
                    }
                }
            } 
        },

        clearBasket(state, action) {
            state.basket = []
            state.totalPrice = 0
        },

        addService(state, action) {

            if (state.basket.length === 0) {
                state.basket.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    addition: action.payload.addition,
                    price: action.payload.price,
                    group: action.payload.group,
                    count: 1
                })

                state.totalPrice += parseInt(action.payload.price, 10) * 1000

            } else {
                for (let i = 0; i < state.basket.length; i++) {
                    if (state.basket[i].id === action.payload.id) {
                        return;
                    }
                }

                state.basket.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    addition: action.payload.addition,
                    price: action.payload.price,
                    group: action.payload.group,
                    count: 1
                })

                state.totalPrice += parseInt(action.payload.price, 10) * 1000
            }  
        },

        removeService(state, action) {
            for (let i = 0; i < state.basket.length; i++) {
                if (state.basket[i].id === action.payload.id) {
                    state.basket.splice(i, 1)
                    state.totalPrice -= parseInt(action.payload.price, 10) * 1000
                }
            }
        }

    }
})

export const { 
    addProductItem,
    removeProductItem, 
    addProductItemCount, 
    substractProductItemCount, 
    clearBasket, 
    addService, 
    removeService 
} = calculatorSlice.actions

export default calculatorSlice.reducer