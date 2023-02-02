import { Route, Routes } from "react-router-dom"
import AddVisitor from "./Pages/AddVisitor/AddVisitor"
// import Navbar from "./Component/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import ManageVisitors from "./Pages/ManageVisitors/ManageVisitors"

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
        <Route path="/manage-visitors" element={<ManageVisitors />}/>
        <Route path="/add-visitors" element={<AddVisitor />}/>
      </Routes>
    </div>
  )
}

export default App