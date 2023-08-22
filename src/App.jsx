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
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
          <ToastContainer/>
        <Header />
        <Routing />
        <Footer/>
      </BrowserRouter>
      </DndProvider>
    </>
  );
}

export default App;
