import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Todo from './components/Todo'
import TodoContextProvider from './context/TodoContext'

function App() {

  

  return (
    <TodoContextProvider>
      <div className="App font-body text-lg dark:bg-neutral-dark-verydarkblue">
        <Header />
        <Todo />
        <Footer />
      </div>
      </TodoContextProvider>
  )
}

export default App
