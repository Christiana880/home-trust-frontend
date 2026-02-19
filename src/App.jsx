import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SecureRental from "./pages/onboarding/SecureRental/SecureRental";
import TrustVerification from "./pages/onboarding/TrustVerification/TrustVerification";
import Home from "./pages/onboarding/Home/Home";
import Signup from "./pages/auth/Signup/Signup";
import VerifyPhone from "./pages/VerifyPhone/VerifyPhone";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import SelfieVerification from "./pages/NinVerification/SelfieVerification/SelfieVerification";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SecureRental />} />
        <Route path="/trust-verification" element={<TrustVerification />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-phone" element={<VerifyPhone />} />
        <Route path="/login" element={<Login />} />
         <Route path="/selfie-verification" element={<SelfieVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
