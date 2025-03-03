import "./App.css";
import Home from "./components/Employee/Home";
import Login from "./components/Login";
import GrievancePage from './components/Employee/Summarize';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Faqs from "./components/Faqs";
import Land from "./components/User/Land";
import NavbarE from "./components/Employee/NavbarE";
import WhatsNew from "./components/User/WhatsNew";
import AboutPage from "./components/User/About";
import LoginNgo from "./components/Admin/LoginNgo";
import HomeNgo from "./components/Admin/HomeNgo"
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
          path="/loginNgo"
          element={
            <>
              <Header />
              <LoginNgo />

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
          path="/homeNgo"
          element={
            <>
              <Header />
              <NavbarE />
              <HomeNgo />
              <Footer />
            </>
          }
        />
        <Route
          path="/summarize/:grievanceId"
          element={
            <>
              <Header />
              <Navbar />
              <GrievancePage />
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
              <WhatsNew />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <NavbarE />
              <AboutPage />
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
