import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import BankCard from "../components/BankCard";

function LoanBanks() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const loanId = searchParams.get("id");
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    fetchBanks();
  }, []);

  const fetchBanks = async () => {
    try {
      const url = `http://localhost:3001/loan/types/${loanId}/banks`;
      const response = await fetch(url);
      const data = await response.json();
      setBanks(data);
    } catch (error) {
      console.error("Error fetching banks:", error);
    }
  };

  return (
    <section className="loans-section bg-main-body">
      <div className="container">
        <div className="row py-5 ">
        <div className="common-heading container text-center text-light common-title pt-5 ">
          <h2 className="common-heading text-light">
            Banks Providing loan
          </h2>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="row">
          {banks.map((bank) => (
            <div
              className="col-xxl-4 col-lg-4 col-md-6 col-sm-12"
              key={bank.id}
            >
              <BankCard
                bankName={bank.bankName}
                loanId={loanId}
                bankId={bank.id}
              />
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

export default LoanBanks;
