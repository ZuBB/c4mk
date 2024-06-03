import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import ProductSubform from './ProductSubform'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <form action="#">
        <ProductSubform />
        <div>
          <button type="button">Add new product</button>
        </div>
      </form>
    </>
  )
}

export default App
