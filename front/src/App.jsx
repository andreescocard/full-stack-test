import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Layout from "./components/Layout";


function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
    <div className="container">

    This is a demo
    </div>
  </Layout>
  )
}

export default App
