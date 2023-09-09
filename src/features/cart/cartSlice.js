import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cart: [],

    /* cart: [
         {
             pizzaId: 12,
             name: 'Mediterranean',
             quantity: 2,
             unitPrice: 16,
             totalPrice: 32,
         }
     ]*/
}




const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,


    reducers: {

        addItem(state, action) {
            //payload is new item
            state.cart.push(action.payload)
        },


        deleteItem(state, action) {
            //payload is id
            state.cart = state.cart.filter(item => item.pizzaId !== action.payload)
        },


        increaseItemQuantity(state, action) {
            //payload is pizzaid
            const item = state.cart.find(item => item.pizzaId === action.payload);
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice

        },


        decreaseItemQuantity(state, action) {
            //payload is pizzaid
            const item = state.cart.find(item => item.pizzaId === action.payload);
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice


            if (item.quantity === 0) cartSlice.caseReducers.
                deleteItem(state, action)

        },


        clearCrat(state) {
            state.cart = []
        },
    }

})



//action creators
export const { addItem, deleteItem, increaseItemQuantity,
    decreaseItemQuantity, clearCrat } = cartSlice.actions;

//reducer
export default cartSlice.reducer;





//selector fn for toatl quantity
export const getToatalCartQuantity = (state) => (
    state.cart.cart.reduce((acc, curr) => acc + curr.quantity, 0)
)

//selector fn for total price
export const getTotalCartPrice = (state) => (
    state.cart.cart.reduce((acc, curr) => acc + curr.totalPrice, 0)
)


//selector fn for getting the cart
export const getCart = (state) => (
    state.cart.cart
)


//selector fn to find the quantit of individal pizza 
export const getCurrentQuantityById = (id) => (state) => (
    state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0
)