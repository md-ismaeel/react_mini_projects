import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InfiniteScrolling } from './InfiniteScrolling/InfiniteScrolling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InfiniteScrolling />
    </>
  )
}

export default App
