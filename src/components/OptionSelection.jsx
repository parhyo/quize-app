import React from 'react'
import '../App.css';

function OptionSelection({arrayItem,selectOption}) {
  return (
    <div>
      <h1 className='heading'>React Ai App</h1>
      <div  className='grid_main'>
        {arrayItem.map((item)=>{
            return <div className='grid_child' onClick={()=>selectOption(item.option)}>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
            </div>
        })}
      </div>
    </div>
  )
}

export default OptionSelection;