import React from "react";
import Loans from "./Loans";
import BasicCard from "../components/Card";
import WhyChooseUs from "./Choose";

function Home() {
  return (
    <main className="bg-main-body">
      <section className="bg-main bg-color bg-main-body hero-section">
        <div className="container">
          <div className="row mb-5">
            <div className="d-flex flex-column align-items-start justify-content-center col-xl-6 xol-lg-6 col-md-12 col-12 text-md-start text-center">
              <h1 className="text-capitalize fw-bolder text-white">
                We Collect High Quality Leads
              </h1>
              <p className="mt-3 mb-5 para-width text-light-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravi.
              </p>

              <div className="text-center w-100 text-md-start">
                <button
                  className="btn btn-primary px-5 py-2"
                  data-bs-offset="0,5"
                  data-bs-placement="top"
                  data-bs-title="Get Best Services"
                  data-bs-toggle="tooltip"
                >
                  Contact Us
                </button>
              </div>
            </div>

            <div className="d-lg-block d-none col-xl-6 xol-lg-6 col-md-12 col-12 hero-image--section">
              <div className="text-md-end text-center mb-5">
                {/* <video autoPlay className="hero-video--section" loop muted src="./images/hero.mp4">
                        Your browser does not support the video tag.
                    </video> */}
                <img
                  className="hero-video--section"
                  src="../images/banner.jpeg"
                  alt="Hero Banner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="more-info-section bg-color">
        <section className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 img-section">
              <figure>
                <img
                  alt="mobile chat"
                  className="img-fluid"
                  width="100px"
                  src="./images/card.png"
                />
              </figure>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12 col-12 d-flex flex-column justify-content-center align-items-start">
              <h1 className="common-heading text-capitalize fw-bolder text-white">
                Steps to Build a <br /> Successful Digital Product
              </h1>
              <p className="mt-3 mb-5 para-width text-light-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravi.Risus commodo viverra maecenas
                accumsan lacus vel facilisis orem ipsum dolor sit amet,
                consectetur adipiscing.
              </p>

              <button className="btn btn-primary px-5 py-2">Contact Us</button>
            </div>
          </div>
        </section>
      </section>
      <Loans/>
      <WhyChooseUs/>
    </main>
  );
}

export default Home;
