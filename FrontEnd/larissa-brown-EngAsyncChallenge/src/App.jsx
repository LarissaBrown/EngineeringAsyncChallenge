import React from 'react'
import './App.css'
import Hero from "./components/Hero"
import Main from "./components/Main"
import Form from "./components/Form"

function App() {

  return (
    <div className="App">
    <Hero />
    <Main />
    <Form placeholder="placeholder" onSubmit="onSubmit" onClick="onClick"/>
    </div>
  )
}

export default App
