import React, { useContext } from 'react'
import { AppContext } from './App'

function ComponentB() {
    const state = useContext(AppContext)
  return (
    <div>{state.input}</div>
  )
}

export default ComponentB