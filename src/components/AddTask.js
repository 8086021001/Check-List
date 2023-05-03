import React, { useState } from 'react'

function AddTask({handlAddTask}) {
    let [text, setText] = useState('')

  return (
    <div>
        <input 
        type='text' 
        placeholder='Add list' value={text}
        onChange={(e)=>{setText(e.target.value)}}
        style={{
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '10px',
            marginRight: '10px',
            width: '60%',
            fontSize: '16px',
          }}
        />
        <button 
        onClick={
            ()=>{setText('');
             handlAddTask(text);
             }}
             style={{
                backgroundColor: 'blue',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer',
              }}
             
             >Add
        </button>
    </div>
  )
}

export default AddTask