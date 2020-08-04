import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="row mb-4">
      <Link to="/Home" className="col-3 logo">
        <img src="img/logo.png" alt="vntbox" />
      </Link>

      <div className="col-5 row no-gutters">
        <div className="col-1 pl-3">
          <i className="fas fa-search opacity-3" />
        </div>
        <div className="col-6 mt-4">
          <input
            type="search"
            className="form-control"
            id="search"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="col-4 text-right user-perfil">
        <div className="row no-gutters">
          <h4 className="col-8 user-perfil-name text-truncate">
            <a href="profile.html">Martin Brumana</a>
          </h4>
          <div className="col-2 user-perfil-img">
            <a href="profile.html">&nbsp;</a>
          </div>
          <div className="col-2 user-perfil-dots">
            {/* <i className="fas fa-plus-square" title="Add Event" /> */}
            <i className="fas fa-ellipsis-v" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
