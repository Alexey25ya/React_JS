import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
function TodoList() {
    //состояние для хранения списка дел
    const [todos, setTodos] = useState([]);
    //Сщстщяние для хранения текущего ввода в текстовом поле
    const [currentTodo, setCurrentTodo] = useState("");
    //Обработчик добавления нового дела в список
    const addTodo = (event) => {
        event.preventDefault();//Предотвращаем перезагрузку формы
        if (!currentTodo.trim()) return;//игнорируем пустые строки
        setTodos([...todos, currentTodo]);//Добавляем текущее дело в список
        setCurrentTodo('');//Очищаем текстовое поле
    };

    //Обработчик измененения текстового поля
    const handleInputChange = (event) => {
        setCurrentTodo(event.target.value);
    }
    const deleteItem = (i) => {
        const updatedItems = todos.filter((todo) => todos[i] !== todo);
        setTodos(updatedItems);
    };

    return (
        <Box>
            <form onSubmit={addTodo}>
                <TextField type="text"
                    value={currentTodo}
                    onChange={handleInputChange}
                />
                <Button type="submit" variant="contained">Добавить</Button>
            </form>
            <div>{todos.map((todo, i) => (
                <Card key={i}>
                    {todo}
                    <Button onClick={() => { deleteItem(i) }}>удалить</Button>
                </Card>//используем индекс как ключ
            ))}
            </div>
        </Box>
    );
}

export default TodoList;