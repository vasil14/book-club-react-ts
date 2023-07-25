import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";

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
        <Route path="/register" />
      </Routes>
    </>
  );
};

export default App;
