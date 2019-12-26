import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css'


const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
    const elements = todos.map((item) => {

        const { id } = item;

        return (
            <li key={item.id} className="list-group-item">
                <TodoListItem /* {...itemProps} */
                    label={item.label}
                    done={item.done}
                    important={item.important}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}
                /></li>
        )
    })

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;