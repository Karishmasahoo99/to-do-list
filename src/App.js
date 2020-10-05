import React, { useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './todo';
import './App.css';
import db from './firebase'

function App(){
  const [todos,setTodos]=useState(['TAke dogs for a walk','Take the rubbish out.',' I love to go to party']);
  const[input,setInput]=useState('');

  //when app loads we need to connect to the database and fetch new todos
  useEffect(()=>{
    //this code here ... fires when the app.js loads
    db.collection('Todo').onSnapshot(snapshot=>{
      console.log(snapshot.docs.map(doc=> doc.data()));
      setTodos(snapshot.docs.map(doc=> doc.data().value))
    })
  }, []);

  const addTodo=(event)=>{
    event.preventDefault();

    db.collection('Todo').add({
      value:input
    })
    
    setTodos([...todos,input]);
    setInput('');
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
