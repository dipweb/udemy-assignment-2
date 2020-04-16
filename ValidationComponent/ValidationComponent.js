import React from 'react'

const validationComponent =(props)=>{
console.log(props.textLength)
  return (
    <div>
    {props.textLength>=5?<p>Text long enough</p>:<p>Input Text is too small</p>}
    </div>
  )
}

export default validationComponent