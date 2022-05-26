import React from 'react'
import TodoApp from './TodoApp'
import Todoitem from './Todoitem'

const Todolist = ({title}) => {
  return (
    <div>
        <Todoitem title={title} />
    </div>
  )
}

export default Todolist