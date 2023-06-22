import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Loans from "./pages/Loans";
import LoanBanks from "./pages/LoanBanks";
import LoanBanksDescription from "./pages/LoanBanksDescription";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/loans" element={<Loans/>} />
          <Route path="/services/loans/loanbanks" element={<LoanBanks/>} />
          <Route path="/services/loans/loanbanks/loanbanksdescription" element={<LoanBanksDescription/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
