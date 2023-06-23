import { Link } from "react-router-dom";

function Navbar () {
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");
  };

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
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </Link>
              <ul className="dropdown-menu ">
                <li>
                  <Link className="dropdown-item" to="/services/loans">
                    loans
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Credit Cards
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item " to="#">
                    Insurance
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact.html">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              {token ? (
                <>
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                  <Link
                    className="nav-link text-light fw-bold rounded-2"
                    to="/"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <Link
                  className="nav-link text-light fw-bold rounded-2"
                  to="/login"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar