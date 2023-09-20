import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bio from './Component/Bio'
import Info from './Component/Info'
import Footer from './Component/Footer'

function App() {
 

  return (
    
    <div className='Container'>
      <div className='sub-container'>
        <header><Info/></header>
        <main><Bio/></main>
      
      <Footer/>
      </div>
      
    </div>
    
  )
}

export default App
