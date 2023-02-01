import { Route, Routes } from "react-router-dom"
// import Navbar from "./Component/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"

const App = () => {
  // Make routes here 
  // Reuse Components as much as possible 
  // Put meaningful comments in code 
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App