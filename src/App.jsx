import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";

import ForgotPassword from "./widgets/layout/ForgotPassword";
import { Verification } from "./widgets/layout/Verification";
import { ToastContainer } from "react-toastify";
import ResetPassword from "./widgets/layout/ResetPassword";
import VerifiedResetPassword from "./widgets/layout/VerifiedResetPassword";
import Protected from "./layouts/protected";
import IsLogedIn from "./layouts/isLogedIn";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import PricingPlan from "./pages/PricingPlan/PricingPlan";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* <Route path="/dashboard/*" element={<Protected Component = {Dashboard} />} /> */}
        <Route path="/dashboard/*" element={<Dashboard />} />

        {/* <Route path="/auth/*" element={<IsLogedIn Component = {Auth} />} /> */}
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/pricing" element={<PricingPlan></PricingPlan>} />
        <Route path="/contact" element={<Contact></Contact>} />

        <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />

        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/password-reset/:id/*" element={<ResetPassword />} />
        <Route path="/user-verified" element={<Verification />} />
        <Route
          path="/reset-password-verified"
          element={<VerifiedResetPassword />}
        />
      </Routes>
    </>
  );
}

export default App;
