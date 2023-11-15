import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
// import Home from "./components/home/home";
import UserDashboard from "./components/userdashboard/userdashboard";
import AdminDashboard from "./components/admindashboard/admindashboard";
import EventList from "./components/eventlist/eventlist";
import EventForm from "./components/createevent/createevent";
import ForgotPassword from "./components/forgotpassword/forgotpassword"; 

function App() {
return (
<Router>
<Routes>
<Route exact path="/" element={<Login />} />
<Route exact path="/signup" element={<Signup />} />
<Route exact path="/forgotpassword" element={<ForgotPassword />} />
<Route exact path="/user" element={<UserDashboard />} />
<Route exact path="/admin" element={<AdminDashboard />} />
<Route exact path="/eventlist" element={<EventList />} />
<Route exact path="/createevent" element={<EventForm />} />
{/* <Route exact path="/home" element={<Home />} /> */}
</Routes>
</Router>
);
}

export default App;
