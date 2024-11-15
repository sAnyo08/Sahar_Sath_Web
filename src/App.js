import "./App.css";
import Home from "./components/Employee/Home";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Summarize from "./components/Employee/Summarize";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Faqs from "./components/Faqs";
import Land from "./components/User/Land";
import NavbarE from "./components/Employee/NavbarE";
// import Count from "./components/User/Count";
// import Table from "./components/Employee/Table";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/loginuser"
          element={
            <>
              <Header />
              <Login />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <Header />
              <NavbarE />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/summarize"
          element={
            <>
              <Header />
              <Navbar />
              <Summarize />
              <Footer />
            </>
          }
        />
        <Route
          path="/faqsE"
          element={
            <>
              <Header />
              <NavbarE />
              <Faqs />
              <Footer />
            </>
          }
        />
        <Route
          path="/faqs"
          element={
            <>
              <Header />
              <Navbar />
              <Faqs />
              <Footer />
            </>
          }
        />
        <Route
          path="/land"
          element={
            <>
              <Header />
              <Navbar />
              <Land />
              <Footer />
            </>
          }
        />
        <Route path="/" element={<Navigate to="/land" />} />
      </Routes>
    </Router>
  );
}

export default App;
