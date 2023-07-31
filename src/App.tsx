import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import Register from "./pages/login/Register";

const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname.match("/login") ||
      location.pathname.match("/register") ? (
        ""
      ) : (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  );
};

export default App;
