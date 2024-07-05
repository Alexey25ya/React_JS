import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "../reducers/TodoListSlice";
import favoriteListReducer from "../reducers/favoriteSlice";

export const store = configureStore({
    reducer: {
        todoList: todoListReducer,
        favorite: favoriteListReducer
    }
})