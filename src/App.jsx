import { useState } from "react"
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function TodoList({ todos }) {
  return (
    <>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>
        })}
      </ul>
    </>
  )
}


function App() {
  const [todos, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function addTodo() {
    setTodo([...todos, newTodo])
    setNewTodo("")
  }

  return (
    <div className="m-3">
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      />

      <Button
        variant="primary"
        className="ms-3"
        onClick={addTodo}>
        Add
      </Button>
      <div>
        <TodoList todos={todos} />
      </div>
    </div>
  )
}

export default App;