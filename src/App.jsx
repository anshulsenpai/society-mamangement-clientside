import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import AddVisitor from "./Pages/AddVisitor/AddVisitor";
import Bills from "./Pages/Bills/Bills";
import Cart from "./Pages/Cart/Cart";
import Complaints from "./Pages/Complaints/Complaints";
// import Navbar from "./Component/Navbar/Navbar"
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ManageVisitors from "./Pages/ManageVisitors/ManageVisitors";
import Marketplace from "./Pages/Marketplace/Marketplace";
import Meeting from "./Pages/Meetings/Meeting";
import MyOrder from "./Pages/MyOrders/MyOrder";
import MyProfile from "./Pages/MyProfile/MyProfile";
import OrderPlace from "./Pages/OrderPlace/OrderPlace";
import MyPayment from "./Pages/PaymentHistory/PaymentHistory";
import Register from "./Pages/Register/Register";
import Voting from "./Pages/Voting/Voting";

const App = () => {
  // Make routes here
  // Reuse Components as much as possible
  // Put meaningful comments in code

  const user = useSelector((state) => state.user.currentUser);
  const isUser = user ? true : false;

  // console.log(user);

  return (
    <div className="app">
      {/* <Navbar /> */}
      <Routes>
        {/* {user ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )} */}

        <Route
          path="/login"
          element={isUser ? <Navigate to="/" /> : <Login />}
        />

        <Route
          path="/"
          element={!isUser ? <Navigate to="/login" /> : <Home />}
        />

        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}

        <Route path="/manage-visitors" element={<ManageVisitors />} />
        <Route path="/add-visitors" element={<AddVisitor />} />
        <Route path="/meetings-events" element={<Meeting />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/voting" element={<Voting />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-cart" element={<Cart />} />
        <Route path="/order-place" element={<OrderPlace />} />
        <Route path="/my-orders" element={<MyOrder />} />
        <Route path="/payments" element={<MyPayment />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
