import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-color py-4 pt-lg-4">
      <div className="container">
        {/* <Link className="navbar-brand text-white fw-bold" to="/">Finurl</Link> */}
        <img className="img-body" src="../images/finurl.png" alt="Finurl"></img>
        <button
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-bs-target="#navbarSupportedContent"
          data-bs-toggle="collapse"
          type="button"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
            <li className="nav-item">
              <Link className="nav-link" to="/contact.html">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/contact.html">Contact</Link> */}
              <Link
                className="nav-link text-light fw-bold rounded-2"
                to="/login"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
