import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoriteItems: []
};

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favoriteItems.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.favoriteItems = state.favoriteItems.filter(item => item.id !== action.payload.id);
        },
        addProduct: (state, action) => {
            state.favoriteItems.push(action.payload);
        },
    }
});

export const { addFavorite, removeFavorite, addProduct } = favoriteSlice.actions;

export default favoriteSlice.reducer;