import React from 'react'
import './CharComponent.css'

const charComponent =(props)=>{
  return (
    <div className="charStyle" onClick={props.deleteChar}>{props.char}</div>
  )
}

export default charComponent