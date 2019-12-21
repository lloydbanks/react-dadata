import React from 'react'
import './App.css'
import Header from './components/header'
import Tabs from './components/tabs'

function App() {
  return (
    <>
      <Header />
      <main className="main" role="main">
        <Tabs />
      </main>
    </>
  )
}

export default App
