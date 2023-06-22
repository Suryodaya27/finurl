import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function LoanBanksDescription() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const loanId = searchParams.get("loanId");
  const bankId = searchParams.get("bankId");
  const [bankInfo, setBankInfo] = useState(null);

  useEffect(() => {
    fetchBankInfo();
  }, []);

  const fetchBankInfo = async () => {
    try {
      const url = `http://localhost:3001/loan/types/${loanId}/banks/${bankId}`;
      const response = await fetch(url);
      const data = await response.json();
      setBankInfo(data);
    } catch (error) {
      console.error("Error fetching bank information:", error);
    }
  };

  const validationSchema = Yup.object().shape({
    applicant_firstname: Yup.string().required("First Name is required"),
    applicant_lastname: Yup.string().required("Last Name is required"),
    applicant_phoneNumber: Yup.string().required("Phone Number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    gender: Yup.string().required("Gender is required"),
    dob: Yup.string().required("Date of Birth is required"),
    pan_number: Yup.string().required("PAN Number is required"),
    monthly_income: Yup.number()
      .typeError("Monthly Income must be a number")
      .required("Monthly Income is required"),
    loan_amount: Yup.number()
      .typeError("Loan Amount must be a number")
      .required("Loan Amount is required"),
    employment_type: Yup.string().required("Employment Type is required"),
    current_address: Yup.string().required("Current Address is required"),
    address_pincode: Yup.string().required("Address Pincode is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const url = `http://localhost:3001/loan/types/${loanId}/banks/${bankId}/application`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        console.log("Application submitted successfully");
        // Perform any further actions upon successful submission
      } else {
        console.error("Application submission failed");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      applicant_firstname: "",
      applicant_lastname: "",
      applicant_phoneNumber: "",
      email: "",
      gender: "",
      dob: "",
      pan_number: "",
      monthly_income: "",
      loan_amount: "",
      employment_type: "",
      current_address: "",
      address_pincode: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  if (!bankInfo) {
    return <div>Loading...</div>;
  }

  return (
    <section className="loanbanksdesc-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Bank Information</h3>
            <p>Bank Name: {bankInfo.bank.bankName}</p>
            <p>Loan: {bankInfo.loanType.loanName}</p>
            <p>Interest Rate: {bankInfo.loan.interest}</p>
            {/* Add more details as needed */}
          </div>
          <div className="col-md-6">
            <h3>Application Form</h3>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="applicant_firstname">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="applicant_firstname"
                  name="applicant_firstname"
                  value={formik.values.applicant_firstname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.applicant_firstname &&
                  formik.errors.applicant_firstname && (
                    <div className="text-danger">
                      {formik.errors.applicant_firstname}
                    </div>
                  )}
              </div>
              {/* Add more form fields for other applicant data */}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoanBanksDescription;
