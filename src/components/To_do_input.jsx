import React, { useState } from 'react'
import './ToDoInput.css';



const To_do_input = (props) => {
 const [inputText, setInputText] = useState('')

const handlePress=(e)=>{
if(e.keyCode==13){
  props.addList(inputText)
  setInputText("")
}
}

  return (
    <div className='main-input-box'>
      <input 
      type="text" 
      className="input_box_Todo" 
      placeholder='Enter your todo'
      value={inputText}
      onChange={e=>{
        setInputText(e.target.value)

      }}
      onKeyDown={handlePress}
      />


      <button className="add_button" onClick={()=>{ props.addList(inputText) , setInputText("") }}  >+</button>
      
    </div>
  )
}

export default To_do_input