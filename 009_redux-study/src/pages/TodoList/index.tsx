import React from "react"
import {useState} from "react";
import {FilterStatus, Todo} from "../../store/modules/list"
import {RootState, AppDispatch} from "../../store"
import {useDispatch, useSelector} from "react-redux"

function TodoList() {
    const {items, filter} = useSelector((state: RootState) => state.list)
    const filteredTodos = items.filter((todo) => {
        if (filter === "all") return true
        return filter === 'completed' ? todo.completed : !todo.completed
    })
    return (
        <div>
            <h1>todo list</h1>
            <AddTodoForm />
            <FilterButtons />

            <ul>
                {
                    filteredTodos.map((todo: Todo) => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))
                }
            </ul>
        </div>
    )
}

import {saveTodo} from "../../store/modules/list"

function AddTodoForm() {
    const dispatch = useDispatch<AppDispatch>()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (text.trim()) {
            dispatch(saveTodo(text))
            setText('')
        }
    }
    const [text, setText] = useState("")
    return <form onSubmit={handleSubmit} className="add-form">
        <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="输入待办事项..."
        />
        <button type="submit" className="add-btn">
            添加
        </button>
    </form>
}

import {setFilter} from "../../store/modules/list"
const filters: FilterStatus[] = ['all', 'active', 'completed']
function FilterButtons() {
    const currentFilter = useSelector((state: RootState) => state.list.filter);
    const dispatch = useDispatch<AppDispatch>()

    return (
        <div className="filters">
            {filters.map(filter => (
                <button
                    key={filter}
                    className={filter === currentFilter ? 'active' : ''}
                    onClick={() => dispatch(setFilter(filter))}
                >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
            ))}
        </div>
    )
}

interface Props {
    todo: Todo
}

import {toggleTodo, deleteTodo} from "../../store/modules/list"


function TodoItem({todo}: Props) {
    const dispatch = useDispatch<AppDispatch>()
    return (
        <li className="todo-item">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <span className={todo.completed ? 'completed' : ""}>
                {todo.text}
                <small>{new Date(todo.createdAt).toLocaleString()}</small>
            </span>
            <button
                className="delete-btn"
                onClick={() => dispatch(deleteTodo(todo.id))}
            >
                ×
            </button>
        </li>
    )
}


export default TodoList