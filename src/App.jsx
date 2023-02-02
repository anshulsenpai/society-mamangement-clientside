import { Route, Routes } from "react-router-dom"
import AddVisitor from "./Pages/AddVisitor/AddVisitor"
import Bills from "./Pages/Bills/Bills"
import Complaints from "./Pages/Complaints/Complaints"
// import Navbar from "./Component/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import ManageVisitors from "./Pages/ManageVisitors/ManageVisitors"
import Meeting from "./Pages/Meetings/Meeting"
import Voting from "./Pages/Voting/Voting"

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
        <Route path="/meetings-events" element={<Meeting />}/>
        <Route path="/bills" element={<Bills />}/>
        <Route path="/complaints" element={<Complaints />}/>
        <Route path="/voting" element={<Voting />}/>
      </Routes>
    </div>
  )
}

export default App