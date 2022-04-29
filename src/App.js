import { ToastContainer } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Inventory from "./Pages/Home/Inventory/Inventory";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shered/Footer/Footer";
import Header from "./Pages/Shered/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
