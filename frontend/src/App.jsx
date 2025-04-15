import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Products from "./Components/Products";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Brands from "./Components/Brands";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Admindash from "./Pages/Admindash";
import Userdash from "./Pages/Userdash";
import PrivateRoute from "./routes/PrivateRoute";
import AdminRoute from "./routes/AdminRoute";
import UserRoute from "./routes/UserRoute";
import Services from "./Components/Services";
import ContactUs from "./Components/ContactUs";
import Exide from './Components/BrandPages/Exide';
import Amaron from './Components/BrandPages/Amaron';

function AppWrapper() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/register'];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route element={<AdminRoute />}>
            <Route path="/admin" element={<Admindash />} />
          </Route>
          <Route element={<UserRoute />}>
            <Route path="/user" element={<Userdash />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/brand/:id" element={<Brands />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/brands/exide" element={<Exide />} />
            <Route path="/brands/amaron" element={<Amaron />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
