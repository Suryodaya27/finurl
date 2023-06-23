import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <section className="services-section bg-main-body">
      <div className="container text-center common-title fw-bold">
        <h2 className="common-heading text-light">
          What We Will Do For <br /> Our Customers
        </h2>
        <hr className="w-25 mx-auto" />
      </div>

      {/* plx download the images, gifs from Pixcap Website here http://bit.ly/3zJ49Q7 */}

      <div className="container mt-5 text-light">
        <div className="row g-5">
          <div className="col-xxl-4 col-lg-4 col-12">
            <div className="card-box rounded-2 p-5 text-center text-light">
              <img
                alt="GIF Image"
                className="img-fluid"
                src="../images/link.gif"
                width="200px"
              />

              <h5 className="my-3 fw-normal text-light">Loans</h5>
              <p className="pe-3 mb-5 text-light">
                Hunky dory barney fanny around up the duff no biggie loo cup of
                tea jolly good ruddy say arse!
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <Link
                  className="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3"
                  to="/services/loans"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xxl-4 col-lg-4 col-12">
            <div className="card-box rounded-2 p-5 text-center shadow">
              <img
                alt="GIF Image"
                className="img-fluid"
                src="../images/speaker.gif"
                width="200px"
              />

              <h5 className="my-3 fw-normal">Content marketing</h5>
              <p className="pe-3 mb-5">
                Hunky dory barney fanny around up the duff no biggie loo cup of
                tea jolly good ruddy say arse!
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <Link
                  className="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3"
                  to="/service.html"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xxl-4 col-lg-4 col-12">
            <div className="card-box rounded-2 p-5 text-center">
              <img
                alt="GIF Image"
                className="img-fluid"
                src="../images/seo.gif"
                width="200px"
              />
              <h5 className="my-3 fw-normal">On Page SEO</h5>
              <p className="pe-3 mb-5">
                Hunky dory barney fanny around up the duff no biggie loo cup of
                tea jolly good ruddy say arse!
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <Link
                  className="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3"
                  to="/service.html"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
