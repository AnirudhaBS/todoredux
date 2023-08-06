import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './action/TodoAction';

function App() {
  const [todo, setTodo] = useState()
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  }

  return (
    <div className="App">
      <header className="App-header">
          <h2>Todo List</h2>
        <form onSubmit={handleSubmit}>
          <input className="inputdata" placeholder='Enter data'
            onChange={(e) => setTodo(e.target.value)} />
          <button className="addbutton" type='submit'>Add</button>
        </form>
        <ul className='list'>
          {
            todos && todos.map((t) => (
              <li key={t.id} className='list-item'>
                <span>{t.todo}</span>
                <button className='delete' onClick={() => removeHandler(t)}>Delete</button>
              </li>
            ))
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
