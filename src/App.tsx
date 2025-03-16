import { useState } from 'react'
import './App.css'
import TextContainer from './components/textContainer/index'
import ReactContainer from './components/reactContainer/index'
import { reactText }  from './fixture/textReactContainer'
import { textArray } from './fixture/textContainer'

function App() {
  return (
    <>
      {
        textArray.map((obj) => (
          <TextContainer {...obj} />
        ))
      }
      {
        reactText.map((obj) =>{
          return <ReactContainer {...obj} /> 
        })
      }
    </>
  )
}

export default App
