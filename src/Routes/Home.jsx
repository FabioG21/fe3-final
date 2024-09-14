import React, { useState, state } from 'react'
import Card from '../Components/Card'
import { ContextGlobal, useDentStates } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useDentStates();

  return (
    <main  className={state.theme === 'dark' ? 'dark' : ''} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */
        state.dents.map((dents) => (<Card key={dents.id} dent={dents}/>))
        }
      </div>
    </main>
  )
}

export default Home