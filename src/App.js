import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load todos from localStorage
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (error) {
        console.error('Error loading todos:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Save todos to localStorage whenever they change
    if (isLoaded) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos, isLoaded]);

  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };

    setTodos([newTodo, ...todos]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const activeCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className="app">
      <header className="header">
        <h1>Todo App</h1>
        <p>Manage your tasks efficiently</p>
      </header>

      <form className="todo-form" onSubmit={addTodo}>
        <input
          type="text"
          className="todo-input"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="add-btn">
          Add Todo
        </button>
      </form>

      {todos.length === 0 ? (
        <div className="empty-state">
          <h3>No todos yet</h3>
          <p>Add your first todo to get started!</p>
        </div>
      ) : (
        <>
          <ul className="todo-list">
            {todos.map(todo => (
              <li
                key={todo.id}
                className={`todo-item ${todo.completed ? 'completed' : ''}`}
              >
                <input
                  type="checkbox"
                  className="todo-checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span className="todo-text">{todo.text}</span>
                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>

          <div className="stats">
            <div className="stat-item">
              <div className="stat-number">{todos.length}</div>
              <div className="stat-label">Total</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{activeCount}</div>
              <div className="stat-label">Active</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{completedCount}</div>
              <div className="stat-label">Completed</div>
            </div>
            {completedCount > 0 && (
              <button
                className="delete-btn"
                onClick={clearCompleted}
                style={{ alignSelf: 'center' }}
              >
                Clear Completed
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
