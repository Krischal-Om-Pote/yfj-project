import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Signup from "./Pages/Signup";
import Contact from "./Pages/Contact";
import Supplier from "./Pages/Supplier";
import Booking from "./Pages/Booking";
import Test from "./Pages/Test";
import Category from "./Pages/Category";

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
        <Route exact path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}
