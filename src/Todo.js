import React from 'react';
import './Css/todo.css';

function App() {
  const [todos, setTodos] = React.useState([])
  const [todo, setTodo] = React.useState(" ")

  function handleSubmit(e){
    e.preventDefault() //by default forms will refresh the page so to prevent that

    const newTodo = { 
      id: new Date().getTime(),//used to get unique value new date obj from get time func
      text: todo,
    }

    setTodos([...todos].concat(newTodo)) //spread operator to clone todos and add one by on in array
    setTodo("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos); //filter keeps the true value items in array and rert delete
  }

  return (
    <div className="App">
      <div className="container">
            <h1 className="heading">To-Do List</h1> 
            <form onSubmit={handleSubmit}>
            <div id="newtask">
                <input type="text" onChange={(e)=> setTodo(e.target.value)} value={todo} placeholder="Add a new task.."/> 
                <button type="submit" id="push" >Add</button>
            </div>
            </form>
            <div className="container1">
              <div id="tasks">
                {todos.map((todo)=> 
                <div className="container2">
                  <div key={todo.id}>
                    <div id="delete">{todo.text}</div>
                    
                      <button className="delete btn btn-primary btn-lg d-block my-5 mx-auto" onClick={() => deleteTodo(todo.id)}>
                        Delete
                      </button>
                    
                  </div>
                </div>)
                }
              </div>
            </div>
    
            
      </div>
    </div>
  );
}

export default App;

/* line13 e is an event object. target is simply be the input and value denotes the value of the input
map()_goes through each element in js and returns the values*/
