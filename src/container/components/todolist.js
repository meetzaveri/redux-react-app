import Todo from './todo';
import React from 'react';

const Todolist = ({
    todos,
    onTodoClick
}) => (
    <ul>
        { todos.map(todo => 
        <Todo key={todo.id}
        {...todo}
        onClick ={() => {onTodoClick(todo.id)}}
        />) }
    </ul>
)

export default Todolist;