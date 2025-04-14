import Products from "./Components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Brands from "./Components/Brands";
import Home from "./Pages/Home";
// import About from "./Pages/About";
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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* Add this line */}

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route element={<AdminRoute />}>
            <Route path="/admin" element={<Admindash />} />
            {/* <Route path="/about" element={<About />} /> */}
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
    </Router>
  );
}

export default App;