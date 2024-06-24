import { configureStore } from "@reduxjs/toolkit";


const reduser = (state = 'light', action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return state === 'light' ? 'dark' : 'light';
        default:
            return state;
    }
};

const storeToggle = configureStore({
    reducer: reduser,
});

export default storeToggle;