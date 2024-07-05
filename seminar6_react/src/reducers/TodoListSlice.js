import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
    name: "todoList",
    initialState: {
        array: [],
    },
    reducers: {
        addTodo: (state, { payload: newTodoItem }) => {
            if (state.array.some(item => item.id === newTodoItem.id)) {
                return;
            }
            state.array.push(newTodoItem);
        },
        deleteTodo: (state, { payload: todoItem }) => {
            state.array.filter(item => {
                return item.id !== todoItem.id
            });
        },
    },
});

export const { addTodo, deleteTodo } = todoListSlice.actions
export default todoListSlice.reducer