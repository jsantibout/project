import React from 'react'
import './style.css'
import Card from './Card'
import Header from './Header'
import data from './Data'

function App() {
  const cards = data.map(item=>{
    return(
      <Card
        key = {item.id}
        {...item}
      />
    )
  })
  return (
    <div className="App">
      <Header />
      <section>
        {cards}
      </section>
    </div>
  )
}

export default App
