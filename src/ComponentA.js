import React, { useContext, useState } from 'react'
import {AppContext} from './App'
function ComponentA() {
    const {input ,setInput} = useContext(AppContext)
    const [placeholder ,setP] = useState('input something ')
  return (
    <div>
        <input 
        placeholder={placeholder}
        onChange={(e)=>setInput(e.target.value)}
        value={input}>
        </input>
    </div>
  )
}

export default ComponentA