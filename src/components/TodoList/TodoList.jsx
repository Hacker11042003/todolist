import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'
import './TodoList.css'

const TodoList = (props) => {
  if(props.todoData.length===0){
    return <h3 style={{textAlign:'center',margin:'2rem', color:'red'}}>No tasks</h3>
  }
  return (
    <div className='list'>
      <ul>
        {
          props.todoData.map(el=>{
            return <li key={el.id}>
              <TodoListItem {...el}
              //  onDelete = {onDelete}
              //  onComplete = {onCompleted}
              {...props}
               />
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default TodoList