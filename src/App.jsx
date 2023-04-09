import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  const [data, setData] = useState([])

    useEffect( () => {
        fetch("./fakedata.json")
        .then(res => res.json())
        .then( data => setData(data))
    }, [])

  return (
    <div className="App">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
