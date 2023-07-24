import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Signup from "./Pages/Signup";
import Contact from "./Pages/Contact";
import Supplier from "./Pages/Supplier";
import Booking from "./Pages/Booking";
import Payment from "./Pages/Payment.jsx";
import Category from "./Pages/Category";
import Success from "./Pages/Success.jsx";

export function Routing() {
  return (
    <div style={{ padding: "20px", width: "100%", overflow: "hidden" }}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/suppliers" element={<Supplier />} />
        <Route exact path="/booking" element={<Booking />} />
        <Route exact path="/category" element={<Category />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}
