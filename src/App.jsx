import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Navbar } from "./components/Navbar";
// import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Loans from "./pages/Loans";
import LoanBanks from "./pages/LoanBanks";
import LoanBanksDescription from "./pages/LoanBanksDescription";
import LoginPage from "./pages/LoginPage";

import Layout from "./Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/loans" element={<Loans/>} />
          <Route path="/services/loans/loanbanks" element={<LoanBanks/>} />
          <Route path="/services/loans/loanbanks/loanbanksdescription" element={<LoanBanksDescription/>} />
          <Route path = "/login" element={<LoginPage/>} />
        </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
