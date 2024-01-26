import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Will from "./components/Will";
import Release from "./components/Release";
import Rent from "./components/Rent";
import Partition from "./components/Partition";
import Gift from "./components/Gift";
import Sale from "./components/Sale";
import Footer from "./components/Footer";
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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
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

        <Route
          path="/sale"
          element={
            <>
              <Navbar />
              <Sale />
            </>
          }
        />

        <Route
          path="/gift"
          element={
            <>
              <Navbar />
              <Gift />
            </>
          }
        />

        <Route
          path="/partition"
          element={
            <>
              <Navbar />
              <Partition />
            </>
          }
        />

        <Route
          path="/exchange"
          element={
            <>
              <Navbar />
              <Exchange />
            </>
          }
        />

        <Route
          path="/reconveyance"
          element={
            <>
              <Navbar />
              <Reconveyance />
            </>
          }
        />

        <Route
          path="/saleagreement"
          element={
            <>
              <Navbar />
              <SaleAgreement />
            </>
          }
        />

        <Route
          path="/cancel"
          element={
            <>
              <Navbar />
              <Cancel />
            </>
          }
        />

        <Route
          path="/rent"
          element={
            <>
              <Navbar />
              <Rent />
            </>
          }
        />

        <Route
          path="/release"
          element={
            <>
              <Navbar />
              <Release />
            </>
          }
        />

        <Route
          path="/joint"
          element={
            <>
              <Navbar />
              <JointDevelopment />
            </>
          }
        />

        <Route
          path="/consent"
          element={
            <>
              <Navbar />
              <Consent />
            </>
          }
        />

        <Route
          path="/attorney"
          element={
            <>
              <Navbar />
              <GeneralPowerofAttorney />
            </>
          }
        />

        <Route
          path="/will"
          element={
            <>
              <Navbar />
              <Will />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
