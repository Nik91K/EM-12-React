import { useState } from 'react'
import './App.css'
import TextContainer from './components/textContainer/index'
import ReactContainer from './components/reactContainer/index'
import { reactText }  from './fixture/textReactContainer'
import { textArray } from './fixture/textContainer'

import Comment from './components/commentContainer/index'
import { CommentContainer } from './fixture/commentContainer'

import { BootstrapContainer } from './fixture/bootstrapContainer'
import BootstrapContainerPage from './components/bootstrapContainer'

function App() {
  return (
    <>
      {
        CommentContainer.map((component) => (
          <Comment key={component.id} {...component} />
        ))
      }
      {
        BootstrapContainer.map((obj) => (
          <BootstrapContainerPage {...obj} > 
          </BootstrapContainerPage>
        ))
      }
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
