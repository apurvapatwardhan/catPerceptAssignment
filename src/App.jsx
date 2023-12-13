
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Description from './Components/Description/Description'

function App() {
 
  console.log('App')
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:idx" element={<Description />}></Route>
    </Routes>
  )
}

export default App
