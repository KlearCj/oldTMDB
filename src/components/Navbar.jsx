import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
const context = useContext(AuthContext);

const logout=()=>{
return context.toggleAuth()
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            UwU Movies
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/movies" className="nav-link">
                 
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tvshows" className="nav-link">
                 
                  TvShows
                </Link>
              </li>
            </ul>
          </div>
          {context.authenticated ? (
            <>
              <Link to="/sign" type="submit" className="btn">
                Sign
              </Link>
              <Link to="/log" type="submit" className="btn">
                Loging
              </Link>
            </>
          ) : (<>
            <p className="text-dark">ESTAS LOGUEADO PERRO</p>
            <Link onClick={logout} to="/log" type="submit" className="btn">
                Logout
              </Link>
              </>
          )}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
