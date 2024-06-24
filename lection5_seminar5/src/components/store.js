import { configureStore } from "@reduxjs/toolkit";

const reduser = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;


        default:
            return state;
    }
};

const store = configureStore({
    reducer: reduser,
});

export default store;