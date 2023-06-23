import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BasicCard from "../components/Card";
import { Carousel } from "react-bootstrap";

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
    } catch (error) {
      console.error("Error fetching loans:", error);
    }
  };

  const renderLoanCards = () => {
    const loanGroups = loans.reduce((groups, loan, index) => {
      if (index % 3 === 0) {
        groups.push([]);
      }
      groups[groups.length - 1].push(loan);
      return groups;
    }, []);

    return loanGroups.map((group, index) => (
      <Carousel.Item key={index} className="carousel-item">
        <div className="row">
          {group.map((loan) => (
            <div
              key={loan.id}
              className="col-xxl-4 col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <BasicCard
                loanName={loan.loanName}
                description={loan.description}
                imageUrl={loan.image}
                loanId={loan.id}
              />
            </div>
          ))}
        </div>
      </Carousel.Item>
    ));
  };

  return (
    <section className="loans-section bg-main-body">
      <div className="container">
        <div className="row py-5">
          <div className="common-heading container text-center text-light common-title pt-5">
            <h2 className="common-heading text-light">Loans</h2>
            <hr className="w-25 mx-auto" />
          </div>
          <div className="col-12">
            <Carousel
              nextLabel=""
              prevLabel=""
              interval={null}
              indicators={false}
              fade={false}
              className="carousel"
            >
              {renderLoanCards()}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Loans;
