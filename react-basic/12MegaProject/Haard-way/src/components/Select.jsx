import React from 'react'
import { useId } from 'react'

function Select({
    label,
    className = "",
    options,
    ...props
},ref) {
  const id = useId()
  return (
    <div className = "w-full">
    { label && <label htmlFor={id} className= "" > {label} </label>}
    <select
    className = {` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 
    border border-gray-200 w-full  ${className} `} 
    id = { id }
    ref = { ref }
    { ...props }
    >
      { options?.map((option)=>(
        <option key={option}>
          {option}
        </option>
      )) }
    </select>
    Select</div>
  )
}

export default React.forwardRef(Select) // either like input or select