import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import data from './data'

export default function App() {


  const mainElements = data.map((item) => {
    return (
        <Main
            key={item.id}
            {...item}
        />
    )
})

  

  return (
    <>
    <Header/>
    <main className='container'>
      {mainElements}
    </main>
  

    </>
  )
}


