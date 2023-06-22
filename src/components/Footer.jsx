import React from "react";

function Footer() {
  return (
    <footer className="main-footer-section">
      <div className="contact-details">
        <div className="container px-5">
          <div className="row g-0">
            <div className="col-lg-4">
              <div className="contact-div p-5 d-flex flex-column justify-content-center align-items-center">
                <div className="icon-div d-flex justify-content-center align-items-center rounded-circle mb-3">
                  <img
                    src="../images/call.gif"
                    alt="GIF Image"
                    className="img-fluid"
                  />
                  {/* plx download the images, gifs from here http://bit.ly/3zJ49Q7 */}
                </div>
                <p className="text-white">(+00) 1234 5678</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="contact-div p-5 d-flex flex-column justify-content-center align-items-center">
                <div className="icon-div d-flex justify-content-center align-items-center rounded-circle mb-3">
                  {/* <i className="fa-solid fa-phone"></i> */}
                  <img
                    src="../images/email.gif"
                    alt="GIF Image"
                    className="img-fluid"
                  />
                </div>
                <p className="text-white">(+00) 1234 5678</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="contact-div p-5 d-flex flex-column justify-content-center align-items-center">
                <div className="icon-div d-flex justify-content-center align-items-center rounded-circle mb-3">
                  <img
                    src="../images/map.gif"
                    alt="GIF Image"
                    className="img-fluid"
                  />
                </div>
                <p className="text-white">(+00) 1234 5678</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-section py-5 text-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-6 col-6">
                <div className="footer-links">
                  <h4 className="text-white mt-5 mb-3">About</h4>
                  <ul className="text-light-grey list-unstyled d-flex flex-column gap-2">
                    <li>Our Story</li>
                    <li>Our Story</li>
                    <li>Our Story</li>
                    <li>Our Story</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-6">
                <div className="footer-links">
                  <h4 className="text-white mt-5 mb-3">About</h4>
                  <ul className="text-light-grey list-unstyled d-flex flex-column gap-2">
                    <li>Our Story</li>
                    <li>Our Story</li>
                    <li>Our Story</li>
                    <li>Our Story</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-6">
                <div className="footer-links">
                  <h4 className="text-white mt-5 mb-3">About</h4>
                  <ul className="text-light-grey list-unstyled d-flex flex-column gap-2">
                    <li>Our Story</li>
                    <li>Our Story</li>
                    <li>Our Story</li>
                    <li>Our Story</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12">
                <div className="footer-links">
                  <h4 className="mt-5 mb-3 text-white">Subscribe</h4>
                  <div className="input-group mb-3 w-75">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <span
                      className="input-group-text btn btn-primary"
                      id="basic-addon2"
                    >
                      Subscribe
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <hr className="container mx-auto" />

          <div className="row">
            <div className="col-lg-8 col-12">
              Copyright ©2023 All rights reserved. | This template is made with
              by <span className="bg-theme">Finurl.com</span>
            </div>
            <div className="col-md-4 col-12">
              <div className="d-flex justify-content-center justify-content-lg-end gap-5 mt-lg-0 mt-3">
                <a
                  href="https://www.instagram.com/thapatechnical/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3">
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </a>
                <div className="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div className="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3">
                  {/* <i className="fa-brands fa-whatsapp"></i> */}
                  <i className="fa-brands fa-twitter"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
