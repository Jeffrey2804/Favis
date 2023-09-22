import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MDBContainer } from 'mdb-react-ui-kit';
import AppNavbar from "./components/AppNavbar";
import Home from "./pages/Home";
import { Container } from 'react-bootstrap';
import HostCar from "./pages/HostCar";
import AffiliatesCar from "./pages/AffiliatesCar";
import CoHost from "./pages/CoHost";
import CarDetails from "./pages/CardDetails";
import ToroHost from "./pages/ToroHost";
import { UserProvider } from "./UserContext";
import Footer from "./components/Footer";
import SupportAdmin from "./SupportAdmin/index";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Dashboard from "./pages/Dashboard";
import CarSingle from "./components/carSingle";
import Register from "./pages/Register";
import AdminVehicle from "./pages/AdminVehicle";
import Parking from "./pages/Parking";
import ApplicationViewAdmin from "./pages/ApplicationViewAdmin";
import VerifyUser from "./pages/VerifyUser";
import Help from "./pages/Help";
import AskQuestion from "./components/askQuestion";
import AdminDashboard from "./pages/AdminDashboard";

import Feedback from "./components/Feedback";
import CustomerGallery from "./components/CustomerGallery";
import ApplicationTable from "./SupportAdmin/ApplicationTable";
function App() {

  const [user, setUser] = useState({
    id: null,
    userType: null
  })
  const unsetUser = () => {
    localStorage.removeItem("token");
  }


  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (typeof data._id !== "undefined") {
          setUser({
            id: data._id,
            userType: data.userType
          })
        }
        else {
          setUser({
            id: null,
            userType: null
          })
        }

      })



  }, [])


  return (
    <div>
      <UserProvider value={{ user, setUser, unsetUser }}>
        <Router>
          <AppNavbar />

          <div>

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/affiliates" element={<AffiliatesCar />} />

              <Route exact path="/hostcar" element={<HostCar />} />
              <Route exact path="/co-host" element={<CoHost />} />

              <Route exact path="/car-details" element={<CarDetails />} />
              {/*          <Route exact path ="/carlist" element={<CarList />} />*/}

              <Route exact path="/turo-profile" element={<ToroHost />} />
              <Route exact path="/support" element={<SupportAdmin />} />
              <Route exact path="/Login" element={<Login />} />
              <Route exact path="/Logout" element={<Logout />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/support-admin" element={<SupportAdmin />} />
              <Route exact path="/parking" element={<Parking />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/vehicle" element={<AdminVehicle />} />
              <Route exact path="/car-single" element={<CarSingle />} />
              <Route exact path="/application-tabnle" element={<ApplicationTable />} />

              <Route exact path="/help" element={<Help />} />
              <Route exact path="/view-application/:applicationId" element={<ApplicationViewAdmin />} />
              <Route exact path="/verify/:verificationId" element={<VerifyUser />} />
              <Route exact path="/frequently-ask-question" element={<AskQuestion />} />
              <Route exact path="/customer-gallery" element={<CustomerGallery />} />
              <Route exact path="/feedback" element={<Feedback />} />
              <Route exact path="/admin-dashboard" element={<AdminDashboard />} />

            </Routes>

          </div>
          <Footer />
        </Router>



      </UserProvider>
    </div>
  );
}

export default App;
