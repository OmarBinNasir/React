import React from 'react'
import button from './button'


import createArray from "../logic/randomValues" 


array = createArray(4)

gridHtml = ""


function grid() {
  return (
    <div>
       { 
        array.map((key) =>(
            <button id={key} info = {key}/>
        ))
       }
    </div>
  )
}

export default grid