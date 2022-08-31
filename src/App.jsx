import './App.css'
import Contact from './components/Contact'
import React from 'react'

function App() {
  return (
    <div className="App">
      <Contact lastName="Lacabanne "  firstName="Adeline " isLoggedIn = {true}></Contact>
      <Contact lastName="Bordenave " firstName="Marion " isLoggedIn = {false}></Contact>
    </div>
  )
}

export default App