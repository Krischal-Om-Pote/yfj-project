import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import { Routing } from "./Routing";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
          <ToastContainer/>
        <Header />
        <Routing />
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
