import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Navbar from "./Components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Buy from "./Components/Buy/Buy";
import Sell from "./Components/Sell/Sell";
import { useAuth } from "./Contexts/AuthContext.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword.jsx";
import RecoverPassword from "./Components/RecoverPassword/RecoverPassword.jsx";
import Loading from "./Components/Loading/Loading.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Checkout from "./Components/Checkout/Checkout.jsx";
import ThankYou from "./Components/ThankYou/ThankYou.jsx";

function App() {
  const { token, loading } = useAuth();

  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    AOS.refresh();
  }, []);

  if (loading)
    return (
      <div className="overlay">
        <Loading />
      </div>
    );

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/wall"
          element={token ? <Buy /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/upload"
          element={token ? <Sell /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/dashboard"
          element={token ? <Dashboard /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/checkout"
          element={token ? <Checkout /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/thanks"
          element={token ? <ThankYou /> : <Navigate to="/login" replace />}
        />
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/recuperar" element={<ForgotPassword />} />
        <Route path="/reset" element={<RecoverPassword />} />
      </Routes>
    </>
  );
}

export default App;
