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
