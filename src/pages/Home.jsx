import React from "react";

function Home() {
  return (
    <>
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
      <section className="common-section blog-section">
        <div className="common-heading container text-center common-title mt-5 ">
          <h2 className="common-heading">
            Why Choose Us
          </h2>
          <hr className="w-25 mx-auto" />
        </div>

        <div className="container my-5">
          <div className="row g-5">
            <div className="col-xl-3 col-md-6 col-12">
              <div className="d-flex justify-content-center align-items-center">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    alt="..."
                    className="card-img-top"
                    src="./images/1.png"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="small text-grey ">
                        <i className="fa-solid fa-book-open-reader"></i> : 5000{" "}
                      </p>
                      <p className="small text-grey "> March 3, 2020 </p>
                    </div>
                    <h5 className="card-title mt-3">Web Development</h5>
                    <p className="card-text mt-2 mb-3">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="px-4 py-2 btn btn-dark" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 col-12">
              <div className="d-flex justify-content-center align-items-center">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    alt="..."
                    className="card-img-top"
                    src="./images/2.png"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="small text-grey ">
                        <i className="fa-solid fa-book-open-reader"></i> : 5000{" "}
                      </p>
                      <p className="small text-grey "> March 3, 2020 </p>
                    </div>
                    <h5 className="mt-3 card-title">Freelancing</h5>
                    <p className="card-text mt-2 mb-3">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="px-4 py-2 btn btn-dark" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 col-12">
              <div className="d-flex justify-content-center align-items-center">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    alt="..."
                    className="card-img-top"
                    src="./images/3.png"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="small text-grey ">
                        <i className="fa-solid fa-book-open-reader"></i> : 5000{" "}
                      </p>
                      <p className="small text-grey "> March 3, 2020 </p>
                    </div>
                    <h5 className="mt-3 card-title">Graphic Designer</h5>
                    <p className="card-text mt-2 mb-3">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="px-4 py-2 btn btn-dark " href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 col-12">
              <div className="d-flex justify-content-center align-items-center">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    alt="..."
                    className="card-img-top"
                    src="./images/4.png"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="small text-grey ">
                        <i className="fa-solid fa-book-open-reader"></i> : 5000{" "}
                      </p>
                      <p className="small text-grey "> March 3, 2020 </p>
                    </div>
                    <h5 className="mt-3 card-title">Wordpress </h5>
                    <p className="card-text mt-2 mb-3">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="px-4 py-2 btn btn-dark" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
