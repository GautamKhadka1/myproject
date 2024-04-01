import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      
      <h1>Welcome to React Application</h1>
      
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <footer>
        <p>©GautamKhadka, {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App
