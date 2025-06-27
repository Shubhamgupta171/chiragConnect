import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import Welcome from "./pages/Welcome.js";
import Registration from "./pages/Registration.js";
import Login from "./pages/Login.js";
import NotFound from "./pages/NotFound";
import LoginFlow from "./pages/LoginFlow";
import TypeVendor from "./pages/TypeVendor.js";
import SellerVendor from "./pages/SellerVendor.js";
import ServiceVendor from "./pages/ServiceVendor.js";
import DroneServiceRegistration from "./pages/DroneServiceRegistration.js";
import DeliveryPartner from "./pages/DeliveryPartner";
import RegistrationSuccess from "./pages/RegistrationSuccess"; 
import UnderReview from "./pages/UnderReview.js";  
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/home" element={<Home />} />

           <Route path="/registration" element={<TypeVendor />} />
          <Route path="/register/service-vendor" element={<ServiceVendor />} />
          <Route path="/drone-service-registration" element={<DroneServiceRegistration />} />

          <Route path="/register/seller-vendor" element={<SellerVendor />} />
          <Route path="/register/delivery-partner" element={<DeliveryPartner />} />
          <Route path="/registration-success" element={<RegistrationSuccess />} />
          <Route path="/under-review" element={<UnderReview />} />
          <Route path="/success" element={<LoginFlow />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
