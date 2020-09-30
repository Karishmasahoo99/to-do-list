import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './todo';
import './App.css';

function App(){
  const [todos,setTodos]=useState(['TAke dogs for a walk','Take the rubbish out.',' I love to go to party']);
  const[input,setInput]=useState('');

  const addTodo=(event)=>{
    event.preventDefault();
    console.log(event);
    setTodos([...todos,input]);
    setInput('');
    console.log(todos);
  }
  return (
     <div className="App">
        <h1>Hii {1+1}!!!</h1>
        <form>
        <FormControl>
          <InputLabel> Write a todo</InputLabel>
          <Input value={input} onChange={event=> setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
        </form>

        <ul>
          {todos.map(todo=>
            <Todo text={todo}/>
          )}
        </ul>
     </div>
  )
}

export default App;
