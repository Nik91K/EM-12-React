import { useState } from 'react'
import './App.css'
import TextContainer from './components/textContainer/index'
import {textArray} from './fixture/textContainer'

function App() {
  return (
    <>
      {
        textArray.map((obj) => (
          <TextContainer {...obj} />
        ))
      }
    </>
  )
}

export default App
