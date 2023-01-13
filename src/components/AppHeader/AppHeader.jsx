import React from 'react'
import './AppHeader.css'


const TodoHeader = ({doneCount, allCount}) => {
  return (
    <div className='header '>
      <h1>Todo List</h1>
      <h2>{allCount} more to do, done {doneCount}</h2>
    </div>
  )
}

export default TodoHeader