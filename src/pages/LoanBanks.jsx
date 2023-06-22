import React, { useEffect, useState } from "react";
import { useLocation ,Link} from "react-router-dom";

function LoanBanks() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const loanId = searchParams.get("id");
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    fetchBanks();
  }, []);
  console.log(loanId)
  const fetchBanks = async () => {
    try {
        const url = `http://localhost:3001/loan/types/${loanId}/banks`;
        console.log(url)
      const response = await fetch(
        url
      );
      const data = await response.json();
      setBanks(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching banks:", error);
    }
  };

  return (
    <section className="loanbanks-section">
      <div className="container my-5">
        <h3 className="common-heading mb-4">Banks Providing Loan</h3>
        <div className="row">
          {banks.map((bank) => (
            <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-12" key={bank.id}>
              <div className=" card-title card card-box mb-4 rounded-2 p-3">
                
                <div className="card-body">
                  <h5 className="card-title py-5">{bank.bankName}</h5>
                  {/* <p className="card-text">{loan.description}</p> */}
                  <Link
                    to={`/services/loans/loanbanks/loanbanksdescription?loanId=${loanId}&bankId=${bank.id}`}
                    className="pe-3 btn button-sm btn-primary"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LoanBanks;
