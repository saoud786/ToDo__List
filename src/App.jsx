import React, { useState } from 'react';
import To_do_input from './components/To_do_input';
import ToDoLisit from './components/ToDoLisit';
import './App.css';



function App() {


const [listTodo, setListToDo] = useState([])

let addList=(inputText)=>{
  if(inputText!='')
  setListToDo([...listTodo,inputText])
}

const deleteListItem=(key)=>{
  let newListTodo=[...listTodo]
  newListTodo.splice(key,1)
  setListToDo([...newListTodo])

}


  return (
    <>
<div className="main-container">
<h1>ToDo List</h1>
  <div className="center-container">

<To_do_input addList={addList}   />

  </div>
  <hr />
{listTodo.map((listItem,i)=>{
  return(  <ToDoLisit index={i} key={i} item={listItem} deleteItem={deleteListItem}/>)
  })}

</div>
    </>
  );
}

export default App;