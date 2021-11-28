
import { useState } from "react";
import style from "./Todo.module.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function Todo() {

    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "DEFAULT",
            status: false,
        }
    ])

    const [showCompleted, setShowCompleted] = useState(false);

    const handleTaskCreate = (title) => {
        const payload = {
            id: todos.length + 1,
            title: title,
            status: false
        }
        setTodos([...todos, payload]);
    }

    // delete
    const handleDelete = (id) => {
        setTodos(todos.filter((item) => item.id !== id));
    }

    // * toggle
    const handleToggle = (id) => {
        const updatedTodos = todos.map((item) =>
            item.id === id ? { ...item, status: !item.status } : item
        );
        setTodos(updatedTodos);
    }

    return (
        <div className={style.todo}>
            <TodoInput onTaskCreate={handleTaskCreate} />
            {
                todos.filter((item) => !item.status).map((todo) => {
                    return (
                        <TodoList
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            status={todo.status}
                            handleDelete={handleDelete}
                            handleToggle={handleToggle}
                        />
                    );
                })
            }
            <div>
                <button onClick={() => setShowCompleted(!showCompleted)} className={style.show}>
                SHOW COMPLETED TO-DOS
                </button>
            </div>
            {showCompleted &&
                todos.filter((item) => item.status).map((todo) => {
                    return (
                        <TodoList
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            status={todo.status}
                            handleDelete={handleDelete}
                            handleToggle={handleToggle}
                        />
                    );
                })
            }
        </div>
    )
}
