import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Mainbar from './Mainbar'
import Footer from './Footer'

import './App.css'

function App() {
  return (
    <div className='container'>
      <header className='head'>
        <Header/> 
      </header>

      <aside className='side'><Sidebar/></aside>
      <main className='main'><Mainbar/></main>
      <footer className='foot'><Footer/></footer>

    </div>
  )
}

export default App
