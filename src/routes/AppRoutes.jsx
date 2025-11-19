import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./../components/pages/LandingPage";
import Login from "./../components/pages/Auth/Login";
import Signup from "./../components/pages/Auth/Signup";
import QnA from "../components/pages/QnA";
import Remedies from "./../components/pages/Remedies";
import CompleteProfilePage from "../components/pages/Auth/CompleteProfilePage";
import ProtectedRoute from "../components/pages/Auth/ProtectedRoute";
import AuthInitializer from "../components/pages/Auth/AuthInitializer";
import AboutUs from "../components/pages/Aboutus";
import Services from "../components/pages/services";
import ContactUs from "../components/pages/Contact_us";
import PrivacyPolicy from "../components/pages/PrivacyPolicy";
import Privacy from "../components/pages/Privacy";
import Cookies from '../components/pages/cookies';
import Help from "../components/pages/Help";
import Supportervices from '../components/pages/support_services';
export default function AppRoutes() {
  return (
    <BrowserRouter>
     <AuthInitializer>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route >
        <Route path="/about_us" element={<AboutUs/>}/>
        <Route path="/service" element={<Services/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/terms" element={<PrivacyPolicy/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/cookies" element={<Cookies/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/support" element={<Supportervices/>}/>
        </Route>
        <Route path="/" element={
          <ProtectedRoute>
          <LandingPage />
          </ProtectedRoute>
          } />
        <Route path="/qna" element={
          <ProtectedRoute>
          <QnA />
          </ProtectedRoute>
          } />
        <Route path="/remedies" element={
          <ProtectedRoute>
          <Remedies />
          </ProtectedRoute>
          } />
        <Route path="/complete-profile" element={
          <ProtectedRoute>
          <CompleteProfilePage/>
          </ProtectedRoute>
          } />

      </Routes>
     </AuthInitializer>
    </BrowserRouter>
  );
}
