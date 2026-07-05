import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
import ServiceLayout from "./components/ServiceLayout";

// Service Components
import Will from "./components/Will";
import Release from "./components/Release";
import Rent from "./components/Rent";
import Partition from "./components/Partition";
import Gift from "./components/Gift";
import Sale from "./components/Sale";
import Exchange from "./components/Exchange";
import Cancel from "./components/Cancel";
import Reconveyance from "./components/Reconveyance";
import SaleAgreement from "./components/SaleAgreement";
import JointDevelopment from "./components/JointDevelopment";
import Consent from "./components/Consent";
import GeneralPowerofAttorney from "./components/GeneralPowerofAttorney";

function App() {
  return (
    <div className="App">
      <FloatingContact />
      <Routes>
        {/* Main Pages without Sidebar */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Service Pages with Sidebar Layout */}
        <Route element={<ServiceLayout />}>
          <Route path="/sale" element={<Sale />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/partition" element={<Partition />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/reconveyance" element={<Reconveyance />} />
          <Route path="/saleagreement" element={<SaleAgreement />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/release" element={<Release />} />
          <Route path="/joint" element={<JointDevelopment />} />
          <Route path="/consent" element={<Consent />} />
          <Route path="/attorney" element={<GeneralPowerofAttorney />} />
          <Route path="/will" element={<Will />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
