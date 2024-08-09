import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(Number(0))
  const inputRef = useRef(null)

  function increment() {

    let inputVal = Number(inputRef.current.value);
    if (inputVal) {
      setCount((prev) => prev + inputVal)
    } else {
      setCount((prev) => prev + 1)
    }
  }

  function decrement() {

    let inputVal = Number(inputRef.current.value);
    if (inputVal) {
      setCount((prev) => prev < 1 ? 0 : prev - inputVal)
    } else {
      setCount((prev) => prev < 1 ? 0 : prev - 1)
    }

  }

  function reset() {
    setCount(0)
  }


  return (
    <>
      <section className='container'>
        <div className='counter'>
          <div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <h1 style={{}}>Count</h1>
              <h1>{count}</h1>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}>
              <button onClick={increment}>+</button>
              <button onClick={decrement}>-</button>
            </div>
          </div>
          <div style={{
            display: "flex", justifyContent: "center",
            alignItems: "center", flexDirection: "column",
          }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
              <p>Increment/Decrement by</p>
              <input type='number' ref={inputRef} className='inputRef' />
            </div>
            <button onClick={reset}>Reset</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
