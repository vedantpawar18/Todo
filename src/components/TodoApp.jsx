import React, { useState } from 'react'
import Todolist from './Todolist';

const TodoApp = () => {

  const [query, setQuery] =useState("")
  const [data, setData] =useState([]);

  const handleAdd=()=>{
    const payload={
     title:query,
      id:Date.now()
    }
    setData([...data,payload])
  }
  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" value={query} 
        onChange={(e)=>setQuery(e.target.value)} 
        placeholder="Add here" />

      <button onClick={handleAdd}>Add</button>

      <div>
        {
          data.map((el)=>{
            return <div key={el.id}>
              <Todolist  title={el.title} />
            </div>
          })
        }
      </div>
    </div>
  )
}

export default TodoApp