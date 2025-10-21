import React from 'react'

const ToDoLisit = (props) => {
  return (
    <div className='main-class-item'>
        <li className="listItem">
            {props.item}
            <span className='icon'>  <i className="fa-solid fa-trash"  onClick={e=>{props.deleteItem(props.index)}} >      </i></span>
        </li>
    </div>
  )
}

export default ToDoLisit