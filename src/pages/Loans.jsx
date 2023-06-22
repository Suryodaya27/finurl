import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Loans() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    fetchLoans();
  }, []);

  const fetchLoans = async () => {
    try {
      const response = await fetch("http://localhost:3001/loan/types");
      const data = await response.json();
      setLoans(data);
    //   console.log(data);
    } catch (error) {
      console.error("Error fetching loans:", error);
    }
  };

  return (
    <section className="loans-section">
      <div className="container">
        <div className="row my-5">
            <h3 className="common-heading mb-4">Loans Provided By Finurl</h3>
          {loans.map((loan) => (
            <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-12" key={loan.id}>
              <div className=" card-title card card-box mb-4 rounded-2 p-3">
                <img
                  src={loan.image}
                  className="card-img-top"
                  alt={loan.name}
                />
                <div className="card-body">
                  <h5 className="card-title py-5">{loan.loanName}</h5>
                  <p className="card-text">{loan.description}</p>
                  <Link
                    to={`/services/loans/loanbanks?id=${loan.id}`}
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

export default Loans;
