import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { Wrapper } from "./App.style";
import CustomForm from "./pages/customization/CustomForm";
import Payment from "./pages/payment/Payment";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";

function App() {
  return (
    <Wrapper>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customization" element={<CustomForm />} />
          {/*<Route path="/payment" element={<Payment />} />*/}
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App;
